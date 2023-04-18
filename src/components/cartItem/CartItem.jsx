import Link from "next/link";
import styles from "./cartItem.module.scss";

import Image from "next/image";
import { FiMinus, FiPlus } from "react-icons/fi";

const CartItem = ({ data }) => {
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
          <p>{data.dates.start.localDate}</p>
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
      <div>
        <div>
          <div>
            <FiMinus />
          </div>
          <input type="text" />
          <div>
            <FiPlus />
          </div>
        </div>
        <div>
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
