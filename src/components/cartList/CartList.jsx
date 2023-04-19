// import { useState, useEffect } from "react";
import styles from "./cartList.module.scss";

import CartItem from "../cartItem";

const CartList = ({
  cartContext,
  setCartContext,
  priceCheckout,
  setPriceCheckout,
}) => {
  return (
    <div className={styles.CartList}>
      {cartContext.length === 0 ? (
        <p>Il tuo carrello è vuoto.</p>
      ) : (
        cartContext?.map((event) => (
          <CartItem
            data={event}
            key={event.id}
            setCartContext={setCartContext}
            priceCheckout={priceCheckout}
            setPriceCheckout={setPriceCheckout}
          />
        ))
      )}
    </div>
  );
};

export default CartList;
