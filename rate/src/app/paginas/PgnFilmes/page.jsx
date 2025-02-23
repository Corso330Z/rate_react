import React from "react";
import styles from "./filmes.module.css";
import LateralBar from "../../components/lateralbar/LateralBar";
import Header from "@/app/components/header/Header.jsx";

const Filmes = () => {
  return (
    <div className={styles.body}>
      <Header />

      <main>
        <section className={styles.blocos_gen}>
          <div className={styles.info_gen}>
            <div className={styles.generos}>
              <h1 className={styles.h1}>Filmes: </h1>
            </div>
            <div className={styles.card_blocos}>
              {[...Array(21)].map((_, index) => (
                <a key={index} href={`/paginas/ClassFilm`}>
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

export default Filmes;
