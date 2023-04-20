import { useState } from "react";
import styles from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "../hamburgerMenu";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

import { useContext } from "react";
import { DataContext } from "@/store/DataContext";

const Navbar = ({ showHamburger, setShowHamburger }) => {
  // const {state, dispatch } = useContext(DataContext);
  // const [showHamburger, setShowHamburger] = useState(false);

  const [searchOn, setSearchOn] = useState(false);

  const InputOn = () => {
    setSearchOn((prev) => !prev);
  };

  const saveSearchedInput = (e) => {
    dispatch({ type: "SAVE_INPUT", payload: e.target.value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    <Link href="/events/results" />;
  };

  return (
    <div className={styles.Navbar}>
      <ul className={styles.nav}>
        {/* <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li> */}
        <li className={styles.navItem}>
          <Link href="/events">Scopri gli eventi</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">Chi siamo</Link>
        </li>
        {/* <li className={styles.navItem}>Contacts</li> */}
        {/* <li className={styles.navItem}>Newsletter</li> */}
      </ul>
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

      <div className={styles.search__section}>
        <form onSubmit={onHandleSubmit}>
          <input
            onChange={saveSearchedInput}
            type="text"
            name="text"
            placeholder="Search event"
            className={searchOn ? `${styles.inputVisibility}` : null}
          />
        </form>

        <span className={styles.searchBtn}>
          <FiSearch onClick={InputOn} />
        </span>

        <Link href="/cart" className={styles.cartBtn}>
          <FiShoppingCart />
        </Link>
      </div>
      <div
        className={styles.hamburgerMenu}
        onClick={() => setShowHamburger((prev) => !prev)}
      >
        <span
          className={`${showHamburger ? styles.open1 : styles.line}`}
        ></span>
        <span
          className={`${showHamburger ? styles.open2 : styles.line}`}
        ></span>
        <span
          className={`${showHamburger ? styles.open3 : styles.line}`}
        ></span>
      </div>

      {showHamburger && <HamburgerMenu />}
    </div>
  );
};

export default Navbar;
