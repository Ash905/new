import React from "react";
import styles from "@/styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.page}>
      <div className={styles.overlay}></div>
      <main className={styles.main}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>
          Get in touch with us via phone or WhatsApp. Our team is always ready to assist you.
        </p>

        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <div className={styles.icon}>📞</div>
            <h2>Phone</h2>
            <p>+91 98765 43210</p>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.icon}>💬</div>
            <h2>WhatsApp</h2>
            <p>+91 98765 43210</p>
          </div>
        </div>
      </main>
    </div>
  );
}
