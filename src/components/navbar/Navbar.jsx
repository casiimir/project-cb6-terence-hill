import { useState, useEffect } from "react";
import styles from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "../hamburgerMenu";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

import { useRouter } from "next/router";
import { useContext } from "react";
import { DataContext } from "@/store/DataContext";

const Navbar = ({ showHamburger, setShowHamburger }) => {
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);

  const saveSearchedInput = (e) => {
    dispatch({ type: "SAVE_INPUT", payload: e.target.value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${state.inputValue}`);
  };

  // const [cartContext, setCartContext] = useState([]);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const data = JSON.parse(localStorage.getItem("event")) || [];
  //     setCartContext(data);
  //   }
  // }, []);

  return (
    <div className={styles.Navbar}>
      <form onSubmit={onHandleSubmit}>
        <input
          onChange={saveSearchedInput}
          type="text"
          name="text"
          placeholder="Cerca artista"
        />
        <FiSearch className={styles.searchBtn} />
      </form>

      <Link href="/" onClick={() => setShowHamburger((prev) => false)}>
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
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <Link href="/events">Scopri gli eventi</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">Chi siamo</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/cart">
              <FiShoppingCart className={styles.cartBtn} />
              {/* <div className={cartContext.length > 0 ? styles.dot : null}></div> */}
            </Link>
          </li>
        </ul>
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
