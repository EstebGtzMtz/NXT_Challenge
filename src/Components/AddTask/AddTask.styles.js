import styled from 'styled-components';

export const AddTaskForm = styled.form `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    
    input{
        height: 3rem;
        border-radius: 10px;
        border: 1px solid #A4A4A4 ;
        width: 40%;
    }
    input:first-child {
        height: 3rem;
        border-radius: 10px;
        border: 1px solid #A4A4A4 ;
        width: 20%;
    }
    button{
        background: rgb(73,197,237);
        background: linear-gradient(90deg, rgba(73,197,237,1) 6%, rgba(110,135,214,1) 100%);
        border-radius: 20px;
        color: white;
        font-family: system-ui;
        font-size: 20px;
        text-align: center;
        padding: .5% 2%;
    }

    @media screen and (max-width: 426px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        input:first-child {
            height: 3rem;
            border-radius: 10px;
            border: 1px solid #A4A4A4 ;
            width: 90%;
        }
        input{
            margin-top: 1rem;
            height: 3rem;
            border-radius: 10px;
            border: 1px solid #A4A4A4 ;
            width: 90%;
        }
        button{
            margin-top: 1rem;
            background: rgb(73,197,237);
            background: linear-gradient(90deg, rgba(73,197,237,1) 6%, rgba(110,135,214,1) 100%);
            border-radius: 20px;
            color: white;
            font-family: system-ui;
            font-size: 20px;
            text-align: center;
            padding: 2.5%;
            width: 90%;
        }
    }
`