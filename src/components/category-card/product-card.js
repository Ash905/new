import React, { useState } from "react";
import { FaRegHeart, FaStar, FaHeart } from "react-icons/fa";
import Image from "next/image";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Link from "next/link";

// --- STYLED COMPONENTS ---
// ... (styled components remain unchanged)
export const ProductsCardWrapper = styled.section`
  width: 100%;
  position: relative;
`;

export const CardWrapper = styled.div`
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  text-align: left;
  transition: box-shadow 0.3s ease;
  position: relative;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 20px rgba(0,0,0,0.12);
  }

  /* ... (rest of the CardWrapper styles are unchanged) ... */
  .image-container {
    position: relative;
  }

  .card-image {
    width: 100%;
    height: auto;
    aspect-ratio: 3 / 4;
    object-fit: cover;
  }

  .wishlist-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    padding: 8px;
    cursor: pointer;
    font-size: 18px;
    color: #555;
    transition: color 0.2s;
    
    &:hover {
      color: #ff3f6c;
    }
  }

  .info-box {
    padding: 12px;
  }

  .rating-box {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    border: 1px solid #e0e0e0;
    border-radius: 20px;
    padding: 2px 8px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: rgba(255, 255, 255, 0.9);
  }

  .brand {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 4px;
    color: #282c3f;
  }

  .name {
    font-size: 14px;
    color: #535766;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .price-box {
    margin-top: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
  }

  .current-price {
    font-weight: 700;
    color: #282c3f;
  }

  .original-price {
    text-decoration: line-through;
    color: #7e818c;
  }

  .discount {
    color: #ff905a;
    font-weight: 700;
  }
`;
// --- REACT COMPONENTS ---

export const ProductsCard = ({ products, displayAs = 'slider', hoverActive, changeHoverStyle }) => {
  if (!products || products.length === 0) {
    return <p>No products found.</p>;
  }

  if (displayAs === 'grid') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <Card product={product} />
          </Link>
        ))}
      </div>
    );
  }

  // Default to slider
  return (
    <ProductsCardWrapper>
        <Swiper slidesPerView={4} spaceBetween={20} navigation={true} modules={[Navigation]} >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Link href={`/product/${product.id}`}>
                <Card product={product} hoverActive={hoverActive} changeHoverStyle={changeHoverStyle} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
    </ProductsCardWrapper>
  );
};

export const Card = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  if (!product) return null;

  const { brand, name, price, discount, rating, purchases, image } = product;

  return (
    <CardWrapper>
      <div className="image-container">
        <Image
          src={image}
          className="card-image"
          width={400}
          height={533}
          alt={name}
        />
        <div className="wishlist-icon" onClick={(e) => { e.preventDefault(); setIsWishlisted(!isWishlisted); }}>
          {isWishlisted ? <FaHeart style={{ color: '#ff3f6c' }} /> : <FaRegHeart />}
        </div>
        {rating && 
          <div className="rating-box">
            {rating} <FaStar size={12} color="#f5a623" style={{ marginLeft: '4px' }} />
          </div>
        }
      </div>
      <div className="info-box">
        <h3 className="brand">{brand}</h3>
        <p className="name">{name}</p>
        <div className="price-box">
          <span className="current-price">₹{Number(price).toFixed(2)}</span>
          {discount && <span className="original-price">₹{((price / (1 - discount / 100))).toFixed(2)}</span>}
          {discount && <span className="discount">({discount}% OFF)</span>}
        </div>
      </div>
    </CardWrapper>
  );
};