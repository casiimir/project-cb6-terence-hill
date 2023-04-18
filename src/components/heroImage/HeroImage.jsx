import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

const HeroImage = () => {
  return (
    <div className={styles.HeroImage}>
      <div className={styles.music__card}>
        <Link href={"/events/concert"}>
          <Image
            className={styles.img}
            src="https://images.unsplash.com/photo-1505282722405-413748d3de7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"
            width={1000}
            height={300}
            alt="hero image"
            priority
          />
          <p className={styles.text}>Musica</p>
        </Link>
      </div>
      <div className={styles.theatre__card}>
        <Link href={"/events/opera"}>
          <Image
            className={styles.img}
            src="https://images.unsplash.com/photo-1524580477099-d6ef682e2a2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            width={1000}
            height={300}
            alt="hero image"
            priority
          />
          <p className={styles.text}>Arte & Teatro</p>
        </Link>
      </div>
      {/* <div className={styles.festival__card}>
        <Image
          className={styles.img}
          src="https://images.unsplash.com/photo-1603910234616-3b5f4a6be2b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          width={1000}
          height={300}
          alt="hero image"
          priority
        />
        <p className={styles.text}>Festival</p>
      </div> */}
      <div className={styles.festival__card}>
        <Link href={"/events/sport"}>
          <Image
            // onClick={() => handleCategoriaClick("sport")}
            className={styles.img}
            src="https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
            width={1000}
            height={300}
            alt="hero image"
            priority
          />
          <p className={styles.text}>Sport</p>
        </Link>
      </div>

      {/* mobile */}
      <Image
        className={styles.image}
        src="https://images.unsplash.com/photo-1505282722405-413748d3de7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"
        width={1000}
        height={300}
        alt="hero image"
        priority
      />
    </div>
  );
};

export default HeroImage;
