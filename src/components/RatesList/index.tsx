import styled from 'styled-components';
import CurrencyFlag from 'react-currency-flags';
import {useRates} from '../../api';

const TableStyled = styled.table`
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
`;

const TableHeadCellStyled = styled.th`
    padding: 16px;
    font-weight: 700;
    text-align: left;
    background: rgba(255, 255, 255, 0.3);
    white-space: nowrap;

    :first-child {
        border-radius: 8px 0 0 0;
    }

    :last-child {
        border-radius: 0 8px 0 0;
    }
`;

const TableBodyCellStyled = styled.td`
    padding: 16px;
    background: rgba(255, 255, 255, 0.2);
    white-space: nowrap;

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
`;

const TableBodyCellLoadingStyled = styled.td`
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

const RatesList = () => {
    const {data, isLoading} = useRates();

    return (
        <TableStyled>
            <thead>
                <tr>
                    <TableHeadCellStyled>Země</TableHeadCellStyled>
                    <TableHeadCellStyled>Měna</TableHeadCellStyled>
                    <TableHeadCellStyled>Množství</TableHeadCellStyled>
                    <TableHeadCellStyled>Kód</TableHeadCellStyled>
                    <TableHeadCellStyled>Kurz</TableHeadCellStyled>
                </tr>
            </thead>
            <tbody>
                {isLoading && (
                    <tr>
                        <TableBodyCellLoadingStyled colSpan={5}>
                            Načítám kurzovní lístek...
                        </TableBodyCellLoadingStyled>
                    </tr>
                )}

                {!data && !isLoading && (
                    <tr>
                        <TableBodyCellLoadingStyled colSpan={5}>
                            Načtení kurzovního lístku se nezdařilo.
                            <br />
                            <a
                                target="_blank"
                                title="Kurzovní lístek"
                                href="https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/"
                            >
                                Aktuální kurzovní lístek na stránkách ČNB
                            </a>
                        </TableBodyCellLoadingStyled>
                    </tr>
                )}

                {data?.map((dataItem, index) => {
                    return (
                        <tr key={index}>
                            <TableBodyCellStyled>
                                <CurrencyFlag
                                    currency={dataItem.currencyISO}
                                    width={32}
                                    title={dataItem.countryName}
                                />
                                <p>{dataItem.countryName}</p>
                            </TableBodyCellStyled>
                            <TableBodyCellStyled>{dataItem.currencyName}</TableBodyCellStyled>
                            <TableBodyCellStyled>{dataItem.amount}</TableBodyCellStyled>
                            <TableBodyCellStyled>{dataItem.currencyISO}</TableBodyCellStyled>
                            <TableBodyCellStyled>{dataItem.rate}</TableBodyCellStyled>
                        </tr>
                    );
                })}
            </tbody>
        </TableStyled>
    );
};

export default RatesList;
