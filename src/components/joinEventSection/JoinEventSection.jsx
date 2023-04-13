import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";

const JoinEventSection = () => {
  return (
    <div className={styles.JoinEventSection}>
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
          src="https://images.unsplash.com/photo-1565035010268-a3816f98589a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
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
