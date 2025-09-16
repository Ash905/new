import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ProductsCard } from "../category-card/product-card";
import React, { useState, useMemo } from "react";
import { productData } from "../../lib/ProductData";

// --- Mock Product Data ---
// In a real app, this data would come from an API.
const allProducts = {
  curtains: [
    { id: 1, name: "Floral Sheer Curtain", price: 4545, discount: 46, rating: 4.5, purchases: 320, image: "https://drapestory.in/cdn/shop/files/566A_1_jpg_765x.jpg?v=1713078931" },
    { id: 2, name: "Linen Blackout Curtain", price: 5200, discount: 30, rating: 4.8, purchases: 450, image: "https://cdn.ddecor.com/media/mageplaza/bannerslider/banner/image/s/a/sandscape.jpg" },
    // Add more curtain products...
  ],
  fitCheck: [
    { id: 3, name: "Modern Bedding Set", price: 8999, discount: 20, rating: 4.7, purchases: 180, image: "https://cdn.ddecor.com/media/mageplaza/bannerslider/banner/image/a/f/african-vibes_theme_1920x1080-pix.jpg" },
    { id: 4, name: "Bohemian Cushion Cover", price: 1500, discount: 15, rating: 4.6, purchases: 250, image: "https://cdn.ddecor.com/media/mageplaza/bannerslider/banner/image/k/i/kilim_1920x1080-pix.jpg" },
    // Add more fitCheck products...
  ],
};

const categories = [
  { id: 'curtains', name: 'Curtains' },
  { id: 'fitCheck', name: 'FitCheck' },
  // Add more categories here
];

export const AllCategoryList = () => {
  const [activeCategory, setActiveCategory] = useState('curtains');

  const displayedProducts = useMemo(() => {
    return allProducts[activeCategory] || [];
  }, [activeCategory]);

  return (
    <AllCaregoryWrapper>
      <div className="container all-category-list">
        <h2 className="categories-title">Popular Brand Design & Products</h2>

        {/* New Filter Tabs */}
        <div className="filter-tabs">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* The Product Card component will now need to accept a 'products' prop */}
        {/* NOTE: You will need to update the ProductsCard component to handle this prop */}
        <ProductsCard products={displayedProducts} hoverActive={"none"} changeHoverStyle={"true"} />

        <div className="holographic-card">
          <h2>View All</h2>
        </div>
      </div>
    </AllCaregoryWrapper>
  );
};

export const AllCaregoryWrapper = styled.section`
  padding: 40px 0px;

  .all-category-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    background-color: #fff;     
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
    padding: 40px 15px;
  }
  
  .categories-title {
    font-size: 40px;
    font-weight: 600;
    color: #424242;
    text-align: center;
  }

  // --- New Styles for Filter Tabs ---
  .filter-tabs {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
  }

  .filter-btn {
    padding: 10px 25px;
    font-size: 16px;
    font-weight: 600;
    color: #555;
    background-color: #f0f0f0;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #e0e0e0;
    }

    &.active {
      background-color: #b28b5f;
      color: #fff;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
  }

  .holographic-card {
    padding: 5px 95px;
    height: 40px;
    background: #d5a303;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    transition: all 0.3s ease;
    
    h2 {
      color: #fff;
      font-size: 20px;
    }

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 20px #75695bff;
    }
  }

  @media (max-width: 767px) {
    .categories-title {
      font-size: 28px;
    }
    .filter-btn {
      font-size: 14px;
      padding: 8px 20px;
    }
  }
`;