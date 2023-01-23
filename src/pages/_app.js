import MainLayout from '@/layouts/Main'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}
