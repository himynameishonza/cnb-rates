import styled from 'styled-components';

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    padding: 24px;
`;

export const ModalContent = styled.div`
    max-width: 360px;
    width: 100%;
    background: rgb(255, 255, 255);
    border-radius: 8px;
`;

export const Content =
    styled.div <
    {mode?: boolean} >
    `   
    padding: 32px 24px;
    box-shadow: 0 2px 25px rgba(0, 0, 0, 0.3);
    background: linear-gradient(45deg, #32a6ff 0%, #3f6fff 49%, #8d54ff 82%);
    border-radius: 0 0 8px 8px;
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 16px;


    a {
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 4px;
        padding: 8px;
        transition: background .24s;

        :hover {
            background: rgba(0, 0, 0, 0.4);
        }

        svg {
            width: 16px;
            fill: white;
            transform: ${props => (props.mode ? 'scaleX(1)' : 'scaleX(-1)')};
        }
    }
    div {
        display: grid;
        grid-template-columns: auto 32px;
        column-gap: 16px;
        row-gap: 16px;
        width: 100%;

        input {
            height: 42px;
            width: 100%;
            border-radius: 4px;
            border: none;
            font-size: 16px;
            font-weight: bold;
            padding: 8px 16px;
            box-sizing: border-box;

            :disabled {
                color: white;
            }
        }

        label {
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
        }
    }
`;

export const ContentHeader = styled.div`
    display: flex;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
    background: #161b33;
    border-radius: 8px 8px 0 0;

    div {
        display: flex;
        align-items: center;

        span {
            margin-right: 8px;
            border-radius: 2px;
        }
    }
    h2 {
        color: white;
        font-size: 18px;
        font-weight: bold;
        display: block;
        margin-right: 8px;
    }

    h3 {
        color: grey;
        font-size: 13px;
        font-weight: bold;
    }

    a {
        color: white;
        text-decoration: none;
        transition: color 0.24s;
        font-size: 12px;
        font-weight: bold;
        text-transform: uppercase;
        :hover {
            color: #81a4cd;
        }
    }
`;
