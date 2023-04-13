import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.upper}>
        <div>
          <h3 className={styles.logo}>LOGO</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
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
