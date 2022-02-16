import * as Styled from './styles';
import CurrencyFlag from 'react-currency-flags';
import {useState} from 'react';

const Calculator = ({data, close}) => {
    const [sourceValue, setSourceValue] = useState(data.amount);

    const onInputchange = e => {
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
                        <h2>
                            {data.countryName} - {data.currencyISO} ({data.currencyName})
                        </h2>
                    </div>
                    <a href="#" onClick={close}>
                        Zavřít
                    </a>
                </Styled.ContentHeader>
                <Styled.Content>
                    <input
                        type="number"
                        id="amount"
                        name="amountName"
                        step={data.amount}
                        value={sourceValue}
                        onChange={onInputchange}
                    />
                    <label htmlFor="amount">{data.currencyISO}</label>
                    <input
                        type="number"
                        id="result"
                        name="resultName"
                        value={sourceValue * data.rate}
                    />
                    <label htmlFor="result">KČ</label>
                </Styled.Content>
            </Styled.ModalContent>
        </Styled.Modal>
    );
};

export default Calculator;
