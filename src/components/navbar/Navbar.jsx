import styles from "./navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <h4>LOGO</h4>
      <div className={styles.hamburgerMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default Navbar;
