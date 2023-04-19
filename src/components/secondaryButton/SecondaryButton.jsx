import styles from "./index.module.scss";

const SecondaryButton = ({ text }) => {
  return <button className={styles.SecondaryButton}>{text}</button>;
};

export default SecondaryButton;
