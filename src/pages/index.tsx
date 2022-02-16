import {useState} from 'react';
import styled from 'styled-components';
import HeadMeta from '../components/HeadMeta';
import PageHeader from '../components/PageHeader';
import RatesList from '../components/RatesList';
import {getTimestamp} from '../utils/getTimestamp';
import {dehydrate, QueryClient} from 'react-query';
import {fetchRates} from '../api';

const Footer = styled.footer`
    font-size: 12px;
    text-align: center;
    display: block;
    color: black;
    padding: 16px;
    opacity: 0.4;
`;

const Home = () => {
    const [lastUpdate, setLastUpdate] = useState(null);

    const fetch = () => {
        setLastUpdate(getTimestamp);
    };
    return (
        <>
            <HeadMeta />
            <div className="aurora">
                <PageHeader lastUpdate={lastUpdate} refresh={fetch} />
                <RatesList />
                <Footer>Data postkytuje Česká národní banka</Footer>
            </div>
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
