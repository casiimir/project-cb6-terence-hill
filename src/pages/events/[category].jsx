import Head from "next/head";
import MainLayout from "@/layouts/mainLayout";
import styles from "./category.module.scss";
import Link from "next/link";

import CardList from "@/components/cardList";

import { useRouter } from "next/router";

export default function Category({ data }) {
  const router = useRouter();
  const { category } = router.query;

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
        <div>
          {category === "concert" && (
            <div className={styles.container}>
              <p className={styles.text}>Concerti</p>
              <div className={styles.buttons}>
                <Link href={"/events"}>
                  <button className={styles.button}>Tutti gli eventi</button>
                </Link>
                <Link href={"/events/opera"}>
                  <button className={styles.button}>Opera</button>
                </Link>
                <Link href={"/events/sport"}>
                  <button className={styles.button}>Sport</button>
                </Link>
              </div>
            </div>
          )}
          {category === "opera" && (
            <div className={styles.container}>
              <p className={styles.text}>Opera</p>
              <div className={styles.buttons}>
                <Link href={"/events"}>
                  <button className={styles.button}>Tutti gli eventi</button>
                </Link>
                <Link href={"/events/concert"}>
                  <button className={styles.button}>Concerti</button>
                </Link>
                <Link href={"/events/sport"}>
                  <button className={styles.button}>Sport</button>
                </Link>
              </div>
            </div>
          )}
          {category === "sport" && (
            <div className={styles.container}>
              <p className={styles.text}>Sport</p>
              <div className={styles.buttons}>
                <Link href={"/events"}>
                  <button className={styles.button}>Tutti gli eventi</button>
                </Link>
                <Link href={"/events/concert"}>
                  <button className={styles.button}>Concerti</button>
                </Link>
                <Link href={"/events/opera"}>
                  <button className={styles.button}>Opera</button>
                </Link>
              </div>
            </div>
          )}

          <CardList data={data} />
        </div>
      </MainLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { category } = context.query;
  console.log(context);

  if (category === "sport") {
    const data = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=iCFC0FgcfYJsf9GbRJBPAW360lHj3sZt&classificationName=sport` // come faccio a prendere id da data, array?
    );
    const res = await data.json();
    console.log(data);
    return {
      props: {
        data: res._embedded.events,
      },
    };
  }

  if (category === "opera") {
    const data = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=iCFC0FgcfYJsf9GbRJBPAW360lHj3sZt&classificationName=opera&locale=en-us` // come faccio a prendere id da data, array?
    );
    const res = await data.json();
    console.log(data);
    return {
      props: {
        data: res._embedded.events,
      },
    };
  }

  if (category === "concert") {
    const data = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=iCFC0FgcfYJsf9GbRJBPAW360lHj3sZt&keyword=concerts&locale=it-it&size=40` // come faccio a prendere id da data, array?
    );
    const res = await data.json();
    console.log(data);
    return {
      props: {
        data: res._embedded.events,
      },
    };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
      props: {},
    };
  }
}
