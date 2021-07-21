import React from 'react';
import { useHistory } from 'react-router-dom';

import { userLogout } from '../../services/authServices';

import { NavbarContainer } from './Navbar.styles';
import { useToast } from "@chakra-ui/react"

const Navbar = () => {
    const history = useHistory();
    const toast = useToast();

    const handleLogout = async () => {
        localStorage.removeItem('token')
        try {
            const { data: { msg } } = await userLogout();
            history.push('/');
            toast({
                title: msg,
                status: "success",
                duration: 3000,
                isClosable: true,
            })
        } catch (error) {
            toast({
                title: "something went wrong",
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        }
    }

    return (
        <NavbarContainer>
            <h1>ToDo List</h1>
            <button onClick={handleLogout}>Logout</button>
        </NavbarContainer>
    )
}

export default Navbar
