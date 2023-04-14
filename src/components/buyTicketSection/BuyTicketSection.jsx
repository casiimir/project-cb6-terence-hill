import styles from "./index.module.scss";
import CtaButton from "../ctaButton";
import Image from "next/image";

const BuyTicketSection = () => {
  return (
    <div className={styles.BuyTicketSection}>
      <Image
        className={styles.image}
        src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        width={1000}
        height={300}
        alt="hero image"
        priority
      />
      <div className={styles.textSection}>
        <h3 className={styles.title}>Compra il tuo primo biglietto</h3>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          quisquam.
        </p>
        <CtaButton text={"SCOPRI EVENTI"} />
      </div>
    </div>
  );
};

export default BuyTicketSection;
