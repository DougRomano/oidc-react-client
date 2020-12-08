/* /src/components/auth/silentRenew.jsx */

import React from "react";

import { AuthConsumer } from "../../providers/authProvider";

export const SilentRenew = () => (
    <AuthConsumer>
        {({ signinSilentCallback }) => {
            console.log("Silent Renew Called..");
            signinSilentCallback();
            return <span>loading</span>;
        }}
    </AuthConsumer>
);