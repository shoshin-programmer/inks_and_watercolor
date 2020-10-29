import Head from "next/head";
import Header from "./header/header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.bgContainer}>
        <img src="/overlay.jpeg" className={styles.bgOverlay} />
        <div className={styles.bgContainer2}>
          <img src="/overlay_2.jpeg" className={styles.bgOverlay2} />
        </div>
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
          <div className={styles.aboutDescContainer2}>
            <p className={styles.aboutDescription}>
              ——She specializes in botanical paintings and illustrations,
              monotone portraits and custom handwritten calligraphy works on
              paper and canvas. Looking beyond, she supports local artists and
              traditional art.
            </p>
          </div>
        </div>

        <div className={styles.gallerySection}>
          <p className={styles.galleryTitle}>GALLERY</p>
          <div className={styles.galleryContainer}>
            {[
              "overlay.jpeg",
              "overlay_2.jpeg",
              "overlay.jpeg",
              "overlay_2.jpeg",
              "overlay.jpeg",
              "overlay_2.jpeg"
            ].map(image => (
              <div className={styles.galleryObj}>
                <img src={image} className={styles.galleryImg} />
                <div className={styles.galleryImgText}>
                  <p>Cinque Terre</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.contactSection}>
          <a href="mailto:atienza.new@gmail.com">
            <div className={styles.contact}>CONTACT ME</div>
          </a>
          <i>
            <p>Kara Diaz Serofia</p>
          </i>
        </div>

        <footer className={styles.footer}>
          <p>SITE designed and developed by : Arvin Mark Atienza &copy; 2020</p>
        </footer>
      </div>
    </>
  );
}
