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

      <div className='text-white flex justify-between items-center py-20 lg:py-2'>
        <div className='px-10 space-y-10'>
          <h1 className="text-5xl max-w-xl font-['Poppins'] font-semibold">
            <span className='underline decoration-white decoration-4'>
              Empowering
            </span>{" "}
              young individuals in becoming the future leaders of the FMCG industry.
          </h1>
          <h2> Take a look at IPL's exclusive leadership developmental program for awardees, public seminars, and many other excitement! </h2>
        </div>

        <div></div>

      </div>

    </div>
  )
}

export default Home
