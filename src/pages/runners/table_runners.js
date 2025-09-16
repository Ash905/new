// src/pages/runners/floor-runners.js

import { UniversalCategoryPage } from "@/components/UniversalCategoryPage";
import { productData } from "@/lib/ProductData";

export default function tableRunnersPage({ products }) {
  return (
    <UniversalCategoryPage 
      title="Table Runners"
      initialProducts={products}
    />
  );
}

export async function getServerSideProps() {
  const products = productData.tableRunners || [];
  return {
    props: {
      products,
    },
  };
}