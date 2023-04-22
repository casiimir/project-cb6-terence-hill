import styles from "./hamburgerMenu.module.scss";
import Link from "next/link";
import { FiSearch, FiArrowRight } from "react-icons/fi";

import { useRouter } from "next/router";
import { useContext } from "react";
import { DataContext, CartContext } from "@/store/DataContext";

const HamburgerMenu = () => {
  const context = useContext(CartContext);

  const router = useRouter();

  const { state, dispatch } = useContext(DataContext);

  const saveSearchedInput = (e) => {
    dispatch({ type: "SAVE_INPUT", payload: e.target.value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${state.inputValue}`);
  };

  return (
    <div className={styles.HamburgerMenu}>
      <form onSubmit={onHandleSubmit} className={styles.formHamburger}>
        <input
          className={styles.inputHamburger}
          onChange={saveSearchedInput}
          type="text"
          name="text"
          placeholder="Cerca artista"
        />
        <FiSearch className={styles.searchBtn} />
      </form>
      <ul className={styles.homeMenuList}>
        <Link href={"/events"}>
          <li className={styles.homeMenuItem}>Scopri gli eventi</li>
        </Link>
        <Link href={"/about"}>
          <li className={styles.homeMenuItem}>Chi siamo</li>
        </Link>
        <Link href={"/cart"}>
          <li className={styles.homeMenuItem}>
            <p>Carrello</p>
            <div
              className={
                context?.nameContext?.length > 0 ? styles.dot : styles.notDot
              }
            ></div>
          </li>
        </Link>
      </ul>
      <ul className={styles.menuList}>
        <Link href={"/events/concert"}>
          <li className={styles.menuItem}>
            Concerti
            <FiArrowRight />
          </li>
        </Link>
        <Link href={"/events/opera"}>
          <li className={styles.menuItem}>
            Opera <FiArrowRight />
          </li>
        </Link>
        <Link href={"/events/sport"}>
          <li className={styles.menuItem}>
            Sport <FiArrowRight />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
