import styles from "./navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <h4>LOGO</h4>
      <ul className={styles.nav}>
        <li className={styles.navItem}>Festival</li>
        <li className={styles.navItem}>Musica</li>
        <li className={styles.navItem}>Arte & Teatro</li>
        <li className={styles.navItem}>Sport</li>
      </ul>
      <div className={styles.search__section}>
        <span className={styles.loginBtn}>login</span>
        <span className={styles.searchBtn}>Search</span>
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
