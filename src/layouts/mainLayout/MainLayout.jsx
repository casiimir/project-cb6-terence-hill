import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from "./mainLayout.module.scss";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
