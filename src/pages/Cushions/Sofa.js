// src/pages/cushions/sofa-cushions.js

import { UniversalCategoryPage } from "@/components/UniversalCategoryPage";
import { productData } from "@/lib/ProductData";

export default function sofaCushionsPage({ products }) {
  return (
    <UniversalCategoryPage 
      title="Sofa Cushions"
      initialProducts={products}
    />
  );
}

export async function getServerSideProps() {
  const products = productData.sofaCushions || [];
  return {
    props: {
      products,
    },
  };
}