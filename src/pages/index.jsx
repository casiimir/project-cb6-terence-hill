import Head from "next/head";
import styles from "@/styles/pages/Home.module.scss";

// main layout
import MainLayout from "@/layouts/mainLayout";

// home page components
import TextHero from "@/components/textHero";
import HeroImage from "@/components/heroImage";
import JoinEventSection from "@/components/joinEventSection";
import MeetArtistSection from "@/components/meetArtistSection";
import BuyTicketSection from "@/components/buyTicketSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.HomePage}>
        <MainLayout>
          <TextHero />
          <HeroImage />
          <JoinEventSection />
          <MeetArtistSection />
          <BuyTicketSection />
        </MainLayout>
      </main>
    </>
  );
}
