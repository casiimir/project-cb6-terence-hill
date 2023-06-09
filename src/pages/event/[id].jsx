import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiClock, FiMapPin } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "@/store/DataContext";

import styles from "@/styles/pages/Event.module.scss";

// main layout
import MainLayout from "@/layouts/mainLayout";
import SecondaryButton from "@/components/secondaryButton";

export default function EventDetails({ data }) {
  const context = useContext(CartContext);

  function deleteSeconds(time) {
    let timeArray = time.split(":");
    let newTime = timeArray[0] + ":" + timeArray[1];
    return newTime;
  }

  const addProduct = () => {
    let localStorageItems = JSON.parse(localStorage.getItem("event")) || [];

    const isProductDataInsideLocalStorage = !localStorageItems.find(
      (product) => product.id === data.id
    );

    if (isProductDataInsideLocalStorage) {
      localStorage.setItem(
        "event",
        JSON.stringify([...localStorageItems, data])
      );
      alert(`${data.name} aggiunto al carrello`);
      context.setNameContext(JSON.parse(localStorage.getItem("event")) || []);
    } else {
      alert(`${data.name} è già nel carrello`);
    }
  };

  return (
    <>
      <Head>
        <title>EventHub - Evento</title>
        <meta
          name="description"
          content="La tua destinazione per i migliori eventi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      <main className={styles.main}>
        <MainLayout>
          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <Image
                className={styles.img}
                src={
                  data.images[5]?.width > 1500
                    ? data.images[5]?.url
                    : data.images[6]?.width > 1500
                    ? data.images[6]?.url
                    : data.images[1]?.width > 1500
                    ? data.images[1]?.url
                    : data.images[2]?.width > 1500
                    ? data.images[2]?.url
                    : data.images[3]?.width > 1500
                    ? data.images[3]?.url
                    : data.images[4]?.width > 1500
                    ? data.images[4]?.url
                    : data.images[7]?.width > 1500
                    ? data.images[7]?.url
                    : data.images[8]?.width > 1500
                    ? data.images[8]?.url
                    : data.images[9]?.width > 1500
                    ? data.images[9]?.url
                    : data.images[10]?.url
                }
                alt={data.name}
                width={1920}
                height={550}
                priority
                // layout="responsive"
              />
            </div>
            <div className={styles.cover}>
              <div className={styles.overlay}></div>
              <h2 className={styles.title}>{data.name}</h2>
            </div>
          </div>
          <div className={styles.bottom_section}>
            <div className={styles.mainSection}>
              <div className={styles.info}>
                <ul>
                  <li>
                    <FiCalendar />
                    <p>
                      {data.dates.start.localDate
                        .split("-")
                        .reverse()
                        .join("-")}
                    </p>
                  </li>
                  <li>
                    <FiClock />
                    <p>{deleteSeconds(data.dates.start.localTime)}</p>
                  </li>
                  <li>
                    <FiMapPin />
                    <p>
                      {data._embedded.venues[0].name} -{" "}
                      {data._embedded.venues[0].city.name}
                    </p>
                  </li>
                </ul>
                <div className={styles.description}>
                  <h3>Descrizione</h3>
                  <p>
                    {`Non perdere l'opportunità di assistere all'evento ${
                      data.name
                    },
                in programma il ${data.dates.start.localDate
                  .split("-")
                  .reverse()
                  .join("-")} presso ${
                      data._embedded.venues[0].name
                    } alle ${deleteSeconds(
                      data.dates.start.localTime
                    )}. Preparati a vivere un'esperienza
                unica nel suo genere, con un artista di fama internazionale.
                Acquista subito i tuoi biglietti e non rimarrai deluso!`}
                  </p>
                </div>
                <div className={styles.price_section}>
                  <p className={styles.price}>{data.price}€</p>
                  <div onClick={addProduct}>
                    <SecondaryButton text={"COMPRA IL BIGLIETTO"} />
                  </div>
                </div>
              </div>
            </div>
            {/* map */}
            <div className={styles.mapContent}>
              <div className={styles.textSection}>
                <h3 className={styles.mapTitle}>Mappa evento</h3>
                <small className={styles.fullScreen}>
                  <a
                    href={`https://maps.google.com/maps?q=${data._embedded.venues[0].location.latitude},${data._embedded.venues[0].location.longitude}&hl=es;z=14&amp;output=embed`}
                    target="_blank"
                  >
                    Vista schermo intero
                  </a>
                </small>
              </div>
              <iframe
                className={styles.map}
                width="350"
                height="220"
                frameBorder="0"
                scrolling="yes"
                marginHeight="0"
                marginWidth="0"
                src={`https://maps.google.com/maps?q=${data._embedded.venues[0].location.latitude},${data._embedded.venues[0].location.longitude}&hl=it&z=14&amp&output=embed`}
              ></iframe>
              <br />
            </div>
          </div>
        </MainLayout>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  console.log(context);
  const data = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=iCFC0FgcfYJsf9GbRJBPAW360lHj3sZt` // come faccio a prendere id da data, array?
  );
  const res = await data.json();
  /**
   * Returns a random number between min (inclusive) and max (exclusive)
   */
  const valuePrice = [15, 24, 28, 36, 60];
  const randomIndex = Math.floor(Math.random() * valuePrice.length);
  res.price = valuePrice[randomIndex];
  res.qty = 1;

  return {
    props: {
      data: res,
    },
  };
}
