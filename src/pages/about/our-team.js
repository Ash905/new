import React from "react";
import styles from "@/styles/About.module.css";

export default function OurTeam() {
  const features = [
    {
      title: "Attention to Detail",
      desc: "We pay obsessive attention to every detail, ensuring your curtains look perfect in every room.",
      icon: "🛠️",
    },
    {
      title: "Premium Natural Fabrics",
      desc: "We source the finest linens, cottons, and eco-friendly textiles for quality and durability.",
      icon: "🌿",
    },
    {
      title: "Durable & Functional",
      desc: "Our seams are double-stitched and finishes are designed to drape perfectly, year after year.",
      icon: "💪",
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.overlay}></div>
      <main className={styles.main}>
        <h1 className={styles.title}>Our Team</h1>
        <p className={styles.subtitle}>
          We believe curtains are the finishing touch that ties a room together. Our team ensures each curtain is made with care and precision.
        </p>

        <div className={styles.featuresGrid}>
          {features.map((item, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
