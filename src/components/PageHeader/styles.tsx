import styled from 'styled-components';

export const PageHeader = styled.div`
    display: grid;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    grid-template-columns: 1.3fr 0.7fr;
    row-gap: 16px;
    cell-gap: 32px;
    margin-bottom: 24px;

    @media (max-width: 460px) {
        grid-template-columns: 1fr;
        text-align: center;
    }
`;

export const Small = styled.small`
    display: block;
    font-size: 12px;
    color: white;
    padding: 8px 0;
`;

export const Button = styled.button`
    appearance: none;
    display: inline-block;
    border: none;
    border-radius: 8px;
    background: #52489c;
    padding: 8px 16px;
    font-weight: 700;
    color: white;
    cursor: pointer;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: background 0.24s;

    :hover {
        background: #3a3370;
    }
`;
