import React from 'react';

import { SignUpPage } from './Signup.styles';

import SignupForm from '../Components/SignUpForm/SignupForm';

const SignUp = () => {
    return (
        <SignUpPage>
            <div className='signup-container'>
                <div className='image-and-info'>
                    <img src="../images/vaporeon.png" alt="" />
                </div>
                <div className='signup-form'>
                    <SignupForm />
                </div>
            </div>
        </SignUpPage>
    )
}

export default SignUp;