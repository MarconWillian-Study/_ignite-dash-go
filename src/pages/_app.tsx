import { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';

import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { Header } from '../components/Header';
import { makeServer } from '../services/mirage';
import { queryClient } from '../services/queryClient';


if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient} >
      <ChakraProvider theme={theme} >
        <SidebarDrawerProvider>
            {router.asPath !== '/' && <Header />}
            <Component {...pageProps} />
        </SidebarDrawerProvider> 
      </ChakraProvider>
      {process.env.NODE_ENV && <ReactQueryDevtools />}
    </QueryClientProvider>
  )
      
    
}

export default MyApp;