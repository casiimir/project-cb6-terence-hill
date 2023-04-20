import { useState, useEffect } from "react";

import styles from "./hero.module.scss";
import Image from "next/image";

const Hero = () => {
  const images = [
    "https://dice-media.imgix.net/homepage/hero-1.jpg?auto=format,compress",
    "https://dice-media.imgix.net/homepage/hero-2.jpg?auto=format,compress",
    "https://dice-media.imgix.net/homepage/hero-3.jpg?auto=format,compress",
    "https://dice-media.imgix.net/homepage/hero-4.jpg?auto=format,compress",
    "https://dice-media.imgix.net/homepage/hero-5.jpg?auto=format,compress",
    "https://dice-media.imgix.net/homepage/hero-6.jpg?auto=format,compress",
    "https://dice-media.imgix.net/homepage/hero-7.jpg?auto=format,compress",
    "https://dice-media.imgix.net/homepage/hero-8.jpg?auto=format,compress",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLastImage, setIsLastImage] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentImageIndex < images.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      } else {
        setIsLastImage(true);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <div className={styles.Hero}>
      <Image
        className={styles.images}
        src={images[currentImageIndex]}
        alt={"hero_image"}
        width={1920}
        height={800}
        // layout="fill"
        // objectFit="cover"
      />
      <h1 className={styles.title}>
        La tua destinazione <br /> per i migliori eventi.
      </h1>
    </div>
  );
};

export default Hero;
