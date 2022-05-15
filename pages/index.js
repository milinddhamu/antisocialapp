import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Modal from '../components/Modal'
import { messageOpenState } from '../atoms/modalAtom'
import { useRecoilValue } from 'recoil'
import { Messages } from '../components/Messages'

export default function Home() {
  const messageOpen = useRecoilValue(messageOpenState)
  return (
    (messageOpen)? (
    <div className ="bg-gray-100 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>antiSocial</title>
        
      </Head>
      <Modal />
      <Header />
      <Messages />

      
      
    </div> ) : (
      <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
      <title>antiSocial</title>
    </Head>
    <Modal />
    <Header />
    <Feed />
  </div>)

    )
  
}
