import { useState, useEffect } from "react";

import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";
import SecondaryButton from "../SecondaryButton";

const JoinEventSection = ({ item }) => {
  const [timeRemaining, setTimeRemaining] = useState("");
  const [daysRemaining, setDaysRemaining] = useState("");

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

        setDaysRemaining(days);
        setTimeRemaining(`${hours}:${minutes}:${seconds}`);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [item?.dates.start.localDate, item?.dates.start.localTime]);

  return (
    <div className={styles.JoinEventSection}>
      <div className={styles.info}>
        <h3 className={styles.title}>
          Spettacoli dal vivo, <br /> di qualità.
        </h3>
        <p className={styles.text}>
          {
            "Guarda cosa c'è in programma nella tua città. Non perdere l'opportunità di vivere esperienze indimenticabili e di immergerti in contesti culturali, artistici, sportivi e ricreativi di grande impatto!"
          }
        </p>
        <Link href="/events">
          <SecondaryButton text={"VEDI EVENTI"} />
        </Link>
      </div>

      <div className={styles.imageSection}>
        <Image
          className={styles.image}
          src={item?.images[5].url}
          width={1000}
          height={1000}
          alt="hero image"
          priority
        />
        <div className={styles.countDown}>
          <p className={styles.countDown__text}>Mancano solo:</p>
          {daysRemaining !== 0 && (
            <span className={styles.count}>
              {daysRemaining}
              <span className={styles.countDown__text}>giorni</span>
            </span>
          )}

          <span className={styles.count}>{timeRemaining}</span>
        </div>
      </div>
    </div>
  );
};

export default JoinEventSection;
