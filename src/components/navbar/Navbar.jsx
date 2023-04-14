import styles from "./navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { FiLogIn, FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <Image
        className={styles.logo}
        src="/img/logo.png"
        width={150}
        height={150}
        alt="hero image"
        priority
      />
      <ul className={styles.nav}>
        <li className={styles.navItem}>Home</li>
        <li className={styles.navItem}>About</li>
        {/* <li className={styles.navItem}>Contacts</li> */}
        <li className={styles.navItem}>Newsletter</li>
      </ul>
      <div className={styles.search__section}>
        <span className={styles.searchBtn}>
          <FiSearch />
        </span>
        <span className={styles.loginBtn}>
          <FiLogIn />
        </span>
      </div>
      <div className={styles.hamburgerMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default Navbar;
