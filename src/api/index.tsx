import {useQuery} from 'react-query';
import {txtParser} from '../utils/txtParser';

const fetchRates = async () => {
    const res = await fetch(
        `https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt`
    );

    const data = await res.text();
    const parsedData = txtParser(data, 2, '\n');

    return parsedData;
};

const useRates = () => {
    return useQuery(['data'], () => fetchRates());
};

export {useRates, fetchRates};
