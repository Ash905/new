import "@/styles/globals.css";
import { CartProvider } from '@/context/CartContext';
import 'react-medium-image-zoom/dist/styles.css'; // Add this line for zoom styles

import { Analytics } from "@vercel/analytics/next"

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
