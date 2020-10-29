import Head from "next/head";
import Header from "./header/header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.bgContainer}>
        <img src="/overlay.jpeg" className={styles.bgOverlay} />
      </div>
      <Header />
      <div className={styles.mainContainer}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.landing}>
            <p className={styles.landingTitle}>Inks & Watercolor</p>
          </div>
          <div className={styles.descriptionContainer}>
            <p className={styles.landingDescription}>
              Inks and Watercolors is an incubator of modern art based in
              Iloilo, Philippines. Stretching out of the comfort zone to pursue
              painting and illustration in any medium.
            </p>
          </div>
        </main>

        <div className={styles.aboutSection}>
          <div className={styles.aboutDescContainer}>
            <p className={styles.aboutDescription}>
              The artist believes that there is no greater gift than giving a
              piece of art. Art is her manifestation of a timeless gift.
            </p>
          </div>
        </div>

        <div className={styles.gallerySection}>GALLERY</div>

        <div className="contactSection">
          <button>CONTACT ME</button>
        </div>

        <footer className={styles.footer}>
          <p>John Doe</p>
          <p>janedoe@email.com</p>
          <p>Site by: Arvin Mark Atienza</p>
          <p>&copy; 2020</p>
        </footer>
      </div>
    </>
  );
}
