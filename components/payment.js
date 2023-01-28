import { useEffect, useState } from 'react'
import { getProgramInstance } from '../utils/utils'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { SOLANA_HOST } from '../utils/const'
import { PublicKey } from '@solana/web3.js'
import { useWallet } from '@solana/wallet-adapter-react'
import HomePage from '../pages/homepage'
import Link from 'next/link'
import Image from 'next/image'
import mic from "../assets/mic.svg"
import landImg from "../assets/land-img.png"
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
const anchor = require('@project-serum/anchor')

const { web3 } = anchor
const { SystemProgram } = web3
const utf8 = anchor.utils.bytes.utf8

const defaultAccounts = {
  tokenProgram: TOKEN_PROGRAM_ID,
  clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
  systemProgram: SystemProgram.programId,
}

export const Payment = () => {
  const wallet = useWallet()
  const connection = new anchor.web3.Connection(SOLANA_HOST)
  const program = getProgramInstance(connection, wallet)
  const [payers, setPayers] = useState([])
  const [isPaid, setPaid] = useState(false)

  useEffect(() => {
    if (wallet.connected) getAllWallets()
  }, [wallet.connected, isPaid])

  const getAllWallets = async () => {
    const payerList = await program.account.payerAccount.all()
    setPayers(payerList)
    payerList.forEach(payer => {
      if (payer.account.wallet.toBase58() == wallet.publicKey.toBase58())
        setPaid(true)
    })
  }

  const payClicked = async () => {
    let [payerSigner] = await anchor.web3.PublicKey.findProgramAddressSync (
      [utf8.encode('payer'), wallet.publicKey.toBuffer()],
      program.programId,
    )

    let payerInfo

    try {
      payerInfo = await program.account.payerAccount.fetch(payerSigner)
    } catch (e) {
      try {
        await program.rpc.acceptPayment({
          accounts: {
            payerWallet: payerSigner,
            receiver: new PublicKey(
              "H68dEkDKf6qpnM2m95xr6kV3zNe25aKmUMxftEq1mN4E"
            ),
            authority: wallet.publicKey,
            ...defaultAccounts,
          },
        });
        alert('Transaction proceed')
      } catch (e) {
        alert(e.message)
      }
    }
  }

  /** show homepage if user makes payment */
  if (isPaid) return <HomePage />

  /** Payment Component */
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
          <div className={styles.main}>
            <p className={styles.text}>Make Payment</p>
            <div className={styles.buttons}>
              <button
                className={styles.button}
                onClick={payClicked}
                disabled={isPaid}
              >
                Pay 0.1 Sol
              </button>
              <button className={styles.button} onClick={getAllWallets}>
                Update List
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const styles = {
  main: `flex flex-col justify-center items-center`,
  button: `bg-[#22C55E] m-3 text-white font-bold py-4 px-7 rounded-full hover:opacity-70 transition`,
  text: `text-4xl text-green-300 mb-10 font-bold`,
  buttons: `flex items-center`,
};
