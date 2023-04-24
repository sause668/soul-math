import Head from 'next/head'
import Nav from '@/components/Nav';
import Calc from '@/components/Calc';



export default function CalcPage() {
    return (
        <>
            <Head>
                <title>Soul Math: Calculator</title>
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
            <Nav gradeIndex={0} />
            <Calc/>
        </>
        
    );
}