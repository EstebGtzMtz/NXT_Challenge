import React, { useState } from 'react';

import SignupForm from '../../Components/SignupForm/SignupForm'
import LoginForm from '../../Components/LoginForm/LoginForm';
import { SignUpPage } from './Signup.styles';

const LoginSignup = () => {
    const [login, setLogin] = useState(true)

    return (
        <SignUpPage>
            <div className='signup-container'>
                <div className='image-and-info'>
                    <img src="../images/vaporeon.png" alt="../images/vaporeon.png" />
                </div>
                <div className='signup-form'>
                    {login ? (<LoginForm setLogin={setLogin} />) : (<SignupForm setLogin={setLogin}/>)}
                </div>
            </div>
        </SignUpPage>
    )
}

export default LoginSignup;