// src/pages/cushions/sofa-cushions.js

import { UniversalCategoryPage } from "@/components/UniversalCategoryPage";
import { productData } from "@/lib/ProductData";

export default function sheersCuratainsPage({ products }) {
  return (
    <UniversalCategoryPage 
      title="Sheers Curtains"
      initialProducts={products}
    />
  );
}

export async function getServerSideProps() {
  const products = productData.sheersCuratains || [];
  return {
    props: {
      products,
    },
  };
}