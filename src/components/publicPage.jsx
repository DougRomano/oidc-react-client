import React from 'react';
import Greeting from './client/Greeting.js';
import LogInOut from './client/LogInOut.js';
import Response from './client/Response.js';
import UserData from './client/UserData.js';


const config = require('../config');



export const PublicPage = () => {
    return (
        <div>
          <header>
            <h1>QAction Auth Test Client</h1>
            <Greeting />
            <LogInOut uri={`http://localhost:3000/dashboard/`}/>
          </header>
          <main>
            <UserData />
            <Response />
          </main>
          <footer>
            <a href='https://romano.io/'>Romano.io</a>
          </footer>
        </div>
    );
};
