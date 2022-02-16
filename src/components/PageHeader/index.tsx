import * as Styled from './styles';

const PageHeader = ({lastUpdate, refresh}) => {
    return (
        <Styled.PageHeader>
            <div>
                <h1>Kurzovní lístek ČNB</h1>
                <Styled.Small>Poslední aktualizace {lastUpdate}</Styled.Small>
            </div>

            <Styled.Button onClick={() => refresh()}>Aktualizovat</Styled.Button>
        </Styled.PageHeader>
    );
};

export default PageHeader;
