import styles from "./cardList.module.scss";
import Card from "../card/Card";

const CardList = ({ data }) => {
  return (
    <div className={styles.CardList}>
      {data.map((event) => (
        <Card data={event} key={event.id} />
      ))}
    </div>
  );
};

export default CardList;
