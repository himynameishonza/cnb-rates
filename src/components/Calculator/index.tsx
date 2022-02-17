import * as Styled from './styles';
import CurrencyFlag from 'react-currency-flags';
import {useState} from 'react';
import * as NumberFormat from 'react-currency-format';

const Calculator = ({data, close}) => {
    const [mode, setMode] = useState(true);
    const [sourceValue, setSourceValue] = useState(data.amount);
    const [destinationValue, setDestinationValue] = useState(data.rate);

    const handleChange = (values: any) => {
        setSourceValue(values.floatValue);
        mode
            ? setDestinationValue((values.floatValue * data.rate) / data.amount)
            : setDestinationValue(values.floatValue / data.rate);
    };

    const switchMode = () => {
        setMode(!mode);
        let tempSource = sourceValue;
        let tempDestination = destinationValue;
        setDestinationValue(tempSource);
        setSourceValue(tempDestination);
    };

    return (
        <Styled.Modal>
            <Styled.ModalContent>
                <Styled.ContentHeader>
                    <div>
                        <CurrencyFlag
                            currency={data.currencyISO}
                            title={data.countryName}
                            width={32}
                        />
                        <h2>{data.countryName}</h2>
                        <h3>({data.currencyName})</h3>
                    </div>
                    <a href="#" onClick={close}>
                        Zavřít
                    </a>
                </Styled.ContentHeader>
                <Styled.Content mode={mode}>
                    <a onClick={() => switchMode()}>
                        <svg viewBox="0 0 384 512">
                            <path
                                d="m379.29 132.69-80-96a16 16 0 0 0 -22.62 0l-80 96c-10.02 10.05-2.89 27.31 11.33 27.31h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-304h48c14.19 0 21.36-17.24 11.29-27.31z"
                                opacity=".4"
                            />
                            <path d="m176 352h-48v-304a16 16 0 0 0 -16-16h-32a16 16 0 0 0 -16 16v304h-48c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96c10.02-10.05 2.89-27.31-11.33-27.31z" />
                        </svg>
                    </a>
                    <div>
                        <NumberFormat
                            value={sourceValue}
                            thousandSeparator={' '}
                            decimalSeparator={','}
                            decimalScale={3}
                            step={data.amount}
                            onValueChange={(values: any) => handleChange(values)}
                        />
                        <label>{mode ? data.currencyISO : 'CZK'}</label>

                        <NumberFormat
                            value={destinationValue}
                            thousandSeparator={' '}
                            decimalSeparator={','}
                            decimalScale={3}
                            disabled
                        />
                        <label>{mode ? 'CZK' : data.currencyISO}</label>
                    </div>
                </Styled.Content>
            </Styled.ModalContent>
        </Styled.Modal>
    );
};

export default Calculator;
