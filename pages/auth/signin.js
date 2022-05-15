import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";


function signIn ({ providers }) {  
  return (
    <>
      <Header/>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <img className = 'w-60' src='https://www.linkpicture.com/q/FullLogo_Transparent_NoBuffer-1.png' alt ='' />
      <div className="mt-40">
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button 
          className="p-3 bg-violet-500 rounded-xl text-white" 
          onClick={() => SignIntoProvider(provider.id , { callbackUrl: '/'})}>
          Sign in with {provider.name}
          </button>
        </div>
      ))}
      </div>
      </div>
    </>
  );
}



export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers 
    },
  }
}

export default signIn;
