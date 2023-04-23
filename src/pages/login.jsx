import Head from "next/head";
import MainLayout from "@/layouts/mainLayout";
import styles from "@/styles/pages/login.module.scss";
import { AiFillGoogleCircle } from "react-icons/ai";
import { auth } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import Link from "next/link";

export default function Login() {
  const [user, setUser] = useAuthState(auth);

  const googleAuth = new GoogleAuthProvider();
  const login = async () => {
    const result = await signInWithPopup(auth, googleAuth);
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <Head>
        <title>EventHub - Eventi</title>
        <meta
          name="description"
          content="La tua destinazione per i migliori eventi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      <MainLayout>
        <div className={styles.Login}>
          {user ? (
            <div className={styles.loginContext}>
              <p className={styles.loginText}>
                {"Benvenuto, " + user.displayName}
              </p>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={styles.exploreAppBtn}>Esplora</button>
                </Link>
                <button
                  onClick={() => auth.signOut()}
                  className={styles.logOutBtn}
                >
                  Esci da EventHub
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.container}>
              <h1 className={styles.title}>
                Entra in <span className={styles.colorTitle}>EventHub</span>
              </h1>
              <button className={styles.btn} onClick={login}>
                <AiFillGoogleCircle className={styles.googleIcon} /> Accedi con
                Google
              </button>
            </div>
          )}
        </div>
      </MainLayout>
    </>
  );
}
