// src/pages/runners/floor-runners.js

import { UniversalCategoryPage } from "@/components/UniversalCategoryPage";
import { productData } from "@/lib/ProductData";

export default function FloorRunnersPage({ products }) {
  return (
    <UniversalCategoryPage 
      title="Floor Runners"
      initialProducts={products}
    />
  );
}

export async function getServerSideProps() {
  const products = productData.floorRunners || [];
  return {
    props: {
      products,
    },
  };
}