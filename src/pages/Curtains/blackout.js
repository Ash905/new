// src/pages/cushions/sofa-cushions.js

import { UniversalCategoryPage } from "@/components/UniversalCategoryPage";
import { productData } from "@/lib/ProductData";

export default function BlackoutCurtainsPage({ products }) {
  return (
    <UniversalCategoryPage 
      title="Blackout Curtains"
      initialProducts={products}
    />
  );
}

export async function getServerSideProps() {
  const products = productData.blackoutCurtains || [];
  return {
    props: {
      products,
    },
  };
}