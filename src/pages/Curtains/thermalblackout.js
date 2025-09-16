// src/pages/cushions/sofa-cushions.js

import { UniversalCategoryPage } from "@/components/UniversalCategoryPage";
import { productData } from "@/lib/ProductData";

export default function thermalblackoutCurtainsPage({ products }) {
  return (
    <UniversalCategoryPage 
      title="ThermalBlackout Curtains"
      initialProducts={products}
    />
  );
}

export async function getServerSideProps() {
  const products = productData.thermalblackoutCurtains || [];
  return {
    props: {
      products,
    },
  };
}