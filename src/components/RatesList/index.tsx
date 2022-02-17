import * as Styled from './styles';
import CurrencyFlag from 'react-currency-flags';
import {useRates} from '../../api';
import {useEffect, useState} from 'react';
import Calculator from '../Calculator';
import * as CurrencyFormat from 'react-currency-format';
import PageHeader from '../PageHeader';
import {getTimestamp} from '../../utils/getTimestamp';

const RatesList = () => {
    const [calculator, setCalculator] = useState(false);
    const [calculatorData, setCalculatorData] = useState(null);
    const [lastUpdate, setLastUpdate] = useState(null);
    const {data, isLoading, refetch} = useRates(() => setLastUpdate(getTimestamp()));

    const openCalculator = index => {
        setCalculator(true);
        setCalculatorData(data[index]);
    };

    return (
        <>
            {calculator && <Calculator data={calculatorData} close={() => setCalculator(false)} />}
            <PageHeader lastUpdate={lastUpdate} refresh={refetch} />
            <Styled.Table>
                <thead>
                    <tr>
                        <Styled.TableHeadCell>Země</Styled.TableHeadCell>
                        <Styled.TableHeadCell>Měna</Styled.TableHeadCell>
                        <Styled.TableHeadCell centered>Množství</Styled.TableHeadCell>
                        <Styled.TableHeadCell hideOnMobile centered>
                            Kód
                        </Styled.TableHeadCell>
                        <Styled.TableHeadCell>Kurz</Styled.TableHeadCell>
                    </tr>
                </thead>
                <tbody>
                    {isLoading && (
                        <tr>
                            <Styled.TableBodyCell colSpan={5}>
                                Načítám kurzovní lístek...
                            </Styled.TableBodyCell>
                        </tr>
                    )}

                    {!data && !isLoading && (
                        <tr>
                            <Styled.TableBodyCell colSpan={5}>
                                Načtení kurzovního lístku se nezdařilo.
                                <br />
                                <a
                                    target="_blank"
                                    title="Kurzovní lístek"
                                    rel="noreferrer"
                                    href="https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/"
                                >
                                    Aktuální kurzovní lístek na stránkách ČNB
                                </a>
                            </Styled.TableBodyCell>
                        </tr>
                    )}

                    {data?.map((dataItem, index) => {
                        return (
                            <tr key={index} onClick={() => openCalculator(index)}>
                                <Styled.TableBodyCell>
                                    <CurrencyFlag
                                        currency={dataItem.currencyISO}
                                        width={32}
                                        title={dataItem.countryName}
                                    />
                                    <p>{dataItem.countryName}</p>
                                </Styled.TableBodyCell>
                                <Styled.TableBodyCell>{dataItem.currencyName}</Styled.TableBodyCell>
                                <Styled.TableBodyCell centered>
                                    {dataItem.amount}
                                </Styled.TableBodyCell>
                                <Styled.TableBodyCell hideOnMobile centered>
                                    {dataItem.currencyISO}
                                </Styled.TableBodyCell>
                                <Styled.TableBodyCell>
                                    <CurrencyFormat
                                        value={dataItem.rate}
                                        displayType={'text'}
                                        decimalSeparator={','}
                                        thousandSeparator={' '}
                                    />
                                </Styled.TableBodyCell>
                            </tr>
                        );
                    })}
                </tbody>
            </Styled.Table>
        </>
    );
};

export default RatesList;
