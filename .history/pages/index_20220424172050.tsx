import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>IPL | Indonesia Peerleaders</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Fill with components or routes here */}
      <h1> Welcome Home, Peers ! </h1>
      <Header />
    </div>
  )
}

export default Home
