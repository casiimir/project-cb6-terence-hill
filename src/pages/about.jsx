import MainLayout from "@/layouts/mainLayout";
import styles from "@/styles/pages/About.module.scss";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Scena1 from "@/scene/MM/Scena1";
import Scena2 from "@/scene/SR/Scena2";
import Scena3 from "@/scene/FP/Scena3";
import Scena4 from "@/scene/FF/Scena4";
import Scena5 from "@/scene/GT/Scena5";

export default function About() {
  return (
    <>
      <Head>
        <title>EventHub - About</title>
        <meta
          name="description"
          content="La tua destinazione per i migliori eventi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      <MainLayout>
        <div className={styles.About}>
          <h1 className={styles.titolo}>Chi siamo</h1>
          <div className={styles.aboutContainer}>
            <div className={styles.profile}>
              <div className={styles.profileImg}>
                <Scena1 />
              </div>

              <div className={styles.profileText}>
                <h1>Marilena Messina</h1>
                <p>Front-end developer</p>

                <div className={styles.socialIcons}>
                  <h3>
                    <Link
                      href="https://github.com/MariMessi"
                      aria-label="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className={styles.textIcon}>
                        <AiFillGithub />
                        <span>Github</span>
                      </p>
                      <i className="fa-brands fa-github"></i>
                    </Link>
                  </h3>
                  <h3>
                    <Link
                      href="https://www.linkedin.com/in/marilena-messina-1914b124a/"
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className={styles.textIcon}>
                        {" "}
                        <AiFillLinkedin />
                        <span>Linkedin</span>
                      </p>
                      <i className="linkedin"></i>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className={styles.profile}>
              <div className={styles.profileImg}>
                <Scena2 />
              </div>
              <div className={styles.profileText}>
                <h1>Stefania Rapisarda</h1>
                <p>Front-end developer</p>

                <div className={styles.socialIcons}>
                  <h3>
                    <Link
                      href="https://github.com/stefRapis"
                      aria-label="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className={styles.textIcon}>
                        <AiFillGithub />
                        <span>Github</span>
                      </p>
                      <i className="fa-brands fa-github"></i>
                    </Link>
                  </h3>
                  <h3>
                    <Link
                      href="https://www.linkedin.com/in/stefaniarapisarda/"
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className={styles.textIcon}>
                        {" "}
                        <AiFillLinkedin />
                        <span>Linkedin</span>
                      </p>
                      <i className="linkedin"></i>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className={styles.profile}>
              <div className={styles.profileImg}>
                <Scena3 />
              </div>

              <div className={styles.profileText}>
                <h1>Flavia Pinello</h1>
                <p>Front-end developer</p>

                <div className={styles.socialIcons}>
                  <h3>
                    <Link
                      href="https://github.com/FlaviaPinello"
                      aria-label="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className={styles.textIcon}>
                        <AiFillGithub />
                        <span>Github</span>
                      </p>
                      <i className="fa-brands fa-github"></i>
                    </Link>
                  </h3>
                  <h3>
                    <Link
                      href="https://www.linkedin.com/in/flavia-pinello-a456b697/"
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className={styles.textIcon}>
                        {" "}
                        <AiFillLinkedin />
                        <span>Linkedin</span>
                      </p>
                      <i className="linkedin"></i>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className={styles.profile}>
              <div className={styles.profileImg}>
                <Scena4 />
              </div>
              <div className={styles.profileText}>
                <h1>Fabio Farinella</h1>
                <p>Front-end developer</p>

                <div className={styles.socialIcons}>
                  <h3>
                    <Link
                      href="https://github.com/FabioFarinella96"
                      aria-label="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className={styles.textIcon}>
                        <AiFillGithub />
                        <span>Github</span>
                      </p>
                      <i className="fa-brands fa-github"></i>
                    </Link>
                  </h3>
                  <h3>
                    <Link
                      href="https://www.linkedin.com/in/fabio-farinella/"
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className={styles.textIcon}>
                        {" "}
                        <AiFillLinkedin />
                        <span>Linkedin</span>
                      </p>
                      <i className="linkedin"></i>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className={styles.profile}>
              <div className={styles.profileImg}>
                <Scena5 />
              </div>
              <div className={styles.profileText}>
                <h1>Greta Tomasoni</h1>
                <p>Front-end developer</p>

                <div className={styles.socialIcons}>
                  <h3>
                    <Link
                      href="https://github.com/gretaTomasoni"
                      aria-label="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className={styles.textIcon}>
                        <AiFillGithub />
                        <span>Github</span>
                      </p>
                      <i className="fa-brands fa-github"></i>
                    </Link>
                  </h3>
                  <h3>
                    <Link
                      href="https://www.linkedin.com/in/greta-tomasoni/"
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className={styles.textIcon}>
                        {" "}
                        <AiFillLinkedin />
                        <span>Linkedin</span>
                      </p>
                      <i className="linkedin"></i>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
