import Image from 'next/image'
import Link from 'next/link'

const styles = {
  navLink: `flex item-center mb-5 cursor-pointer hover:text-[#fff] text-[#b3b3b3]`,
  navLinkText: `ml-5`,
}

const NavLink = ({ title, icon, link }) => {
  return (
    <Link href= {link}
     >
      <div className={styles.navLink}>
        <img alt="" src={icon} width={20} height={20} />
        <p className={styles.navLinkText}>{title}</p>
      </div>
    </Link>
  );
}

export default NavLink
