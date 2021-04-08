import { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';

import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ChakraProvider theme={theme} >
      <SidebarDrawerProvider>
          {router.asPath !== '/' && <Header />}
          <Component {...pageProps} />
      </SidebarDrawerProvider> 
    </ChakraProvider>
  )
      
    
}

export default MyApp;