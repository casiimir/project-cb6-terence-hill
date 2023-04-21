import styles from "./footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.newsletter}>
        <div className={styles.news_testo}>
          <h4 className={styles.titolo}>Iscriviti alla Newsletter</h4>
          <p>
            Rimani aggiornato sulle ultime novitá e non perderti nessun evento.
          </p>
        </div>
        <div className={styles.news_input}>
          <input
            className={styles.input_field}
            type="text"
            placeholder="Inserisci la tua email"
          />
          <input className={styles.input_btn} type="submit" value="Iscriviti" />
        </div>
      </div>

      <div className={styles.upper}>
        <div className={styles.left__section}>
          <Image
            className={styles.logo}
            src="/img/eventhub_logo.png"
            width={150}
            height={70}
            alt="logo"
            priority
          />
          <p>La tua destinazione per i migliori eventi.</p>

          <p>qualcosaaaaaaaaaaa</p>
        </div>

        <div className={styles.all_links}>
          <div className={styles.titoli_footer}>
            <ul className={styles.link}>
              <li>
                <p className={styles.titoletto}>Assistenza Clienti</p>
              </li>
              <li>
                <a href="#">Condizioni di vendita </a>
              </li>
              <li>
                <a href="#">Diritto di recesso</a>
              </li>
              <li>
                <a href="#">Rivendita biglietti</a>
              </li>
              <li>
                <a href="#">Metodi di consegna</a>
              </li>
              <li>
                <a href="#">Metodi di pagamento</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          <div className={styles.titoli_footer}>
            <ul className={styles.link}>
              <li>
                <p className={styles.titoletto}>Guide EventHub</p>
              </li>
              <li>
                <a href="#">Festival Finder </a>
              </li>
              <li>
                <a href="#">Guida eventi sportivi</a>
              </li>
              <li>
                <a href="#">Guida teatro</a>
              </li>
              <li>
                <a href="#">PopEvents</a>
              </li>
            </ul>
          </div>

          <div className={styles.titoli_footer}>
            <ul className={styles.link}>
              <li>
                <p className={styles.titoletto}>Social</p>
              </li>
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
        </div>
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
