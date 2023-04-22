import { useState, useEffect, useContext } from "react";
import Head from "next/head";
import styles from "@/styles/pages/Cart.module.scss";
import { CartContext } from "@/store/DataContext";

// main layout
import MainLayout from "@/layouts/mainLayout";

// components
import CartList from "@/components/cartList";
import SecondaryButton from "@/components/secondaryButton";
import Modal from "@/components/modal";

export default function Cart() {
  const context = useContext(CartContext);
  const [priceCheckout, setPriceCheckout] = useState(0);

  useEffect(() => {
    setPriceCheckout(
      context.nameContext.reduce((acc, data) => acc + data.price * data.qty, 0)
    );
  }, [context.nameContext]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onHandleModalClose = () => {
    setIsModalOpen(false);
  };

  const onHandleModalOpen = () => {
    setIsModalOpen(true);
  };

  const [modalText, setModalText] = useState("");

  useEffect(() => {
    if (context.nameContext?.length > 0) {
      setModalText("Complimenti per il tuo acquisto!");
    } else {
      setModalText("Il tuo carrello è vuoto!");
    }
  }, [context.nameContext]);

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
            <CartList />
            <hr className={styles.line} />
            <div className={styles.checkout}>
              <p>Totale: {priceCheckout}€</p>

              <div onClick={onHandleModalOpen}>
                <SecondaryButton text={"CHECKOUT"} />
              </div>

              <Modal
                isOpen={isModalOpen}
                onClose={onHandleModalClose}
                modalText={modalText}
                setContext={context.setNameContext}
              />
            </div>
          </div>
        </MainLayout>
      </main>
    </>
  );
}
