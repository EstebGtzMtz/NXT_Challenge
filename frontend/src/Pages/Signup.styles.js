import styled from 'styled-components';

export const SignUpPage = styled.div `
    width: 100%;
    min-height: 98vh; 
    background-color: #84FAB0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .signup-container{
        width:60%;
        height: 80vh;
        border-radius: 45px;
        background-color: white;
        .image-and-info{
            width: 60%;
            height: 100%;
            background: rgb(73,197,237);
            background: linear-gradient(90deg, rgba(73,197,237,1) 6%, rgba(110,135,214,1) 100%);
            border-top-left-radius: 45px;
            border-bottom-left-radius: 45px;
        }
    }
`