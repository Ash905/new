// src/components/UniversalCategoryPage.js

import React, { useState, useMemo } from 'react';
import { Layout } from "@/components/layout";
import { ProductsCard } from "@/components/category-card/product-card";
import { filterConfig } from "@/lib/FilterConfig"; // Import our new config

// A new, dynamic filter sidebar component
const DynamicFilterSidebar = ({ productType, products, filters, setFilters }) => {
  const config = filterConfig[productType] || { filters: [], priceRanges: [] };

  const handleCheckboxChange = (filterId, value) => {
    const currentValues = filters[filterId] || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    setFilters({ ...filters, [filterId]: newValues });
  };
  
  const getOptionsFor = (filterId) => {
    return [...new Set(products.map(p => p[filterId]).filter(Boolean))];
  };

  return (
    <aside className="w-full md:w-1/4 lg:w-1/5 pr-8">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      
      {config.filters.map(filter => (
        <div key={filter.id} className="mb-6">
          <h3 className="font-semibold mb-2">{filter.name}</h3>
          {getOptionsFor(filter.id).map(option => (
            <div key={option} className="flex items-center mb-1">
              <input 
                type="checkbox" 
                id={`${filter.id}-${option}`}
                checked={filters[filter.id]?.includes(option) || false}
                onChange={() => handleCheckboxChange(filter.id, option)}
                className="h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor={`${filter.id}-${option}`} className="ml-3 text-sm text-gray-600">{option}</label>
            </div>
          ))}
        </div>
      ))}

      {/* Price Filter */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Price</h3>
        {config.priceRanges.map(range => (
          <div key={range.id} className="flex items-center mb-1">
            <input 
              type="radio" id={range.id} name="price"
              checked={filters.priceRange === range.id}
              onChange={() => setFilters({ ...filters, priceRange: range.id })}
              className="h-4 w-4 border-gray-300"
            />
            <label htmlFor={range.id} className="ml-3 text-sm text-gray-600">{range.label}</label>
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


export const UniversalCategoryPage = ({ title, initialProducts }) => {
  const [filters, setFilters] = useState({});
  const productType = initialProducts[0]?.type; // Determine type from the first product
  const config = filterConfig[productType] || { filters: [], priceRanges: [] };

  const filteredProducts = useMemo(() => {
    let products = [...initialProducts];
    
    // Apply dynamic checkbox filters
    config.filters.forEach(filter => {
      if (filters[filter.id]?.length > 0) {
        products = products.filter(p => filters[filter.id].includes(p[filter.id]));
      }
    });
    
    // Apply price filter
    if (filters.priceRange) {
      const range = config.priceRanges.find(r => r.id === filters.priceRange);
      if (range) {
        products = products.filter(p => p.price >= range.min && p.price <= range.max);
      }
    }
    return products;
  }, [filters, initialProducts, config]);

  if (!productType) {
    return <Layout><div className="container pt-32 text-center"><h1>Category not configured.</h1></div></Layout>;
  }

  return (
    <Layout>
      <div className="bg-white text-black">
        <div className="container mx-auto" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
          <h1 className="text-3xl font-bold mb-8">{title}</h1>
          <div className="flex flex-col md:flex-row">
            <DynamicFilterSidebar 
              productType={productType}
              products={initialProducts} 
              filters={filters} 
              setFilters={setFilters} 
            />
            <main className="w-full">
              <ProductsCard products={filteredProducts} displayAs="grid" />
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
};