// src/pages/cushions/sofa-cushions.js

import { UniversalCategoryPage } from "@/components/UniversalCategoryPage";
import { productData } from "@/lib/ProductData";

export default function BolsterCushionsPage({ products }) {
  return (
    <UniversalCategoryPage 
      title="Bolster Cushions"
      initialProducts={products}
    />
  );
}

export async function getServerSideProps() {
  const products = productData.bolsterCushions || [];
  return {
    props: {
      products,
    },
  };
}