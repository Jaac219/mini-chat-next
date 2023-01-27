import 'tailwindcss/tailwind.css';
import "@/styles/tail.css";
import '@/styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import client from 'apollo-client';
import ServersContainer from '@/containers/ServersContainer';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const { query: { params = [] } } = useRouter()

  return (
    <ApolloProvider client={client}>
      {/* <ClientOnly> */}
        <ServersContainer params={params}>
          <Component {...pageProps} params={params}/>
        </ServersContainer>
      {/* </ClientOnly> */}
    </ApolloProvider>
  )
}
