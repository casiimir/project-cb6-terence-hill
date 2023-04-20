import styles from "./footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.upper}>
        <div className={styles.left__section}>
          <Image
            className={styles.logo}
            src="/img/eventhub_logo.png"
            width={100}
            height={100}
            alt="logo"
            priority
          />
          <p>La tua destinazione per i migliori eventi.</p>
        </div>
        <ul className={styles.link}>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Youtube</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
        </ul>
      </div>
      <hr className={styles.line} />
      <div className={styles.down}>
        <p>Privacy Policy</p>
        <p>EventHub 2023</p>
      </div>
    </div>
  );
};

export default Footer;
