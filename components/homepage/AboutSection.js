import styles from "../../styles/Index.module.css";
import Fade from "react-reveal/Fade";

const AboutSection = () => {
  return (
    <div>
      <Fade cascade duration={500}>
        <div className={styles.aboutDescContainer}>
          <p className={styles.aboutDescription}>
            She specializes in botanical paintings and illustrations, monotone
            portraits and custom handwritten calligraphy works on paper and
            canvas. Looking beyond, she supports local artists and traditional
            art.
          </p>
        </div>
      </Fade>
      <Fade cascade duration={500} delay={300}>
        <div className={styles.aboutDescContainer2}>
          <p className={styles.aboutDescription}>
            —— The artist believes that there is no greater gift than giving a
            piece of art. Art is her manifestation of a timeless gift.
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default AboutSection;
