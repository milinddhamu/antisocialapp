import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Modal from '../components/Modal'


export default function Home() {
  return (
    <div className ="bg-gray-100 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>antiSocial</title>
        <link ref='icon' href='/favicon' />
        
      </Head>
      <Header />
      <Feed />
      <Modal />

      
      
      </div>
      

    )
  
}
