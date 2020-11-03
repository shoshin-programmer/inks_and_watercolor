// External Dependencies
import Head from "next/head";
import React, { useState } from "react";
import ReactBnbGallery from "react-bnb-gallery";
import "react-bnb-gallery/dist/style.css";
// Internal Dependencies
import styles from "../styles/Index.module.css";
import Header from "../components/header/Header";
import FullLoader from "../components/loaders/FullLoader";
import Fade from "react-reveal/Fade";

const PHOTOS = [
  "gallery/1.jpeg",
  "gallery/2.jpeg",
  "gallery/3.jpeg",
  "gallery/4.jpeg",
  "gallery/5.jpeg",
  "gallery/6.jpeg"
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className={styles.preloadContainer}>
      <div className={styles.container}>
        <div className={styles.bgContainer}>
          <img src="/overlay.jpeg" className={styles.bgOverlay} />
          <div className={styles.bgContainer2}>
            <img src="/overlay_2.jpeg" className={styles.bgOverlay2} />
          </div>
        </div>
        <ReactBnbGallery
          show={isOpen}
          photos={PHOTOS}
          activePhotoIndex={photoIndex}
          onClose={() => setIsOpen(false)}
        />
        <Header />
        <div className={styles.mainContainer}>
          <Head>
            <title>Inks and Watercolor</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            <div className={styles.landing}>
              <Fade cascade top delay={4200} duration={600}>
                <p className={styles.landingTitle}>Inks & Watercolor</p>
              </Fade>
            </div>
            <Fade cascade delay={4700} duration={600}>
              <div className={styles.descriptionContainer}>
                <p className={styles.landingDescription}>
                  Inks and Watercolors is an incubator of modern art based in
                  Iloilo, Philippines. Stretching out of the comfort zone to
                  pursue painting and illustration in any medium.
                </p>
              </div>
            </Fade>
          </main>

          <div className={styles.aboutSection}>
            <div className={styles.aboutDescContainer}>
              <p className={styles.aboutDescription}>
                She specializes in botanical paintings and illustrations,
                monotone portraits and custom handwritten calligraphy works on
                paper and canvas. Looking beyond, she supports local artists and
                traditional art.
              </p>
            </div>
            <div className={styles.aboutDescContainer2}>
              <p className={styles.aboutDescription}>
                —— The artist believes that there is no greater gift than giving
                a piece of art. Art is her manifestation of a timeless gift.
              </p>
            </div>
          </div>

          <div className={styles.gallerySection} id="gallery">
            <p className={styles.galleryTitle}>GALLERY</p>
            <div className={styles.galleryContainer}>
              {PHOTOS.map((image, index) => (
                <div
                  className={styles.galleryObj}
                  onClick={() => {
                    setIsOpen(true);
                    setPhotoIndex(index);
                  }}
                >
                  <img src={image} className={styles.galleryImg} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.contactSection}>
            <a href="mailto:kara.mikhaila@gmail.com">
              <div className={styles.contact} id="contact">
                CONTACT ME
              </div>
            </a>
            <i>
              <p>Kara Diaz Serofia</p>
            </i>
          </div>

          <div className={styles.footer}>
            <a href="https://www.mark-atienza.com" target="_blank">
              <p>
                SITE designed and developed by : Arvin Mark Atienza &copy; 2020
              </p>
            </a>
          </div>
        </div>
      </div>
      <FullLoader />
    </div>
  );
}
