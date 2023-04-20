import Head from "next/head";
import MainLayout from "@/layouts/mainLayout";
import styles from "@/styles/pages/Events.module.scss";
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
          <p>Scopri gli eventi</p>
          <CardList data={items.state.fetchedData} />
        </div>
      </MainLayout>
    </>
  );
}
