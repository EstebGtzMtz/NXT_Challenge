import styled from "styled-components";

export const LoginFormContainer = styled.div `
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
.quote{
    color: #829ADC;
}
.text-field{
    width: 80%;
    display: flex;
    flex-direction: column;
    label{
        color: #A4A4A4;
    }
    input{
        height: 2rem;
        border-radius: 10px;
        border: 1px solid #A4A4A4 ;
    }
}
`