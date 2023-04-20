import Head from "next/head";
import MainLayout from "@/layouts/mainLayout";
import styles from "../../styles/pages/Search.module.scss";

import CardList from "@/components/cardList";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function searchResults({ data }) {
  console.log(data?._embedded?.events[0]);
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
        <div className={styles.Search}>
          <p className={styles.results}>Risultati</p>
          {data?._embedded ? (
            // <h1>{data._embedded.events[0].name}</h1>
            <CardList data={data._embedded.events} />
          ) : (
            <h1 className={styles.notfound}>Artista non trovato</h1>
          )}
          {/* <p>{category}</p>
          <CardList data={eventi} /> */}
        </div>
      </MainLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  const data = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?size=1&keyword=${context.params.id}&apikey=iCFC0FgcfYJsf9GbRJBPAW360lHj3sZt`
  );
  const res = await data.json();

  return {
    props: {
      data: res,
    },
  };
}
