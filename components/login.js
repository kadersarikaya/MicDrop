import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { Payment } from './payment'
import Image from 'next/image'
import mic from "../assets/mic.svg"
import landImg from "../assets/land-img.png"
import Link from 'next/link'
const Login = () => {
const wallet = useWallet()

  /** show payment UI if wallet is connected */
  if (wallet.connected) {
    return (
      <Payment />
    )
  }
  /** Landing Page here*/
  return (
    <main className="w-full h-full bg-pink-100">
      <div
        className="py-4 px-4 md:px-1 w-full md:max-w-5xl mx-auto 
        flex items-center justify-between"
      >
        <Link href="/">
          <div className="flex">
            <Image
              className="h-12 w-12 object-cover cursor-pointer"
              src={mic}
              width={80}
              height={80}
            />
            <h1
              className="text-3xl font-extrabold bg-blue-800 bg-clip-text text-transparent
             ml-2 cursor-pointer mt-5"
            >
              MicDrop.
            </h1>
          </div>
        </Link>
        <WalletMultiButton />
      </div>
      <hr />
      <div className="flex flex-col items-center justify-center h-full mt-16 ">
        <h1 className="text-3xl md:text-5xl font-bold py-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-purple-500 via-green-400 to-indigo-500">
            Listen.
          </span>
          <span className="ml-1 md:ml-3 bg-clip-text text-transparent bg-gradient-to-br from-purple-500 via-pink-400 to-indigo-500">
            Feel.
          </span>
          <span className="ml-1 md:ml-3 bg-clip-text text-transparent bg-gradient-to-br from-blue-500 via-yellow-600 to-pink-500">
            Fun.
          </span>
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold py-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-purple-500 via-green-400 to-indigo-500">
            Make
          </span>
          <span className="ml-1 md:ml-3 bg-clip-text text-transparent bg-gradient-to-br from-purple-500 via-pink-400 to-indigo-500">
            Your
          </span>
          <span className="ml-1 md:ml-3 bg-clip-text text-transparent bg-gradient-to-br from-blue-500 via-yellow-600 to-pink-500">
            Own Podcast ✨
          </span>
        </h1>
        <div className="h-full my-16 flex flex-wrap justify-center">
          <Image src={landImg} width={300} height={300} />
        </div>
      </div>
    </main>
  );
}

export default Login

