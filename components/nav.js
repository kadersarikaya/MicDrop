import NavLink from "./navLink";
import Image from "next/image";
import mic from "../assets/mic.svg";
import Link from "next/link";
const styles = {
  nav: `bg-black h-auto w-96 p-5 py-8`,
  link: `hover:text-[#fff]`,
  playlistName: `text-[#b3b3b3] cursor-default text-sm hover:text-[#fff]`,
};
const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link href="/">
        <div className="flex">
          <Image
            className="h-12 w-12 object-cover cursor-pointer"
            src={mic}
            width={50}
            height={50}
          />
          <h1
            className="text-2xl font-extrabold bg-blue-800 bg-clip-text text-transparent
             ml-2 cursor-pointer mt-2"
          >
            MicDrop.
          </h1>
        </div>
      </Link>
      <div className="mb-10 mt-10">
        <NavLink
          icon="assets/home.svg"
          title="Home"
          className={styles.link}
          link="/"
        />
        <NavLink
          icon="assets/search.svg"
          title="Search"
          className={styles.link}
          link="/"
        />
        <NavLink
          icon="assets/playlist.svg"
          title="Your library"
          className={styles.link}
          link="/library"
        />
      </div>

      <div className="mb-5 border-b border-gray-100/10">
        <NavLink
          icon="assets/add.svg"
          title="Create Playlist"
          className={styles.link}
          link="/"
        />
        <NavLink
          icon="assets/heart.svg"
          title="Liked Podcasts"
          className={styles.link}
          link="/"
        />
      </div>

      {/* update here
      <div className='mt-5 leading-8 flex flex-col gap-[10px]'>
        <p className='text-sm'>GHOST SONGS</p>
        <p className={styles.playlistName}>
          CarPlay Vol.2
        </p>
        <p className={styles.playlistName}>
          Country Dump
        </p>
        <p className={styles.playlistName}>
          Energy Booster: Country
        </p>
        <p className={styles.playlistName}>
          Funky
        </p>
        <p className={styles.playlistName}>
          Coaching 🔥
        </p>
        <p className={styles.playlistName}>
          Country
        </p>
        <p className={styles.playlistName}>
          Your Top Songs 2019
        </p>
      </div> */}
    </div>
  );
};

export default Nav;
