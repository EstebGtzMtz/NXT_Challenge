import React, { useState } from 'react';

import { SignupFormContainer } from './SignupForm.styles';
import { useToast } from "@chakra-ui/react"

import { signupPost } from '../../services/authServices';

const SignupForm = ({ setLogin }) => {
    const toast = useToast()

    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            name: inputName,
            email: inputEmail,
            password: inputPassword
        }
        try {
            await signupPost(body);
            toast({
                title: "Account created.",
                description: "We've created your account for you.",
                status: "success",
                duration: 3000,
                isClosable: true,
            })
            setLogin(true)
        } catch (error) {
            console.log(error);
            toast({
                title: `Account failed`,
                status: "error",
                isClosable: true,
            })
        }
    }

    return (
        <SignupFormContainer>
            <h1 onClick={()=>setLogin(true)}>Back to Login</h1>
            <form onSubmit={handleSubmit} className="form-style">
                <div className="text-field">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                    />
                </div>
                <div className="text-field">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={inputEmail}
                        onChange={(e) => setInputEmail(e.target.value)}
                    />
                </div>
                <div className="text-field">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={inputPassword}
                        onChange={(e) => setInputPassword(e.target.value)}
                    />
                </div>
                <button type="submit" onSubmit={handleSubmit}> register </button>
            </form>
        </SignupFormContainer>
    )
}

export default SignupForm
