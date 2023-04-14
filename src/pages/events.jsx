import MainLayout from "@/layouts/mainLayout";
import styles from "@/styles/pages/Events.module.scss";
import eventsList from "@/mock/events";

import CardList from "@/components/cardList";

export default function Events() {
  return (
    <MainLayout>
      <div className={styles.Events}>
        <p>Scopri gli eventi</p>
        <CardList data={eventsList} />
      </div>
    </MainLayout>
  );
}
