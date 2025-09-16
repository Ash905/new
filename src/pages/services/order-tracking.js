import React, { useState } from "react";
import styles from "@/styles/OrderTracking.module.css";

export default function OrderTracking() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleTrackOrder = (e) => {
    e.preventDefault();
    // Placeholder logic for demo
    setStatus(`Order ID ${orderId} for ${email} is being processed. Estimated delivery: 3-5 days.`);
  };

  return (
    <div className={styles.page}>
      <div className={styles.overlay}></div>
      <main className={styles.main}>
        <h1 className={styles.title}>Track Your Order</h1>
        <p className={styles.subtitle}>
          Enter your order ID and email to check the status of your curtains delivery.
        </p>

        <form className={styles.form} onSubmit={handleTrackOrder}>
          <input
            type="text"
            placeholder="Order ID"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
          <button type="submit" className={styles.trackBtn}>
            Track Order
          </button>
        </form>

        {status && <p className={styles.status}>{status}</p>}
      </main>
    </div>
  );
}
