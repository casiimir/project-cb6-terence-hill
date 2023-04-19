import styles from "./cardList.module.scss";
import Card from "../card/Card";

const CardList = ({ data, category }) => {
  return (
    <div className={styles.CardList}>
      {/* <p className={styles.category}>{category}</p> */}
      {data.map((event) => (
        <Card data={event} key={event.id} />
      ))}
    </div>
  );
};

export default CardList;
