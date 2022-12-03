import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/Layout/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Head>
          <title>Stone Villa Mouzaki</title>
          <meta name="description" content="Stone Villa Mouzaki is a rental house located in Mouzaki,Karditsa,Greece." />
          <meta name="keywords" content="villa, rent, rental, vacation, trikala, karditsa, meteora, mylos ton xotikon, christmas" />
          <meta name="author" content="Alex Karidas" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#000000" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
