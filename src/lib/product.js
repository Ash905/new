import { productData } from './ProductData.js';

/**
 * Flattens all product arrays from productData into a single array.
 * This makes it much easier to search for a product across all categories.
 * @returns {Array} A single array containing all product objects.
 */
export function getAllProducts() {
  return Object.values(productData).flat();
}

/**
 * Finds a specific product by its unique ID.
 * @param {string | number} id - The ID of the product to find.
 * @returns {Object | null} The product object if found, otherwise null.
 */
export function getProductById(id) {
  if (!id) return null;
  const allProducts = getAllProducts();
  // Ensure we compare the ID as a number
  return allProducts.find(product => product.id === parseInt(id, 10));
}