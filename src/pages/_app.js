import MainLayout from '@/layouts/Main'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <>
    {/* <MainLayout> */}
      {getLayout(<Component {...pageProps} />)}
    {/* </MainLayout> */}
    </>
  )
}
