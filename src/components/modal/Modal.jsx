import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./modal.module.scss";

const Modal = ({ isOpen, onClose, modalText }) => {
  if (!isOpen) return null;
  const router = useRouter();

  return (
    <div className={styles.Modal}>
      <div onClick={onClose} className={styles.overlay}></div>
      <div className={styles.modalContent}>
        <h1 className={styles.modalH1}>{ modalText }</h1>
        <hr className={styles.line} />
        {/* <p className={styles.modalP}>
          Siamo impazienti di incontrarti al tuo evento.
        </p> */}

        <div className={styles.modalLink}>
        <Link href="/" className={styles.modalP}>
          Torna alla home
        </Link>
        <Link href="#" onClick={() => router.back()} className={styles.modalP}>
          Torna alla pagina precedente
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Modal;
