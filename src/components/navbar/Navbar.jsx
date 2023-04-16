import { useState } from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
import HamburgerMenu from "../hamburgerMenu";

const Navbar = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  
  return (
    <div className={styles.Navbar}>
      <Link href="/">
        <Image
          className={styles.logo}
          src="/img/logo.png"
          width={150}
          height={150}
          alt="hero image"
          priority
        />
      </Link>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/events">Eventi</Link>
        </li>
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
      <div className={styles.hamburgerMenu} onClick={() => setShowHamburger(!showHamburger)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {showHamburger && (
        <div className={styles.menu}>
          <HamburgerMenu />
        </div>
      )}
    </div>
  );
};

export default Navbar;
