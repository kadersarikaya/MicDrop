import Link from "next/link";
import Nav from "../components/nav";
import Image from "next/image";
import mic from "../assets/microphone.svg";
import baris from "../assets/baris.jpeg";
import beyhan from "../assets/beyhan.jpg";
import english from "../assets/english.png";
import bumu from "../assets/bumu.jpg";
const LibraryPage = () => {
  return (
    <div className="flex bg-zinc-900">
      <Nav />
      <div className="w-full flex flex-col">
        <div className="mt-10">
          <h1 className="font-bold text-2xl py-5 text-center">Top podcasts</h1>
          <div className="flex justify-center">
            <div className="border rounded-md border-black bg-zinc-800 px-2 w-52 h-72 mr-10 hover:cursor-pointer hover:bg-zinc-700">
              <Image
                className="rounded-md"
                src={beyhan}
                width={200}
                height={200}
              />
              <h3 className="font-bold">Kendine İyi Davran</h3>
              <p className="text-zinc-400">Beyhan Budak</p>
            </div>
              <div className="border rounded-md border-black bg-zinc-800 px-2 w-52 h-72 mr-10 hover:cursor-pointer hover:bg-zinc-700">
                <Image
                  className="rounded-md"
                  src={baris}
                  width={200}
                  height={200}
                />
                <h3 className="font-bold">Barış Özcan ile 111 Hz</h3>
                <p className="text-zinc-400">Barış Özcan</p>
              </div>
            <div className="border rounded-md border-black bg-zinc-800 px-2 w-52 h-72 mr-10 hover:cursor-pointer hover:bg-zinc-700">
              <Image
                className="rounded-md"
                src={english}
                width={200}
                height={200}
              />
              <h3 className="font-bold">6 Minute English</h3>
              <p className="text-zinc-400">BBC Radio</p>
            </div>
            <div className="border rounded-md border-black bg-zinc-800 px-2 w-52 h-72 mr-10 hover:cursor-pointer hover:bg-zinc-700">
              <Image
                className="rounded-md"
                src={bumu}
                width={200}
                height={200}
              />
              <h3 className="font-bold">Bu Mu Yani?</h3>
              <p className="text-zinc-400">BMY Medya</p>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-10">
          <h1 className="font-bold text-2xl py-5 text-center">Categories</h1>
          <div className="flex justify-center">
            <div className="border rounded-md  border-black bg-zinc-800 px-2 py-5 w-52 h-64 mr-10 hover:cursor-pointer hover:bg-zinc-700">
              <h3 className="font-bold text-center">News & Politics</h3>
              <div className="text-center mt-12">
                <Image className="" src={mic} width={50} height={50} />
              </div>
            </div>
            <div className="border rounded-md border-black bg-zinc-800 px-2 py-5 w-52 h-64 mr-10 hover:cursor-pointer hover:bg-zinc-700">
              <h3 className="font-bold text-center"> Self Development</h3>
              <div className="text-center mt-12">
                <Image src={mic} width={50} height={50} />
              </div>
            </div>
            <div className="border rounded-md border-black bg-zinc-800 px-2 py-5 w-52 h-64 mr-10 hover:cursor-pointer hover:bg-zinc-700">
              <h3 className="font-bold text-center"> Comedy</h3>
              <div className="text-center mt-12">
                <Image src={mic} width={50} height={50} />
              </div>
            </div>
            <div className="border rounded-md border-black bg-zinc-800 px-2 py-5 w-52 h-64 mr-10 hover:cursor-pointer hover:bg-zinc-700">
              <h3 className="font-bold text-center">Sports & Reaction </h3>
              <div className="text-center mt-12">
                <Image src={mic} width={50} height={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
