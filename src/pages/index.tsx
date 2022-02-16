import {useEffect, useState} from 'react';
import styled from 'styled-components';
import HeadMeta from '../components/HeadMeta';
import PageHeader from '../components/PageHeader';
import RatesList from '../components/RatesList';
import {getTimestamp} from '../utils/getTimestamp';

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
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [hasFailed, setHasFailed] = useState(false);

    useEffect(() => {
        setLastUpdate(getTimestamp);
        setHasFailed(true);
    }, []);

    return (
        <>
            <HeadMeta />
            <div className="aurora">
                <PageHeader lastUpdate={lastUpdate} refresh={[]} />
                <RatesList data={data} isLoading={isLoading} hasFailed={hasFailed} />
                <Footer>Data postkytuje Česká národní banka</Footer>
            </div>
        </>
    );
};

export default Home;
