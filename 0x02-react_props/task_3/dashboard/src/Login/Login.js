import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className='App'>
            <div className='App-body'>
                <p>Login to access the full dashboard</p>
                <label htmlFor="email" name="email" id="email" />
                <input type="email" name="email" id="email" />
                <label htmlFor="password" name="password" id="password" />
                <button>OK</button>
            </div>
        </div>
    )
}

export default Login;