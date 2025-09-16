import React from 'react';
import { Layout } from '@/components/layout';
import { FaStar, FaShoppingBag } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';
import { productData } from '@/lib/ProductData';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom'; // <<< THIS IS THE CORRECT DEFAULT IMPORT

// --- Helper Functions ---
function getAllProducts() {
  return Object.values(productData).flat();
}

function getProductById(id) {
  if (!id) return null;
  const allProducts = getAllProducts();
  return allProducts.find(product => product.id === parseInt(id, 10));
}

// --- Your Page Component ---
export default function ProductDetailPage({ product }) {
  const { addToCart } = useCart();

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto text-center py-40">
          <h1 className="text-3xl font-bold">404 | Product Not Found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto my-12 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="w-full">
            <Zoom>
              <Image 
                src={product.image} 
                alt={product.name} 
                width={600} 
                height={800} 
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </Zoom>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-500 mb-2">{product.brand}</h2>
            <h1 className="text-4xl font-light text-gray-800 mb-4">{product.name}</h1>
            
            {product.rating && (
              <div className="flex items-center mb-6">
                <span className="flex items-center border px-3 py-1 rounded-full">
                  {product.rating} <FaStar className="ml-1 text-yellow-500" />
                </span>
                <span className="ml-4 text-gray-600">{product.purchases}+ purchases</span>
              </div>
            )}

            <div className="mb-6 border-b pb-6">
              <span className="text-4xl font-bold text-gray-900">₹{product.price}</span>
              {product.discount && (
                  <>
                    <span className="text-xl text-gray-500 line-through ml-4">
                        ₹{((product.price / (1 - product.discount / 100))).toFixed(0)}
                    </span>
                    <span className="text-xl text-orange-500 ml-2">
                        ({product.discount}% OFF)
                    </span>
                  </>
              )}
            </div>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Experience the perfect blend of style and quality with this piece from <strong>{product.brand}</strong>. Crafted from premium <strong>{product.material}</strong>, this {product.type} is available in a stunning <strong>{product.color}</strong> color that will elevate any space.
            </p>

            <div className="flex gap-4">
              <button 
                onClick={() => addToCart(product)}
                className="w-full bg-pink-600 text-white font-bold py-4 rounded-lg hover:bg-pink-700 transition-colors flex items-center justify-center gap-2"
              >
                <FaShoppingBag /> ADD TO BAG
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const product = getProductById(id);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}