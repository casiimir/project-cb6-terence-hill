import Head from "next/head";
import MainLayout from "@/layouts/mainLayout";
import styles from "@/styles/pages/Events.module.scss";
import Link from "next/link";
// import eventsList from "@/mock/events";

import CardList from "@/components/cardList";

import { useContext } from "react";
import { DataContext } from "@/store/DataContext";

export default function Events() {
  const items = useContext(DataContext);

  return (
    <>
      <Head>
        <title>EventHub - Eventi</title>
        <meta
          name="description"
          content="La tua destinazione per i migliori eventi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      <MainLayout>
        <div className={styles.Events}>
          <div className={styles.container}>
            <p className={styles.subtitle}>Tutti gli eventi</p>
            <div className={styles.buttons}>
              <Link href={"/events/concert"}>
                <button className={styles.button}>Concerti</button>
              </Link>
              <Link href={"/events/opera"}>
                <button className={styles.button}>Opera</button>
              </Link>
              <Link href={"/events/sport"}>
                <button className={styles.button}>Sport</button>
              </Link>
            </div>
          </div>
          <CardList data={items.state.fetchedData} />
        </div>
      </MainLayout>
    </>
  );
}
