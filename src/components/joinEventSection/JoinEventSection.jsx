import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";

const JoinEventSection = ({ item }) => {
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
          <p className={styles.count}>12:03:40</p>
        </div>
      </div>
    </div>
  );
};

export default JoinEventSection;
