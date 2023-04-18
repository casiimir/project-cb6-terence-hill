import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMinus, FiPlus } from "react-icons/fi";
import styles from "./cartItem.module.scss";

const CartItem = ({ data }) => {
  const [valueQty, setValueQty] = useState(1);

  const plusQty = () => {
    const newQty = valueQty + 1;
    setValueQty(newQty);
  };

  const lessQty = () => {
    const newQty = valueQty - 1;
    setValueQty(newQty);
  };

  const removeSingleItem = () => {};

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
            <input type="text" value={valueQty} className={styles.quantity} />
            <FiPlus onClick={plusQty} className={styles.plus} />
          </div>
          <div>
            <button onClick={removeSingleItem} className={styles.button}>
              Rimuovi
            </button>
          </div>
        </div>
        <p>15€</p>
      </div>
    </div>
  );
};

export default CartItem;
