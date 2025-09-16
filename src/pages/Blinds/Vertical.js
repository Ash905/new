// src/pages/cushions/sofa-cushions.js

import { UniversalCategoryPage } from "@/components/UniversalCategoryPage";
import { productData } from "@/lib/ProductData";

export default function VenetianBlindsPage({ products }) {
  return (
    <UniversalCategoryPage 
      title="Vertical Blinds"
      initialProducts={products}
    />
  );
}

export async function getServerSideProps() {
  const products = productData.VerticalBlinds || [];
  return {
    props: {
      products,
    },
  };
}