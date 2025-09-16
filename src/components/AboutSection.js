import React from "react";
import styles from "@/styles/AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <h2>Our Team</h2>
      <p>Meet the passionate people behind our curtains web app.</p>

      <h2>Mission</h2>
      <p>
        Our mission is to provide high-quality, eco-friendly curtains that bring comfort and style to every home.
      </p>
    </section>
  );
}
