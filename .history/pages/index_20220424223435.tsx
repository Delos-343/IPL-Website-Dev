import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="bg-blue-300 w-full h-screen">
      <Head>
        <title>IPL | Indonesia Peerleaders</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Fill with components or routes here */}
      <Header />
    </div>
  )
}

export default Home
