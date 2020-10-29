import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className="landing">
            <h2>Inks and Watercolor</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              pulvinar quam justo, sed euismod nibh condimentum non. Donec at
              ante ut turpis consectetur gravida ut eget odio. Aenean efficitur
              vulputate odio, ac elementum nisi condimentum at. Phasellus vitae
              justo vitae turpis mollis maximus sed ut ante.
            </p>
          </div>
        </main>
      </div>

      <div className="aboutSection">
        Matsutani has long combined two and three dimensinal works on canvas,
        paper and in installations.
      </div>

      <div className="gallerySection">
        GALLERY
      </div>

      <div className="contactSection">
        <button>CONTACT ME</button>
      </div>

      <footer className={styles.footer}>
        <p>John Doe</p>
        <p>janedoe@email.com</p>
        <p>Site by: Arvin Mark Atienza</p>
        <p>&copy; 2020</p>
      </footer>
    </>
  );
}
