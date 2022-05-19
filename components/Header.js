import { Image } from "next/image"
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,

} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {useRecoilState} from 'recoil'
import { modalState } from "../atoms/modalAtom";

const Header = () => {
  const {data: session} = useSession()
  const [open , setOpen] = useRecoilState(modalState)
  const router = useRouter()

  const routeToHome = () => {
    router.push('/')
  }




  return (
    <div className="shadow-sm border-b bg-gray-300 sticky top-0 z-50 items-center  pt-2 pb-2">
      <div className="flex justify-between max-w-6xl xl:mx-auto items-center ">
        <div onClick={() => router.push('/')} className="relative hidden lg:inline-grid w-28 p-1 cursor-pointer ml-3  ">
          <img
            src='https://www.linkpicture.com/q/FullLogo_Transparent_NoBuffer-1.png'
            layout='fit'
            object-fit='contain'
          />
        </div>
        <div onClick={() => router.push('/')} className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer ml-3 ">
          <img
            src='https://www.linkpicture.com/q/5894032.png'
            layout='fill'
            object-fit='cover'
          />
        </div>

        {/* {middle} */}
        <div className="max-w-xs">
          <div
            className="relative rounded-md ">
            <div
              className="absolute inset-y-0 pl-3 flex items-center pointer-events-none ">
              <SearchIcon
                className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-100 focus:ring-black focus:border-black rounded-full hover:shadow-inner '
              type='text'
              placeholder='search' />

          </div>
        </div>

        {/* {right} */}
        <div className="flex items-center justify-end space-x-4 mr-2">
          <HomeIcon onClick={routeToHome} className='navBtn' />
          <HomeIcon onClick={routeToHome} className='h-6 md:hidden cursor-pointer' />
          <PaperAirplaneIcon  className='h-6 mb-1 md:hidden cursor-pointer rotate-45' />
          <PlusCircleIcon onClick={() => setOpen(true)} className='h-6 md:hidden cursor-pointer' />

          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className='navBtn rotate-45' />
                <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-violet-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>


              </div>


              <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn" />

              <UserGroupIcon className="navBtn" />

              <HeartIcon className="navBtn" />

              <img
                onClick={signOut} 
                src={session.user?.image}
                alt='profile picture'
                className="h-10 w-10 object-fit rounded-full hover:border-2v  border-violet-500 cursor-pointer"
              />
            </>

          ) : (
            <button className="font-bold" onClick={signIn}>Sign in</button>

          )}





        </div>


      </div>
    </div>
  )
}

export default Header