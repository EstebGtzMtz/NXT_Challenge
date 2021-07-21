import styled from 'styled-components';

export const SignupFormContainer = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: 100%;
.quote{
    color: #829ADC;
    font-family: system-ui;
    font-size: 25px;
}

h1{
    cursor: pointer;
    font-family: system-ui;
    font-size: 25px;
}

.form-style{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
.text-field{
    width: 100%;
    display: flex;
    flex-direction: column;
    label{
        margin-top: 20px;
        color: #A4A4A4;
    }
    input{
        height: 3rem;
        border-radius: 10px;
        border: 1px solid #A4A4A4 ;
    }
}

button{
    margin-top: 15%;
    background: rgb(73,197,237);
    background: linear-gradient(90deg, rgba(73,197,237,1) 6%, rgba(110,135,214,1) 100%);
    border-radius: 20px;
    color: white;
    font-family: system-ui;
    font-size: 20px;
    text-align: center;
    padding: 1% 0;
    width:60%;
}
}
`