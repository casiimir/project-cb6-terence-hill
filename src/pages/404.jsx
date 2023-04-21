import Link from "next/link";
import styles from "@/styles/pages/P404.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3500);
  }, []);
  return (
    <div className="not-found">
      <h1 className={styles.P404}>Oooops...</h1>
      <h2 className={styles.P404}>That page connot be found.</h2>
      <Link href="/">
        <p className={styles.P404}>Go back to the Homepage</p>
      </Link>
    </div>
  );
};
export default NotFound;
