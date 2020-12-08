import * as React from "react";

import { AuthConsumer } from "../../providers/authProvider";

export const Callback = () => (
    <AuthConsumer>
        {({ signinRedirectCallback }) => {
            console.log("Sign In Redirect Callback called." );
            // fetch(`http://localhost:${config.serverPort}/authorize/?state=abcdefghijklmnopqsrtuvwxyz`, {
            // credentials: 'include', // fetch won't send cookies unless you set credentials
            // mode: 'no-cors'
            // })
            
            


            signinRedirectCallback();
            return <span>loading</span>;
        }}
    </AuthConsumer>
);