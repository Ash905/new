// src/pages/runners/floor-runners.js

import { UniversalCategoryPage } from "@/components/UniversalCategoryPage";
import { productData } from "@/lib/ProductData";

export default function kitchenRunnersPage({ products }) {
  return (
    <UniversalCategoryPage 
      title="Kitchen Runners"
      initialProducts={products}
    />
  );
}

export async function getServerSideProps() {
  const products = productData.kitchenRunners || [];
  return {
    props: {
      products,
    },
  };
}