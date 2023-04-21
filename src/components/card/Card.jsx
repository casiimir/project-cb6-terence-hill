import styles from "./card.module.scss";
import Image from "next/image";

import Link from "next/link";

const Card = ({ data }) => {
  const id = data["id"];
  return (
    <Link href={`/event/${id}`}>
      <div className={styles.Card}>
        <div className={styles.main}>
          <h3 className={styles.title}>{data.name}</h3>

          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={
                data.images[5]?.width > 1500
                  ? data.images[5]?.url
                  : data.images[6]?.width > 1500
                  ? data.images[6]?.url
                  : data.images[1]?.width > 1500
                  ? data.images[1]?.url
                  : data.images[2]?.width > 1500
                  ? data.images[2]?.url
                  : data.images[3]?.width > 1500
                  ? data.images[3]?.url
                  : data.images[4]?.width > 1500
                  ? data.images[4]?.url
                  : data.images[7]?.width > 1500
                  ? data.images[7]?.url
                  : data.images[8]?.url
              }
              alt={data.name}
              width={1920}
              height={550}
            />
            <div className={styles.overlay}></div>
          </div>
        </div>
        <p className={styles.date}>{data.dates.start.localDate}</p>
      </div>
    </Link>
  );
};

export default Card;
