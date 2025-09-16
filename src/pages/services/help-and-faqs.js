import React from "react";
import styles from "@/styles/HelpFaqs.module.css";
import Link from "next/link";

export default function HelpFaqs() {
  const faqs = [
    {
      q: "How do I place an order?",
      a: "Browse our collection, add items to your cart, and proceed to checkout. Follow the instructions to complete your purchase.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit/debit cards, UPI, Net Banking, and Wallet payments for a seamless checkout experience.",
    },
    {
      q: "How can I track my order?",
      a: "Once your order is shipped, you’ll receive an email with tracking details. You can also check your order status under 'My Orders'.",
    },
    {
      q: "Can I return or exchange a product?",
      a: "Yes! You can return or exchange products within 7 days of delivery. Check our Return Policy for more details.",
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.overlay}></div>
      <main className={styles.main}>
        <h1 className={styles.title}>Help & FAQs</h1>
        <p className={styles.subtitle}>
          Find quick answers to the most commonly asked questions about our products, orders, and services.
        </p>

        <div className={styles.faqList}>
          {faqs.map((faq, idx) => (
            <details key={idx} className={styles.faqItem}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>

        <div className={styles.contactBox}>
          <h2>Still Need Help?</h2>
          <p>
            Our support team is here for you. Reach out, and we’ll respond within 24 hours.
          </p>
          <Link href="/contact-us" className={styles.contactBtn}>
            Contact Support
          </Link>
        </div>
      </main>
    </div>
  );
}
