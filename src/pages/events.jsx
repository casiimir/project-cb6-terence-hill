import Head from "next/head";
import MainLayout from "@/layouts/mainLayout";
import styles from "@/styles/pages/Events.module.scss";
import eventsList from "@/mock/events";

import CardList from "@/components/cardList";

export default function Events() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div className={styles.Events}>
          <p>Scopri gli eventi</p>
          {/* {console.log(items)} */}
          <CardList data={eventsList} />
        </div>
      </MainLayout>
    </>
  );
}
