// src/pages/cushions/sofa-cushions.js

import { UniversalCategoryPage } from "@/components/UniversalCategoryPage";
import { productData } from "@/lib/ProductData";

export default function DecorativeCushionsPage({ products }) {
  return (
    <UniversalCategoryPage 
      title="Decorative Cushions"
      initialProducts={products}
    />
  );
}

export async function getServerSideProps() {
  const products = productData.DecorativeCushions || [];
  return {
    props: {
      products,
    },
  };
}