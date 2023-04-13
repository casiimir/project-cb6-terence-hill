import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from "./mainLayout.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.MainLayout}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
