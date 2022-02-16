import * as Styled from './styles';
import CurrencyFlag from 'react-currency-flags';
import {useState} from 'react';

const Calculator = ({data, close}) => {
    const [sourceValue, setSourceValue] = useState(data.amount);
    const [mode, setMode] = useState(false);

    const onInputchange = e => {
        setSourceValue(e.target.value);
    };

    const onDestinationChange = e => {
        setSourceValue(e.target.value);
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
                    <a onClick={() => setMode(!mode)}>
                        <svg viewBox="0 0 384 512">
                            <path
                                d="m379.29 132.69-80-96a16 16 0 0 0 -22.62 0l-80 96c-10.02 10.05-2.89 27.31 11.33 27.31h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-304h48c14.19 0 21.36-17.24 11.29-27.31z"
                                opacity=".4"
                            />
                            <path d="m176 352h-48v-304a16 16 0 0 0 -16-16h-32a16 16 0 0 0 -16 16v304h-48c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96c10.02-10.05 2.89-27.31-11.33-27.31z" />
                        </svg>
                    </a>
                    <div>
                        <input
                            type="number"
                            id="source"
                            name="sourceInput"
                            step={data.amount}
                            value={sourceValue}
                            onChange={mode ? onInputchange : onDestinationChange}
                            min={0}
                        />
                        <label htmlFor="amount">{mode ? 'CZK' : data.currencyISO}</label>

                        <input
                            type="number"
                            id="destination"
                            name="destinationInput"
                            disabled
                            value={(sourceValue / data.amount) * data.rate}
                        />
                        <label htmlFor="result">{mode ? data.currencyISO : 'CZK'}</label>
                    </div>
                </Styled.Content>
            </Styled.ModalContent>
        </Styled.Modal>
    );
};

export default Calculator;
