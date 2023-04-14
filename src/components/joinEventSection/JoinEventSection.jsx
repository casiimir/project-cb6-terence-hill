import { useState, useEffect } from "react";

import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";

const JoinEventSection = ({ item }) => {
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const eventDateTime = new Date(
        `${item?.dates.start.localDate}T${item?.dates.start.localTime}`
      );
      const now = new Date();
      const difference = eventDateTime - now;

      if (difference <= 0) {
        clearInterval(intervalId);
        setTimeRemaining("Evento passato");
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeRemaining(`${days}:${hours}:${minutes}:${seconds}`);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [item?.dates.start.localDate, item?.dates.start.localTime]);

  return (
    <div className={styles.JoinEventSection}>
      {console.log(item)}
      <h3 className={styles.title}>Partecipa all{"'"}evento.</h3>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
        vitae.
      </p>
      <Link href="#">
        <p className={styles.ctaLink}>Scopri di più</p>
      </Link>
      <div className={styles.imageSection}>
        <Image
          className={styles.image}
          src={item?.images[6].url}
          width={1000}
          height={300}
          alt="hero image"
          priority
        />
        <div className={styles.countDown}>
          <p className={styles.countDown__text}>Mancano solo:</p>
          <p className={styles.count}>{timeRemaining}</p>
        </div>
      </div>
    </div>
  );
};

export default JoinEventSection;
