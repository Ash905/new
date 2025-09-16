// src/pages/cushions/sofa-cushions.js

import { UniversalCategoryPage } from "@/components/UniversalCategoryPage";
import { productData } from "@/lib/ProductData";

export default function roomdarkCurtainsPage({ products }) {
  return (
    <UniversalCategoryPage 
      title="Room Darkening Curtains"
      initialProducts={products}
    />
  );
}

export async function getServerSideProps() {
  const products = productData.roomdarkCurtains || [];
  return {
    props: {
      products,
    },
  };
}