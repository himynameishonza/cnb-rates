import {useQuery} from 'react-query';
import {txtParser} from '../../utils/txtParser';

const fetchRates = async (url: string) => {
    const res = await fetch(url);

    const data = await res.text();
    const parsedData = txtParser(data, 2, '\n');

    return parsedData;
};

const useRates = (onSuccess?: () => any) => {
    return useQuery(['data'], () => fetchRates('api/data'), {onSuccess});
};

export {useRates, fetchRates};
