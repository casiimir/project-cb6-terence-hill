import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

const HeroImage = () => {
  return (
    <div className={styles.HeroImage}>
      <div className={styles.info}>
        <h3>Dentro EventHub</h3>
        <p>
          {
            "Esplora le diverse categorie disponibili e a naviga tra le opzioni a disposizione. Una volta individuati gli eventi che più ti interessano, potrai procedere all'acquisto dei biglietti in modo rapido e semplice."
          }
        </p>
      </div>
      <div className={styles.cardList}>
        <Link href={"/events/concert"} className={styles.image}>
          <Image
            className={styles.img}
            src="https://images.unsplash.com/photo-1468392788711-903a924761a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80"
            alt="hero image"
            width={600}
            height={600}
            // layout="fill"
            // objectFit="cover"
          />
          <p className={styles.text}>Concerti</p>
        </Link>

        <Link href={"/events/opera"} className={styles.image}>
          <Image
            className={styles.img}
            src="https://images.unsplash.com/photo-1526568587-d726afa637de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1803&q=80"
            alt="hero image"
            width={600}
            height={600}
            // layout="fill"
            // objectFit="cover"
          />
          <p className={styles.text}>Opera</p>
        </Link>
        <Link href={"/events/sport"} className={styles.image}>
          <Image
            className={styles.img}
            src="https://images.unsplash.com/photo-1544367946-af49aa3a7b86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="hero image"
            width={600}
            height={600}
            // layout="fill"
            // objectFit="cover"
          />
          <p className={styles.text}>Sport</p>
        </Link>
      </div>
    </div>
  );
};

export default HeroImage;
