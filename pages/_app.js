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
          <meta name="description" content="Stone Villa Muzaki is a rental house located in Muzaki,Karditsa,Greece." />
          <meta name="keywords" content="villa, rent, rental, vacation, trikala, karditsa" />
          <meta name="author" content="Alex Karidas" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#000000" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#000000" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
