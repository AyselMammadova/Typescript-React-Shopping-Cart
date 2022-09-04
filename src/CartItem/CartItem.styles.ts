import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid #cde0e7;
    border-radius: 20px;


    button {
        border-radius: 0 0 20px 20px;
        color: green;
    }

    .img-wrap {
        min-height: 250px;
        max-height: 250px;
        border-radius: 20px 20px 0 0;
        padding: 5px;
        display: flex;
        align-items: center;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            transition: 300ms all ease;
            will-change: transform;
        }
        &:hover {
            img {
                transform: scale(1.05);
            }
        }
    }

    .product-info {
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
            font-size: 14px;
            height: 84px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
        }
    }
`;