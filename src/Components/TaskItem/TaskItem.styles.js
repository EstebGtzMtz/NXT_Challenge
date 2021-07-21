import styled from "styled-components";

export const TodoItem = styled.div `
    min-width: 13%;
    max-width:13%;
    max-heigth: 10rem;
    min-height: 10rem;
    margin: 2px 0 2px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .toDo-container{
        h1{
            font-weight: bold;
        }
        border:4px solid #3182CE;
        background-color: #BEE3F8;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content:space-evenly;
        padding: 5% 5%;
        width 90%;
    }
    .completed-container{
        h1{
            font-weight: bold;
        }
        border:4px solid #38A169;
        background-color: #7bd1a3;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content:space-evenly;
        padding: 5% 5%;
        width 90%;
    }
    .action-buttons{
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        .complete{
            width: 45%;
            background-color: #38A169;
            border-radius: 5px;
            color: white;
        }
        .delete{
            width: 45%;
            background-color: #E53E3E;
            border-radius: 5px;
            color: white;
        }
    }
`