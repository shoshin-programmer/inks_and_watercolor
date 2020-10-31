// Dependencies
import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
// Assets
import styles from "./header.module.css";

export default function Header() {
  const [visible, setVisibility] = React.useState(true);
  const [menu, setMenu] = React.useState(false);
  const [prevScrollpos, setPrevScrollpos] = React.useState(
    typeof window !== "undefined" ? window.pageYOffset : ""
  );

  const handleScroll = () => {
    const prevScrollPosition = prevScrollpos;

    const currentScrollPos = window.pageYOffset;
    const visible = (prevScrollPosition - 2) >= currentScrollPos;

    setPrevScrollpos(currentScrollPos);
    setVisibility(visible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className={styles.headerWrapper}>
      <div
        className={`${visible ? styles.header : styles.scrolled}
        ${menu ? styles.headerFullView : styles.header}
        `}
      >
        <Fade cascade top duration={300}>
          <img src="/logo.png" className={styles.logo} />
          <ul className={styles.list}>
            <div className={styles.burger} onClick={() => setMenu(!menu)}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <a
              href="https://www.instagram.com/karamikhaila.ds/"
              target="_blank"
              onClick={() => setMenu(!menu)}
            >
              <li className={styles.listItem}>instagram.</li>
            </a>
            <a href="#gallery" onClick={() => setMenu(!menu)}>
              <li className={styles.listItem}>featured.</li>
            </a>
            <a href="#contact" onClick={() => setMenu(!menu)}>
              <li className={styles.listItem}>contact.</li>
            </a>
          </ul>
        </Fade>
      </div>
    </div>
  );
}
