import Link from "next/link";
import React from "react";
import styles from "./modal.module.scss";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.Modal}>
      <div onClick={onClose} className={styles.overlay}></div>
      <div className={styles.modalContent}>
        <h1 className={styles.modalH1}>Complimenti per il tuo acquisto!</h1>
        <hr className={styles.line} />
        {/* <p className={styles.modalP}>
          Siamo impazienti di incontrarti al tuo evento.
        </p> */}
        <Link href="/" className={styles.modalP}>
          Torna alla home
        </Link>
      </div>
    </div>
  );
};

export default Modal;
