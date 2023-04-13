import styles from "./index.module.scss";
import CtaButton from "../ctaButton";

const TextHero = () => {
  return (
    <div className={styles.TextHero}>
      <h1 className={styles.title}>
        Trova eventi imperdibili <br /> nella tua città
      </h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore atque
        quaerat adipisci officia amet dolorum corporis explicabo officiis, culpa
        recusandae!
      </p>
      <CtaButton text={"COMPRA I BIGLIETTI"} />
    </div>
  );
};

export default TextHero;
