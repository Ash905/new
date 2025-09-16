import React from "react";
import styles from "@/styles/About.module.css";

export default function Mission() {
  return (
    <div className={styles.page}>
      <div className={styles.overlay}></div>
      <main className={styles.main}>
        <h1 className={styles.title}>Our Mission</h1>
        <p className={styles.subtitle}>
          We aim to provide premium, eco-friendly curtains that add comfort and style to your home.
        </p>

        <div className={styles.missionContent}>
          <p>
            At our company, quality meets design. From natural fabrics to modern textiles, every curtain is made
            with care and attention to detail. Our mission is to make homes more beautiful and functional.
          </p>
          <p>
            We believe in sustainability and functionality. Our fabrics are eco-friendly, durable, and easy to maintain,
            ensuring your curtains last longer while enhancing your interior.
          </p>
        </div>
      </main>
    </div>
  );
}
