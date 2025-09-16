import React from "react";
import styles from "@/styles/Email.module.css";

export default function Email() {
  return (
    <div className={styles.page}>
      <div className={styles.overlay}></div>
      <main className={styles.main}>
        <h1 className={styles.title}>Email Us</h1>
        <p className={styles.subtitle}>
          Have questions, feedback, or need support? We’re here to help!
        </p>

        <div className={styles.contactCard}>
          <div className={styles.icon}>📧</div>
          <h2>Support Email</h2>
          <p>You can reach us at: <a href="mailto:support@govenue.in">support@govenue.in</a></p>
          <p>We usually respond within 24 hours.</p>
        </div>

        <div className={styles.extraInfo}>
          <h3>Tips for contacting us:</h3>
          <ul>
            <li>Include your order ID if applicable</li>
            <li>Provide a clear description of your issue</li>
            <li>Attach screenshots if it helps explain your concern</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
