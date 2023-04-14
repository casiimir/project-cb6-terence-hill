import styles from "./index.module.scss";

const CtaButton = ({ text }) => {
  return (
    <button className={styles.CtaButton}>
      <div className={styles.dot}></div>
      {text}
    </button>
  );
};

export default CtaButton;
