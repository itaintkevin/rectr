import Head from 'next/head'
import Navbar from '../components/Navbar'
import Section_1 from '../components/Section_1'
import Section_2 from '../components/Section_2'
import Section_3 from '../components/Section_3'
import Section_4 from '../components/Section_4'
import Section_5 from '../components/Section_5'
import Section_6 from '../components/Section_6'
import Section_7 from '../components/Section_7'
import Section_8 from '../components/Section_8'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rectr</title>
        <meta name="description" content="Rectr Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar/>
        <Section_1 />
        <Section_2 />
        <Section_3 />
        <Section_4 />
        <Section_5 />
        <Section_6 />
        <Section_7 />
        <Section_8 />
      </main>
    </>
  )
}
