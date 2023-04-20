import Head from "next/head";
import styles from "@/styles/pages/Home.module.scss";

// main layout
import MainLayout from "@/layouts/mainLayout";

// home page components
import Hero from "@/components/hero";
// import TextHero from "@/components/textHero";
import HeroImage from "@/components/heroImage";
import JoinEventSection from "@/components/joinEventSection";
import AboutUs from "@/components/aboutUs";
// import BuyTicketSection from "@/components/buyTicketSection";

// dati fetch
import { useContext } from "react";
import { DataContext } from "@/store/DataContext";

import { Anton } from "next/font/google";
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const items = useContext(DataContext);

  return (
    <>
      <Head>
        <title>EventHub - Homepage</title>
        <meta
          name="description"
          content="La tua destinazione per i migliori eventi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      <main className={styles.HomePage}>
        <MainLayout>
          {/* <TextHero /> */}
          <Hero className={anton.className} />
          <JoinEventSection item={items.state.fetchedData[0]} />
          <AboutUs />
          <HeroImage />
          {/* <BuyTicketSection /> */}
        </MainLayout>
      </main>
    </>
  );
}
