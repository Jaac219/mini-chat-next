// import MainLayout from '@/layouts/Main'
import 'tailwindcss/tailwind.css';
import "@/styles/tail.css";
import '@/styles/globals.css'
import Head from 'next/head';
import { ApolloProvider } from "@apollo/client";
import client from "../../apollo-client";

// para verificar no haga solicitudes al backend cada que se renderiza el componente
// import ClientOnly from '@/components/ClientOnly'; 

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <ApolloProvider client={client}>
      {/* <ClientOnly> */}
        {/* <MainLayout> */}
          {getLayout(<Component {...pageProps} />)}
        {/* </MainLayout> */}
      {/* </ClientOnly> */}
    </ApolloProvider>
  )
}
