import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import React from 'react'
import './Login.css';

function Login() {
    const signIn = () =>{
        // Login to Google important step
        auth.signInWithPopup(provider).catch((error)=> alert(error.message));

    }
    return (
        <div className="login">
            {/* <h2>I am the login page</h2> */}

            <div className="login__logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUzlTDagaPVlVNQU_3nrHhZfzypaM3kCajwXgl4zmIMRiKRpsZfYpzj8EmyxS_iyFZsQ&usqp=CAU" alt=""/>
            </div>

            <Button onClick={ signIn } >Sign In</Button>
        </div>
    )
}

export default Login
