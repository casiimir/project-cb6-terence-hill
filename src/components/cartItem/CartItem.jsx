import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMinus, FiPlus } from "react-icons/fi";
import styles from "./cartItem.module.scss";

const CartItem = ({
  data,
  setCartContext,
  priceCheckout,
  setPriceCheckout,
}) => {
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
    setPriceCheckout(priceCheckout + data.price);
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
        newLocalStorageCart.splice(i, 1);
    }

    localStorage.setItem("event", JSON.stringify([...newLocalStorageCart]));
    setCartContext(() => newLocalStorageCart);
    setPriceCheckout(priceCheckout - data.price);
  };

  const removeSingleItem = () => {
    const localStorageCartItems =
      JSON.parse(localStorage.getItem("event")) || [];

    for (let i = 0; i < localStorageCartItems.length; i++) {
      if (localStorageCartItems[i].id === data.id)
        localStorageCartItems.splice(i, 1);
    }
    localStorage.setItem("event", JSON.stringify([...localStorageCartItems]));
    setCartContext(() => localStorageCartItems);
    setPriceCheckout(priceCheckout - data.price * data.qty);
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
            <FiMinus onClick={lessQty} className={styles.minus} />
            <input
              className={styles.quantity}
              readOnly
              type="text"
              value={valueQty}
            />
            <FiPlus onClick={plusQty} className={styles.plus} />
          </div>
          <div>
            <button onClick={removeSingleItem} className={styles.button}>
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
