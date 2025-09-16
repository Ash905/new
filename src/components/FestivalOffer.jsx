import React from 'react';

export default function FestivalPromotion() {
  return (
    <div 
      className="my-8 text-center text-white p-16 bg-cover bg-center" 
      style={{ 
        backgroundImage: "url('https://cdn.ddecor.com/media/mageplaza/bannerslider/banner/image/k/i/kilim_1920x1080-pix.jpg')" 
      }}
    >
      <h2 
        className="text-4xl font-bold" 
        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}
      >
        Diwali Sale!
      </h2>
      <p 
        className="text-xl mt-2" 
        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
      >
        Brighten up your home with deals up to 40% off!
      </p>
      <a 
        href="/shop" 
        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 mt-6 rounded-md transition-colors"
      >
        Shop Now
      </a>
    </div>
  );
}