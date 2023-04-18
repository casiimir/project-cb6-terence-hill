import { useState, useEffect } from "react";
import styles from "./cartList.module.scss";

import CartItem from "../cartItem";

const CartList = () => {
  const [cartContext, setCartContext] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = JSON.parse(localStorage.getItem("event")) || [];
      setCartContext(data);
    }
  }, []);
  return (
    <div>
      {cartContext.length === 0 ? (
        <p>Il tuo carrello è vuoto.</p>
      ) : (
        cartContext?.map((event) => (
          <CartItem
            data={event}
            key={event.id}
            setCartContext={setCartContext}
          />
        ))
      )}
    </div>
  );
};

export default CartList;
