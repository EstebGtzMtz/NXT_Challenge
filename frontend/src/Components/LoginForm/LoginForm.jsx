import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useToast } from "@chakra-ui/react"
import { LoginFormContainer } from './LoginForm.styles';

import { userLogin } from '../../services/authServices'

const LoginForm = ({ setLogin }) => {

    const toast = useToast()
    const history = useHistory();

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            email: inputEmail,
            password: inputPassword
        }
        try {
            const { data } = await userLogin(body);
            localStorage.setItem('token', data.token);
            toast({
                title: "Succesfully Loged",
                status: "success",
                duration: 3000,
                isClosable: true,
            })
            setTimeout(() => {
                history.push('/dashboard')
            }, 3000)
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
        <LoginFormContainer>
            <div className='quote'>
                Let's get started, <br />
                Login With Your Account
            </div>
            <form onSubmit={handleSubmit}>
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
                <button type="submit" onSubmit={handleSubmit}> Sign In </button>
            </form>
            <h1 onClick={() => setLogin(false)}>Don't have an account?</h1>
        </LoginFormContainer>
    )
}

export default LoginForm
