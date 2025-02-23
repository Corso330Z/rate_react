import React from "react";
import styles from "./generos_ADM.module.css";
import Header from "@/app/components/header/Header.jsx";
import LateralBar from '../../components/lateralBarAdm/index';

const GenerosADM = () => {
  return (
    <div className={styles.body}>
      <Header />

      <main>
        <section className={styles.blocos_gen}>
          <div className={styles.card_adc}>
            <a href="/paginas/AdcGenero">
              <button className={styles.btn_adc}>ADICIONAR +</button>
            </a>
          </div>
          <div className={styles.info_gen}>
            <div className={styles.generos}>
              <h1 className={styles.h1}>Ação:</h1>
            </div>
            <div className={styles.card_blocos}>
              {[...Array(9)].map((_, index) => (
                <a key={index} href={`/paginas/Generos`}>
                  <div className={styles.blocos}></div>
                </a>
              ))}
            </div>
            <div className={styles.generosSe}>
              <h1 className={styles.h1}>Drama: </h1>
            </div>
            <div className={styles.card_blocos}>
              {[...Array(9)].map((_, index) => (
                <a key={index} href={`/paginas/Generos`}>
                  <div className={styles.blocos}></div>
                </a>
              ))}
            </div>
            <div className={styles.generosSe}>
              <h1 className={styles.h1}>Para toda família: </h1>
            </div>
            <div className={styles.card_blocos}>
              {[...Array(9)].map((_, index) => (
                <a key={index} href={`/paginas/Generos`}>
                  <div className={styles.blocos}></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <LateralBar />
      </main>
    </div>
  );
};

export default GenerosADM;
