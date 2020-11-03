// Dependencies
// Components
// Assets
import styles from "./loaders.module.css";

export default function FullLoader({ children }) {
  return (
    <div className={styles.container}>
      {children}
      <div className={styles.fullPageWrap}>
        <div className={styles.fullPage}>
          <div className={styles.boxWrap}>
            <div className={styles.box}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
