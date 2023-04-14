import styles from "./index.module.scss";
import Image from "next/image";

const MeetArtistSection = () => {
  return (
    <div className={styles.MeetArtistSection}>
      <Image
        className={styles.image}
        src="https://images.unsplash.com/photo-1502710655568-ee441b74b0b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        width={150}
        height={200}
        alt="hero image"
        priority
      />
      <div className={styles.textContent}>
        <h3 className={styles.title}>Incontra i tuoi artisti preferiti.</h3>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          quis.
        </p>
      </div>
    </div>
  );
};

export default MeetArtistSection;
