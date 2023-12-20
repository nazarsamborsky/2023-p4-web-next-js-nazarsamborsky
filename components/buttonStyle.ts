import styled from "styled-components"

export const ButtonContainer = styled.button`

    padding: 10px 20px;
    border-radius: 5px;
    border: 1 px solid #fff;
    cursor: pointer;
    &.small {
        width: 75px;
    }
    &.medium {
        width: 120px;
    }
    &.large {
        width: 180px;
    }
    &.black{
        background-color: #000;
        color: #fff;
    };
    &.black:hover{
        background-color: #fff;
        color: #000;
    }
    &.red{
        background-color: #ffffff;
        color: #ff0000;
    };
    &.red:hover{
        background-color: #ff0000;
        color: #ffffff;
    }
    &.green{
        background-color: #00ff00;
        color: #ffffff;
    };
    &.green:hover{
        color: #000;
    }`;