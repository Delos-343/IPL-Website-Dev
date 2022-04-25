import type { NextPage } from 'next'
import Head from 'next/head'
import Ellipse from '../components/Ellipse'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className="bg-[#1e355b] w-full h-full">
      <Head>
        <title>IPL | Indonesia Peerleaders</title>
        <link rel="icon" href="/logo-title.png" />
      </Head>

      {/* Fill with components or routes here */}
      <Header />
      <Hero />

    </div>
  )
}

export default Home
