import * as React from "react";
import Axios from "axios";
import { AuthConsumer } from "../../providers/authProvider";
import qs from 'qs';


export const Callback =  ({ location }) => (
    <AuthConsumer>
        {({ signinRedirectCallback }) => {           
            //return result;
            const code = new URLSearchParams(location.search).get('code');
            const state = new URLSearchParams(location.search).get('state');
            const codeBody = {
                code: code,
                state: state
            }
            const config = {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                credentials: 'include',
                withCredentials: true
              }

            Axios.post(`http://localhost:3100/token`,
                qs.stringify( codeBody), 
                config
            )
            .then(function(response) {
                console.log("Axios Response");
                console.log(response.data);
                //console.log(response.data.id_token)
                //console.log(response.JSON);
                window.sessionStorage.access_token = response.data.access_token;
                window.sessionStorage.id_token = response.data.id_token;
                //window.localStorage = response.data;
                
                
                console.log(response.body);


                return response.data;
            })
            .finally(function() {
                console.log("callback...");
                signinRedirectCallback();    
            });
            return <span>loading</span>;
        }}
    </AuthConsumer>
);