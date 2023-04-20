import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "@/styles/pages/Cart.module.scss";

// main layout
import MainLayout from "@/layouts/mainLayout";

// components
import CartList from "@/components/cartList";
import SecondaryButton from "@/components/secondaryButton";
import Modal from "@/components/modal";

export default function Cart() {
  const [cartContext, setCartContext] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = JSON.parse(localStorage.getItem("event")) || [];
      setCartContext(data);
    }
  }, []);

  const [priceCheckout, setPriceCheckout] = useState(0);

  useEffect(() => {
    setPriceCheckout(
      cartContext.reduce((acc, data) => acc + data.price * data.qty, 0)
    );
  }, [cartContext]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onHandleModalClose = () => {
    setIsModalOpen(false);
  };

  const onHandleModalOpen = () => {
    setIsModalOpen(true);
  };

  const [modalText, setModalText] = useState("");

  useEffect(() => {
    if (cartContext.length > 0) {
      setModalText("Complimenti per il tuo acquisto!");
    } else {
      setModalText("Il tuo carrello è vuoto!");
    }
  }, [cartContext]);

  return (
    <>
      <Head>
        <title>EventHub - Carrello</title>
        <meta
          name="description"
          content="La tua destinazione per i migliori eventi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      <main>
        <MainLayout>
          <div className={styles.Cart}>
            <h3 className={styles.title}>Carrello:</h3>
            <CartList
              cartContext={cartContext}
              setCartContext={setCartContext}
              priceCheckout={priceCheckout}
              setPriceCheckout={setPriceCheckout}
            />
            <hr className={styles.line} />
            <div className={styles.checkout}>
              <p>Totale: {priceCheckout}€</p>
              {/* <button
                className={styles.checkoutBtn}
                onClick={onHandleModalOpen}
              > */}
              <div onClick={onHandleModalOpen}>
                <SecondaryButton text={"CHECKOUT"} />
              </div>
              {/* </button> */}

              <Modal
                isOpen={isModalOpen}
                onClose={onHandleModalClose}
                modalText={modalText}
              />
            </div>
          </div>
        </MainLayout>
      </main>
    </>
  );
}
