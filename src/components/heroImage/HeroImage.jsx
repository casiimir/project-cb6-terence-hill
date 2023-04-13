import styles from "./index.module.scss";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className={styles.HeroImage}>
      <Image
        className={styles.image}
        src="https://images.unsplash.com/photo-1505282722405-413748d3de7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"
        width={1000}
        height={300}
        alt="hero image"
        priority
      />
    </div>
  );
};

export default HeroImage;
