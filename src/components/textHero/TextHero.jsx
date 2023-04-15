import styles from "./index.module.scss";
import CtaButton from "../ctaButton";
import Image from "next/image";

const TextHero = () => {
  return (
    <div className={styles.TextHero}>
      <Image
        className={styles.image}
        src="https://images.unsplash.com/photo-1565035010268-a3816f98589a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
        width={1000}
        height={300}
        alt="hero image"
        priority
      />
      <h1 className={styles.desktopTitle}>
        Una miriade di <br /> eventi imperdibili
      </h1>

      {/* mobile  */}
      <h1 className={styles.title}>
        Trova eventi imperdibili <br /> nella tua città
      </h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore atque
        quaerat adipisci officia amet dolorum corporis explicabo officiis, culpa
        recusandae!
      </p>
      <div className={styles.overlay}></div>
      <div className={styles.btn}>
        <CtaButton text={"COMPRA I BIGLIETTI"} />
      </div>
    </div>
  );
};

export default TextHero;
