import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>IPL | Indonesia Peerleaders</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Fill with components or routes here */}
      <h1 className='font-bold'> Welcome Home, Peers ! </h1>
      <p className='p-[2%] w-[50%] my-3 font-semibold'>
        At Indonesia Peerleaders, we believe that each individual is resourceful and can grow significantly beyond their limits by empowering them with a coaching-based peer learning program.
        We aim to enable young leaders to access self-development, soft and hard skills, and a creative learning environment, so they will be able to lead the way for a lasting impact.
      </p>
    </div>
  )
}

export default Home
