import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    font-size: 13px;
    color: #fafafa;
    backdrop-filter: blur(4px);

    tr:last-child td:first-child {
        border-bottom-left-radius: 8px;
    }

    tr:last-child td:last-child {
        border-bottom-right-radius: 8px;
    }
    tr:hover td {
        background: rgba(255, 255, 255, 0.3);
        cursor: pointer;
    }
`;

export const TableHeadCell =
    styled.th <
    {hideOnMobile?: boolean, centered?: boolean} >
    `   
    padding: 16px;
    font-weight: 700;
    background: rgba(255, 255, 255, 0.3);
    white-space: nowrap;
    text-align: ${props => (props.centered ? 'center' : 'left')};

    :first-child {
        border-radius: 8px 0 0 0;
    }

    :last-child {
        border-radius: 0 8px 0 0;
    }

    @media(max-width: 460px) {
        display: ${props => (props.hideOnMobile ? 'none' : 'table-cell')};
        padding: 16px 8px;
    }
`;

export const TableBodyCell =
    styled.td <
    {hideOnMobile?: boolean, centered?: boolean} >
    `
    padding: 16px;
    background: rgba(255, 255, 255, 0.2);
    white-space: nowrap;
    text-align: ${props => (props.centered ? 'center' : 'left')};
    transition: background .24s;
    
    span {
        vertical-align: middle;
        margin-right: 8px;
        border-radius: 2px;
    }

    p {
        display: inline-block;
        @media (max-width: 640px) {
            display: none;
        }
    }

    @media(max-width: 460px) {
        display: ${props => (props.hideOnMobile ? 'none' : 'table-cell')};
        padding: 16px 8px;
    }
`;

export const TableBodyCellLoading = styled.td`
    font-size: 18px;
    text-align: center;
    background: rgba(255, 255, 255, 0.2);
    padding: 24px;
    a {
        color: black;
        padding-top: 12px;
        display: block;
        font-size: 14px;
        transition: color 0.24s;

        :hover {
            color: #fafafa;
        }
    }
`;
