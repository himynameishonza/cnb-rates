import {useState} from 'react';
import HeadMeta from '../components/HeadMeta';
import PageHeader from '../components/PageHeader';
import RatesList from '../components/RatesList';
import {getTimestamp} from '../utils/getTimestamp';
import {dehydrate, QueryClient} from 'react-query';
import {fetchRates} from '../api';
import * as Styled from './styles';

const Home = () => {
    const [lastUpdate, setLastUpdate] = useState(null);

    const fetch = () => {
        setLastUpdate(getTimestamp);
    };
    return (
        <>
            <HeadMeta />
            <Styled.Wrapper>
                <PageHeader lastUpdate={lastUpdate} refresh={fetch} />
                <RatesList />
                <Styled.Footer>Data postkytuje Česká národní banka</Styled.Footer>
            </Styled.Wrapper>
        </>
    );
};

export async function getStaticProps() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['data'], () => fetchRates());

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

export default Home;
