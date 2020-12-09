import { IDENTITY_CONFIG, METADATA_OIDC } from "../utils/authConst";
import { UserManager, WebStorageStateStore, Log } from "oidc-client";
import Axios from "axios";

export default class AuthService {
    UserManager;

    constructor() {
        this.UserManager = new UserManager({
            ...IDENTITY_CONFIG,
            userStore: new WebStorageStateStore({ store: window.sessionStorage }),
            metadata: {
                ...METADATA_OIDC
            }
        });
        // Logger
        Log.logger = console;
        Log.level = Log.DEBUG;
        this.UserManager.events.addUserLoaded((user) => {
            if (window.location.href.indexOf("callback") !== -1) {
                this.navigateToScreen();
            }
        });
        this.UserManager.events.addSilentRenewError((e) => {
            console.log("silent renew error", e.message);
        });

        this.UserManager.events.addAccessTokenExpired(() => {
            console.log("token expired");
            this.logout();
        });
    }
   
    signinRedirectCallback = async (location) => {
        this.UserManager.signinRedirectCallback().then(() => {
            console.log(location);
            console.log("Location");
        });
    };


    getUser = async () => {
        console.log("authService.getUser");
        const user = await this.UserManager.getUser();
        if (!user) {
            return await this.UserManager.signinRedirectCallback();
        }
        return user;
    };

    parseJwt = (token) => {
        console.log("authService.parseJwt");
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace("-", "+").replace("_", "/");
        return JSON.parse(window.atob(base64));
    };


    signinRedirect = () => {
        Log.info("SignInRedirect")
        console.log("authService.signInRedirect");
        localStorage.setItem("redirectUri", window.location.pathname);
        this.UserManager.signinRedirect({});
    };


    navigateToScreen = () => {
        console.log("authService.navigatToScreen");
        window.location.replace("/en/dashboard");
    };


    isAuthenticated = () => {
        console.log("authService.isAuthenticated");
        const oidcStorage = JSON.parse(sessionStorage.getItem(`oidc.user:${process.env.REACT_APP_AUTH_URL}:${process.env.REACT_APP_IDENTITY_CLIENT_ID}`))

        return (!!oidcStorage && !!oidcStorage.access_token)
    };

    signinSilent = () => {
        console.log("authService.signInSilent");
        this.UserManager.signinSilent()
            .then((user) => {
                console.log("signed in", user);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    signinSilentCallback = () => {
        console.log("authService.signinSlientCallback");
        this.UserManager.signinSilentCallback()
    };

    createSigninRequest = () => {
        console.log("Create Sign In Request");
        console.log("authService.createSigninRequest");
        return this.UserManager.createSigninRequest();
    };

    logout = () => {
        console.log("authService.logout");
        this.UserManager.signoutRedirect({
            id_token_hint: localStorage.getItem("id_token")
        });
        this.UserManager.clearStaleState();
    };

    signoutRedirectCallback = () => {
        console.log("authService.signoutRedirectCallback");
        this.UserManager.signoutRedirectCallback().then(() => {
            localStorage.clear();
            window.location.replace(process.env.REACT_APP_PUBLIC_URL);
        });
        this.UserManager.clearStaleState();
    };
}
