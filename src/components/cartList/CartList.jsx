import styles from "./cartList.module.scss";
import { CartContext } from "@/store/DataContext";
import { useContext } from "react";

import CartItem from "../cartItem";

const CartList = () => {
  const context = useContext(CartContext);

  return (
    <div className={styles.CartList}>
      {context.nameContext.length === 0 ? (
        <p>Il tuo carrello è vuoto.</p>
      ) : (
        context.nameContext.map((event) => (
          <CartItem data={event} key={event.id} />
        ))
      )}
    </div>
  );
};

export default CartList;
