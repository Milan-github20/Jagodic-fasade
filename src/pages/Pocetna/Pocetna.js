import React from "react";
import styles from "./Pocetna.module.css";

const Pocetna = () => {
  return (
    <div>
      <div className={styles.pocetna}>
        <h1>JAGODIĆ</h1>
        <h2>Fasade i završni radovi u građevinarstvu</h2>
      </div>

      <div className={styles.kvalitet}>
        <h2>
          Za sve usluge u građevinarstvu, fasade i završni radovi za vas je tu
          firma Jagodić! <br /> Provjeri, uvjeri se!
        </h2>
      </div>
      <div className={styles.a}>
        <a href="../Galerija/Galerija.js" className={styles.aHref}>
          NAŠ RAD
        </a>
      </div>

      <div className={styles.iskustvo}>
        <h1>JAGODIĆ FASADE</h1>

        <p>
          20 godina iskustva sa fasadama, molerajem, rigipsom i mašinskim
          malterisanjem
        </p>
      </div>

      <div className={styles.kartice}>
        <div className={styles.kartica1}>
          <img></img>
          <h2>Ponuda</h2>
          <p>
            U velikom izboru fasadnih sistema na našem tržištu, koji mogu veoma
            da se razlikuju kvalitetom i postojanosti, nije lako donijeti pravu
            odluku.
          </p>
        </div>

        <div className={styles.kartica2}>
          <img></img>
          <h2>Kontakt</h2>
          <p>
            U velikom izboru fasadnih sistema na našem tržištu, koji mogu veoma
            da se razlikuju kvalitetom i postojanosti, nije lako donijeti pravu
            odluku.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pocetna;
