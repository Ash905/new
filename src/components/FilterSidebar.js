// src/compoment/FilterSidebar.js

import React from 'react';

// NOTE: A real price slider is complex. We are using price ranges for simplicity.
const priceRanges = [
  { id: 'p1', label: 'Under ₹1000', min: 0, max: 999 },
  { id: 'p2', label: '₹1000 to ₹3000', min: 1000, max: 3000 },
  { id: 'p3', label: 'Over ₹3000', min: 3001, max: Infinity },
];

export const FilterSidebar = ({ products, filters, setFilters }) => {
  // Dynamically get available brands and colors from the products
  const brands = [...new Set(products.map(p => p.brand))];
  const colors = [...new Set(products.map(p => p.color))];

  const handleBrandChange = (brand) => {
    const currentBrands = filters.brands || [];
    const newBrands = currentBrands.includes(brand)
      ? currentBrands.filter(b => b !== brand)
      : [...currentBrands, brand];
    setFilters({ ...filters, brands: newBrands });
  };
  
  const handleColorChange = (color) => {
    const currentColors = filters.colors || [];
    const newColors = currentColors.includes(color)
      ? currentColors.filter(c => c !== color)
      : [...currentColors, color];
    setFilters({ ...filters, colors: newColors });
  };
  
  const handlePriceChange = (rangeId) => {
    setFilters({ ...filters, priceRange: rangeId });
  };

  return (
    <aside className="w-full md:w-1/4 lg:w-1/5 pr-8">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      
      {/* Brand Filter */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Brand</h3>
        {brands.map(brand => (
          <div key={brand} className="flex items-center mb-1">
            <input 
              type="checkbox" 
              id={brand} 
              checked={filters.brands?.includes(brand) || false}
              onChange={() => handleBrandChange(brand)}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor={brand} className="ml-3 text-sm text-gray-600">{brand}</label>
          </div>
        ))}
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Price</h3>
        {priceRanges.map(range => (
          <div key={range.id} className="flex items-center mb-1">
            <input 
              type="radio" 
              id={range.id} 
              name="price"
              checked={filters.priceRange === range.id}
              onChange={() => handlePriceChange(range.id)}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor={range.id} className="ml-3 text-sm text-gray-600">{range.label}</label>
          </div>
        ))}
      </div>

      {/* Color Filter */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Color</h3>
        {colors.map(color => (
          <div key={color} className="flex items-center mb-1">
            <input 
              type="checkbox" 
              id={color} 
              checked={filters.colors?.includes(color) || false}
              onChange={() => handleColorChange(color)}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor={color} className="ml-3 text-sm text-gray-600">{color}</label>
          </div>
        ))}
      </div>
      
      <button 
        onClick={() => setFilters({})}
        className="w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
      >
        Clear All
      </button>
    </aside>
  );
};