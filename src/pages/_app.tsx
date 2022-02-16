import '../styles/global.scss';
const queryClient = new QueryClient();
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';

function MyApp({Component, pageProps}) {
    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
    );
}
export default MyApp;
