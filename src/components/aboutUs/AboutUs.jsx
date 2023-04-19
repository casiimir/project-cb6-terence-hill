import styles from "./index.module.scss";
import Image from "next/image";
import CtaButton from "../ctaButton";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className={styles.AboutUs}>
      <div className={styles.image}>
        <Image
          src="https://dice-media.imgix.net/homepage/work-with-partners-2.jpg?auto=format,compress&dpr=1"
          alt="hero image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.textContent}>
        <span>ABOUT US</span>
        <h3 className={styles.title}>Molto più di semplici frontend.</h3>
        <p className={styles.text}>
          {
            "Incontra le persone dietro l'app, scopri i loro profili e guarda i loro progetti più interessanti."
          }
        </p>
        <Link href="/about">
          <CtaButton text={"SCOPRI DI PIÙ"} />
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
