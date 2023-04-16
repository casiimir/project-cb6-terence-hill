import styles from "./cardList.module.scss";
import Card from "../card/Card";

import { useContext } from "react";
import { DataContext } from "@/store/DataContext";

const CardList = () => {
  const items = useContext(DataContext);

  return (
    <div className={styles.CardList}>
      {console.log(items)}

      {items._embedded?.events.map((event) => (
        <Card data={event} key={event.id} />
      ))}
    </div>
  );
};

export default CardList;
