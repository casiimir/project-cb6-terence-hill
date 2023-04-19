import styles from "./index.module.scss";

const CtaButton = ({ text }) => {
  return <button className={styles.CtaButton}>{text}</button>;
};

export default CtaButton;
