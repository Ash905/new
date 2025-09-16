// src/lib/filterConfig.js

export const filterConfig = {
  runner: {
    priceRanges: [
      { id: 'p1', label: 'Under ₹3000', min: 0, max: 2999 },
      { id: 'p2', label: '₹3000 to ₹6000', min: 3000, max: 6000 },
      { id: 'p3', label: 'Over ₹6000', min: 6001, max: Infinity },
    ],
    filters: [
      { id: 'brand', name: 'Brand', type: 'checkbox' },
      { id: 'color', name: 'Color', type: 'checkbox' },
    ]
  },
  cushion: {
    priceRanges: [
        { id: 'p1', label: 'Under ₹1000', min: 0, max: 999 },
        { id: 'p2', label: '₹1000 to ₹2000', min: 1000, max: 2000 },
        { id: 'p3', label: 'Over ₹2000', min: 2001, max: Infinity },
    ],
    filters: [
      { id: 'brand', name: 'Brand', type: 'checkbox' },
      { id: 'color', name: 'Color', type: 'checkbox' },
      { id: 'shape', name: 'Shape', type: 'checkbox' },
      { id: 'material', name: 'Material', type: 'checkbox' },
    ]
  },
  curtains: {
    priceRanges: [
        { id: 'p1', label: 'Under ₹1000', min: 0, max: 999 },
        { id: 'p2', label: '₹1000 to ₹2000', min: 1000, max: 2000 },
        { id: 'p3', label: 'Over ₹2000', min: 2001, max: Infinity },
    ],
    filters: [
      { id: 'brand', name: 'Brand', type: 'checkbox' },
      { id: 'color', name: 'Color', type: 'checkbox' },
      { id: 'shape', name: 'Shape', type: 'checkbox' },
      { id: 'material', name: 'Material', type: 'checkbox' },
    ]
  },
  // You can add configurations for 'curtain', 'upholstery', etc. here
};