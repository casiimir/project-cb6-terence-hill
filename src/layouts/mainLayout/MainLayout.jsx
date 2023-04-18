import { useState } from "react";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from "./mainLayout.module.scss";

const MainLayout = ({ children }) => {
  const [showHamburger, setShowHamburger] = useState(false);
  return (
    <div className={styles.MainLayout}>
      <Navbar
        showHamburger={showHamburger}
        setShowHamburger={setShowHamburger}
      />
      <div className={showHamburger && styles.children}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
