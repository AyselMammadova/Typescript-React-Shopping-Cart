import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 1px solid #cde0e7;
    padding-bottom: 20px;

    div {
        flex: 1;
    }

    .cart-item-info, .btns {
        display: flex;
        justify-content: space-between;
    }

    button {
        background-color: #d7d4d4;
        color: black;
        &:hover {
            background-color: #c9c2c2;
        }
    }

    img {
        max-width: 80px;
        object-fit: contain;
        margin-left: 40px;
    }

`;