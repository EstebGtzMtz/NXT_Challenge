import styled from 'styled-components';

export const SignUpPage = styled.div `
    width: 100%;
    min-height: 98vh; 
    background-color: #84FAB0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    .signup-container{
        width:60%;
        height: 80vh;
        border-radius: 45px;
        background-color: white;
        display: flex;
        flex-direction: row;
        .image-and-info{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60%;
            height: 100%;
            background: rgb(73,197,237);
            background: linear-gradient(90deg, rgba(73,197,237,1) 6%, rgba(110,135,214,1) 100%);
            border-top-left-radius: 45px;
            border-bottom-left-radius: 45px;
            img{
                height: 50%
            }
        }
        .signup-form{
            display: flex;
            justify-content: center;
            width: 40%;
            height: 100%;
        }
    }

    @media (max-width: 576px) {
        .signup-container{
            width: 90%;
        }
        .signup-form{
            display: flex;
            justify-content: center;
            width: 40%;
            height: 100%;
        }
    }

`