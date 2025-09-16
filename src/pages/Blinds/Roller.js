// src/pages/cushions/sofa-cushions.js

import { UniversalCategoryPage } from "@/components/UniversalCategoryPage";
import { productData } from "@/lib/ProductData";

export default function RomanBlindsPage({ products }) {
  return (
    <UniversalCategoryPage 
      title="Roller Blinds"
      initialProducts={products}
    />
  );
}

export async function getServerSideProps() {
  const products = productData.RollerBlinds || [];
  return {
    props: {
      products,
    },
  };
}