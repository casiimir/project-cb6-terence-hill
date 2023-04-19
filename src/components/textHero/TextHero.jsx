import styles from "./index.module.scss";
import CtaButton from "../ctaButton";
import Image from "next/image";

const TextHero = () => {
  return (
    <div className={styles.TextHero}>
      <Image
        className={styles.image}
        src="https://images.unsplash.com/photo-1565035010268-a3816f98589a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
        width={1000}
        height={300}
        alt="hero image"
        priority
      />
      
      <Image
      className={styles.theatreImage}
      src="https://images.unsplash.com/photo-1571299803548-831c31e293e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
      width={230}
      height={190}
      alt = "theatre image" 
      />
      
      <Image
      className={styles.sportImage}
      src="https://images.unsplash.com/photo-1528291954423-c0c71c12baeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80"
      width={150}
      height={150}
      alt = "sport image" 
      />     

            <Image
      className={styles.concertImage}
      src="https://images.unsplash.com/photo-1619229665876-f54b2276b7bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      width={150}
      height={150}
      alt = "sport image" 
      /> 

      <Image
      className={styles.orchestraImage}
      src="https://images.unsplash.com/photo-1551696785-927d4ac2d35b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      width={150}
      height={150}
      alt = "sport image" 
      /> 

      <Image
      className={styles.liveImage}
      src="https://images.unsplash.com/photo-1497911270199-1c552ee64aa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      width={230}
      height={190}
      alt = "sport image" 
      />   
      

      <div className={styles.textSection}>
      <h1 className={styles.desktopTitle}>
        Una miriade di <br /> eventi imperdibili
      </h1>
      <p className={styles.desktopText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br/>Odio dolores perspiciatis, pariatur blanditiis, quis fugiat similique provident <br/> nesciunt corrupti, deleniti quibusdam saepe assumenda iure incidunt fugit minima? <br /> Praesentium, explicabo quas.</p>
      </div>

    

      {/* mobile  */}
      <h1 className={styles.title}>
        Trova eventi imperdibili <br /> nella tua città
      </h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore atque
        quaerat adipisci officia amet dolorum corporis explicabo officiis, culpa
        recusandae!
      </p>
      <div className={styles.overlay}></div>
      <div className={styles.btn}>
        <CtaButton text={"COMPRA I BIGLIETTI"} />
      </div>
    </div>
  );
};

export default TextHero;
