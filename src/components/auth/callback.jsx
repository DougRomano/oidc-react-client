import * as React from "react";

import { AuthConsumer } from "../../providers/authProvider";



export const Callback = ({ location }) => (
    <AuthConsumer>
        {({ signinRedirectCallback }) => {
            signinRedirectCallback(location);
            //return result;
            return <span>loading</span>;
        }}
    </AuthConsumer>
);