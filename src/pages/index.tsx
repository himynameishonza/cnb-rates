import HeadMeta from '../components/HeadMeta';
import RatesList from '../components/RatesList';
import {dehydrate, QueryClient} from 'react-query';
import {fetchRates} from '../api';
import styled from 'styled-components';

export const Wrapper = styled.div`
    background: radial-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.15));
    background-size: 200%;
    background-size: 200%;
    animation: aurora 10s infinite;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 0;
    padding: 72px 32px;
    overflow-y: auto;

    h1 {
        font-size: 24px;
        font-weight: 700;
        color: #fafafa;
        text-shadow: 1px 1px rgba(0, 0, 0, 0.1);
    }
`;

export const Footer = styled.footer`
    font-size: 12px;
    text-align: center;
    display: block;
    color: black;
    padding: 16px;
    opacity: 0.4;
`;

const Home = () => {
    return (
        <>
            <HeadMeta />
            <Wrapper>
                <RatesList />
                <Footer>Data postkytuje Česká národní banka</Footer>
            </Wrapper>
        </>
    );
};

// Server-side
export async function getStaticProps() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['data'], () => fetchRates(process.env.CNB_RATES_TXT));

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

export default Home;
