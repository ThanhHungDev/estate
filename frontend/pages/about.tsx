import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Favicon from '../widgets/Favicon'
import Nav from '../widgets/Nav'
import Tophead from '../widgets/Tophead'

const Home: NextPage = () => {

  return <div className='about-page'>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <Favicon />
    </Head>
    <div className="pagecomtainer">
      <Tophead />
      <Nav />
    </div>
  </div>
}

export default Home