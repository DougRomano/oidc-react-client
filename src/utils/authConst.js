


export const IDENTITY_CONFIG = {
  authority: String(process.env.REACT_APP_AUTH_URL), //(string): The URL of the OIDC provider.
  client_id: String(process.env.REACT_APP_IDENTITY_CLIENT_ID), //(string): Your client application's identifier as registered with the OIDC provider.
  redirect_uri: String(process.env.REACT_APP_REDIRECT_URL), //The URI of your client application to receive a response from the OIDC provider.
  login: String(process.env.REACT_APP_AUTH_URL) + "/login",
  automaticSilentRenew: false, //(boolean, default: false): Flag to indicate if there should be an automatic attempt to renew the access token prior to its expiration.
  loadUserInfo: false, //(boolean, default: true): Flag to control if additional identity data is loaded from the user info endpoint in order to populate the user's profile.
  silent_redirect_uri: String(process.env.REACT_APP_SILENT_REDIRECT_URL), //(string): The URL for the page containing the code handling the silent renew.
  post_logout_redirect_uri:  String(process.env.REACT_APP_LOGOFF_REDIRECT_URL), // (string): The OIDC post-logout redirect URI.
  audience: "http://localhost", //is there a way to specific the audience when making the jwt
  responseType: "code", //code??  (string, default: 'id_token'): The type of response desired from the OIDC provider.
  grantType: "authorization_code",
  scope: "openid", //(string, default: 'openid'): The scope being requested from the OIDC provider.
  webAuthResponseType: "code"
};

export const METADATA_OIDC = {
  issuer: String(process.env.REACT_APP_ISSUER),
  jwks_uri: String(process.env.REACT_APP_AUTH_URL) + "/.well-known/openid-configuration/jwks",
  authorization_endpoint:  String(process.env.REACT_APP_AUTH_URL) + "/authorize",
  token_endpoint: String(process.env.REACT_APP_AUTH_URL) + "/token",
  userinfo_endpoint: String(process.env.REACT_APP_AUTH_URL) + "/userinfo",
  end_session_endpoint: String(process.env.REACT_APP_AUTH_URL) + "/logout",
  check_session_iframe: String(process.env.REACT_APP_AUTH_URL) + "/checksession",
  revocation_endpoint: String(process.env.REACT_APP_AUTH_URL) + "/revocation",
  introspection_endpoint: String(process.env.REACT_APP_AUTH_URL) + "/introspect"
};
