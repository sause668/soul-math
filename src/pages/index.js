import Footer from '@/components/Footer'
import HomeContent from '@/components/HomeContent'
import HomeInfo from '@/components/HomeInfo'
import HomeTitle from '@/components/HomeTitle'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Soul Math</title>
        <meta name="description" content="Middle School Math Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#00e676"/>
        <meta name="msapplication-TileColor" content="#00a300"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      {/* <Nav/> */}
      <HomeTitle/>
      <HomeContent/>
      <HomeInfo/>
      <Footer/>
    </>
  )
}
