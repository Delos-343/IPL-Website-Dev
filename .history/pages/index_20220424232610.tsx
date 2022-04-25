import type { NextPage } from 'next'
import Head from 'next/head'
import Ellipse from '../components/Ellipse'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="bg-[#1e355b] w-full h-screen">
      <Head>
        <title>IPL | Indonesia Peerleaders</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Fill with components or routes here */}
      <Header />
      <Ellipse />
      <h1> Hello, World !</h1>
    </div>
  )
}

export default Home
