// src/pages/cushions/sofa-cushions.js

import { UniversalCategoryPage } from "@/components/UniversalCategoryPage";
import { productData } from "@/lib/ProductData";

export default function LumbarrCushionsPage({ products }) {
  return (
    <UniversalCategoryPage 
      title="Lumbar Cushions"
      initialProducts={products}
    />
  );
}

export async function getServerSideProps() {
  const products = productData.LumbarrCushions || [];
  return {
    props: {
      products,
    },
  };
}