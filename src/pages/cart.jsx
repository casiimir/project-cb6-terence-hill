import Head from "next/head";
import styles from "@/styles/pages/Cart.module.scss";

// main layout
import MainLayout from "@/layouts/mainLayout";

// components
import CartList from "@/components/cartList";
import CtaButton from "@/components/ctaButton";

export default function Cart() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainLayout>
          <div className={styles.Cart}>
            <h3 className={styles.title}>Carrello:</h3>
            <CartList />
            <hr className={styles.line} />
            <div className={styles.checkout}>
              <p>Totale: 45€</p>
              <CtaButton text={"CHECKOUT"} />
            </div>
          </div>
        </MainLayout>
      </main>
    </>
  );
}
