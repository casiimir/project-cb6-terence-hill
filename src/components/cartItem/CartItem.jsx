import { useState, useContext } from "react";
import { CartContext } from "@/store/DataContext";
import Link from "next/link";
import Image from "next/image";
import { FiMinus, FiPlus } from "react-icons/fi";
import styles from "./cartItem.module.scss";

const CartItem = ({ data }) => {
  const context = useContext(CartContext);

  const [valueQty, setValueQty] = useState(data.qty || 1);

  const plusQty = () => {
    const newQty = valueQty + 1;
    setValueQty(newQty);

    const localStorageCartItems =
      JSON.parse(localStorage.getItem("event")) || [];

    const newLocalStorageCart = localStorageCartItems.map((item) =>
      item.id === data.id ? { ...item, qty: newQty } : item
    );

    localStorage.setItem("event", JSON.stringify(newLocalStorageCart));
    context.setNameContext(() => newLocalStorageCart);
  };

  const lessQty = () => {
    const newQty = valueQty - 1;
    setValueQty(newQty);

    const localStorageCartItems =
      JSON.parse(localStorage.getItem("event")) || [];

    const newLocalStorageCart = localStorageCartItems.map((item) =>
      item.id === data.id ? { ...item, qty: newQty } : item
    );

    for (let i = 0; i < newLocalStorageCart.length; i++) {
      if (newLocalStorageCart[i].id === data.id && newQty === 0)
        context.setNameContext(newLocalStorageCart.splice(i, 1));
    }
    localStorage.setItem("event", JSON.stringify([...newLocalStorageCart]));
    context.setNameContext(() => newLocalStorageCart);
  };

  const removeSingleItem = () => {
    const localStorageCartItems =
      JSON.parse(localStorage.getItem("event")) || [];

    for (let i = 0; i < localStorageCartItems.length; i++) {
      if (localStorageCartItems[i].id === data.id)
        context.setNameContext(localStorageCartItems.splice(i, 1));
    }
    localStorage.setItem("event", JSON.stringify([...localStorageCartItems]));
    context.setNameContext(localStorageCartItems);
  };

  return (
    <div className={styles.CartItem}>
      <div className={styles.artist}>
        <Image
          className={styles.image}
          src={data.images[7].url}
          alt={data.name}
          width={100}
          height={100}
        />
        <div className={styles.info}>
          <h3>{data.name}</h3>

          <p>{data.dates.start.localDate.split("-").reverse().join("-")}</p>
          {data._embedded.venues[0].name ? (
            <p>
              {data._embedded.venues[0].name} -{" "}
              {data._embedded.venues[0].city.name}
            </p>
          ) : (
            <p>{data._embedded.venues[0].city.name}</p>
          )}
        </div>
      </div>
      <div className={styles.priceInfo}>
        <div className={styles.quantityInfo}>
          <div className={styles.quantityContainer}>
            <FiMinus className={styles.minus} onClick={lessQty} />
            <input
              className={styles.quantity}
              readOnly
              type="text"
              value={valueQty}
            />
            <FiPlus className={styles.plus} onClick={plusQty} />
          </div>
          <div>
            <button className={styles.button} onClick={removeSingleItem}>
              Rimuovi
            </button>
          </div>
        </div>
        <p>{data.price}€</p>
      </div>
    </div>
  );
};

export default CartItem;
