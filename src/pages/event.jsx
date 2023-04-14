import Head from "next/head";
import Image from "next/image";
import { FiCalendar, FiClock, FiMapPin } from "react-icons/fi";

import styles from "@/styles/pages/Event.module.scss";

// main layout
import MainLayout from "@/layouts/mainLayout";

// dati fetch
import { useContext } from "react";
import { DataContext } from "@/store/DataContext";

export default function EventDetails() {
  const items = useContext(DataContext);

  const event = {
    name: "Imagine Dragons - Mercury World Tour",
    type: "event",
    id: "ZK98xZKrZkv6eZup5QQKr",
    test: false,
    url: "https://shop.ticketmaster.it/biglietti/acquista-biglietti-imagine-dragons-mercury-world-tour-05-agosto-2023-circo-massimo-roma-5061.html",
    locale: "it-it",
    images: [
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
        width: 100,
        height: 56,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
        width: 305,
        height: 203,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
        width: 640,
        height: 360,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
        width: 1136,
        height: 639,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
        width: 1024,
        height: 576,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        width: 2048,
        height: 1152,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
        width: 1024,
        height: 683,
        fallback: false,
      },
      {
        ratio: "3_2",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
        width: 640,
        height: 427,
        fallback: false,
      },
      {
        ratio: "4_3",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
        width: 305,
        height: 225,
        fallback: false,
      },
      {
        ratio: "16_9",
        url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
        width: 205,
        height: 115,
        fallback: false,
      },
    ],
    sales: {
      public: {
        startDateTime: "2022-12-01T08:51:00Z",
        startTBD: false,
        startTBA: false,
        endDateTime: "2023-08-05T19:00:00Z",
      },
    },
    dates: {
      start: {
        localDate: "2023-08-05",
        localTime: "21:00:00",
        dateTime: "2023-08-05T19:00:00Z",
        dateTBD: false,
        dateTBA: false,
        timeTBA: false,
        noSpecificTime: false,
      },
      timezone: "Europe/Rome",
      status: {
        code: "onsale",
      },
      spanMultipleDays: false,
    },
    classifications: [
      {
        primary: true,
        segment: {
          id: "KZFzniwnSyZfZ7v7nJ",
        },
        genre: {
          id: "KnvZfZ7vAeA",
        },
        subGenre: {
          id: "KZazBEonSMnZfZ7v6F1",
        },
        type: {
          id: "KZAyXgnZfZ7v7nI",
        },
        subType: {
          id: "KZFzBErXgnZfZ7v7lJ",
        },
        family: false,
      },
    ],
    _links: {
      self: {
        href: "/discovery/v2/events/ZK98xZKrZkv6eZup5QQKr?locale=it-it",
      },
      attractions: [
        {
          href: "/discovery/v2/attractions/K8vZ917GSz7?locale=it-it",
        },
      ],
      venues: [
        {
          href: "/discovery/v2/venues/ZK98xZKrZekkAZup5QQKr?locale=it-it",
        },
      ],
    },
    _embedded: {
      venues: [
        {
          name: "Circo Massimo",
          type: "venue",
          id: "ZK98xZKrZekkAZup5QQKr",
          test: false,
          locale: "it-it",
          city: {
            name: "Roma",
          },
          country: {
            name: "Italia",
            countryCode: "IT",
          },
          location: {
            longitude: "12.482945",
            latitude: "41.886133",
          },
          upcomingEvents: {
            _total: 0,
            _filtered: 0,
          },
          _links: {
            self: {
              href: "/discovery/v2/venues/ZK98xZKrZekkAZup5QQKr?locale=it-it",
            },
          },
        },
      ],
      attractions: [
        {
          name: "Imagine Dragons",
          type: "attraction",
          id: "K8vZ917GSz7",
          test: false,
          url: "https://www.ticketmaster.com/imagine-dragons-tickets/artist/1435919",
          locale: "it-it",
          externalLinks: {
            youtube: [
              {
                url: "https://www.youtube.com/channel/UCT9zcQNlyht7fRlcjmflRSA",
              },
            ],
            twitter: [
              {
                url: "https://twitter.com/Imaginedragons",
              },
            ],
            itunes: [
              {
                url: "https://music.apple.com/us/artist/imagine-dragons/358714030",
              },
            ],
            lastfm: [
              {
                url: "http://www.last.fm/music/Imagine+Dragons",
              },
            ],
            facebook: [
              {
                url: "https://www.facebook.com/ImagineDragons",
              },
            ],
            wiki: [
              {
                url: "https://en.wikipedia.org/wiki/Imagine_Dragons",
              },
            ],
            spotify: [
              {
                url: "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q",
              },
            ],
            instagram: [
              {
                url: "http://instagram.com/imaginedragons/",
              },
              {
                url: "http://instagram.com/imaginedragons",
              },
            ],
            musicbrainz: [
              {
                id: "012151a8-0f9a-44c9-997f-ebd68b5389f9",
              },
            ],
            homepage: [
              {
                url: "http://www.imaginedragonsmusic.com/",
              },
            ],
          },
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: false,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: false,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: false,
            },
          ],
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7nJ",
              },
              genre: {
                id: "KnvZfZ7vAeA",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7v6F1",
              },
              type: {
                id: "KZAyXgnZfZ7v7nI",
              },
              subType: {
                id: "KZFzBErXgnZfZ7v7lJ",
              },
              family: false,
            },
          ],
          upcomingEvents: {
            _total: 23,
            "mfx-de": 1,
            ticketmaster: 20,
            _filtered: 0,
            "mfx-pl": 2,
          },
          _links: {
            self: {
              href: "/discovery/v2/attractions/K8vZ917GSz7?locale=it-it",
            },
          },
        },
      ],
    },
  };

  function deleteSeconds(time) {
    let timeArray = time.split(":");
    let newTime = timeArray[0] + ":" + timeArray[1];
    return newTime;
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <MainLayout>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={event.images[5].url}
              alt={event.name}
              width={1920}
              height={550}
              layout="responsive"
            />
            <div className={styles.cover}>
              <div className={styles.overlay}></div>
              <h2 className={styles.title}>{event.name}</h2>
            </div>
          </div>
          {console.log(items)}
          <div className={styles.info}>
            <ul>
              <li>
                <FiCalendar />
                <p>
                  {event.dates.start.localDate.split("-").reverse().join("-")}
                </p>
              </li>
              <li>
                <FiClock />
                <p>{deleteSeconds(event.dates.start.localTime)}</p>
              </li>
              <li>
                <FiMapPin />
                <p>
                  {event._embedded.venues[0].name} -{" "}
                  {event._embedded.venues[0].city.name}
                </p>
              </li>
            </ul>
            <div className={styles.description}>
              <h3>Descrizione</h3>
              <p>
                {`Non perdere l'opportunità di assistere all'evento ${
                  event.name
                },
                in programma il ${event.dates.start.localDate
                  .split("-")
                  .reverse()
                  .join("-")} presso ${
                  event._embedded.venues[0].name
                } alle ${deleteSeconds(
                  event.dates.start.localTime
                )}. Preparati a vivere un'esperienza
                unica nel suo genere, con un artista di fama internazionale.
                Acquista subito i tuoi biglietti e non rimarrai deluso!`}
              </p>
            </div>
          </div>
        </MainLayout>
      </main>
    </>
  );
}
