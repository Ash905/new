import React from 'react';

export default function ShopByCategory() {
  const categories = [
    {
      name: 'Sheer Curtains',
      href: '/curtains/sheer',
      imgSrc: 'https://drapestory.in/cdn/shop/files/566A_1_jpg_765x.jpg?v=1713078931'
    },
    {
      name: 'BlackOut Curtains',
      href: '/curtains/blackout',
      imgSrc: 'https://cdn.ddecor.com/media/mageplaza/bannerslider/banner/image/s/a/sandscape.jpg'
    },
    {
      name: 'Room Darkening Curtains',
      href: '/curtains/room-darkening',
      imgSrc: 'https://cdn.ddecor.com/media/wysiwyg/bannerslider/desktop/4_RMC.jpg'
    },
    {
      name: 'Upholstery',
      href: '/upholstery',
      imgSrc: 'https://cdn.ddecor.com/media/mageplaza/bannerslider/banner/image/k/i/kilim_1920x1080-pix.jpg'
    },
    {
      name: 'Runners',
      href: '/runners',
      imgSrc: 'https://cdn.ddecor.com/media/mageplaza/bannerslider/banner/image/b/e/bedding-combo_1920x1080-pix.jpg'
    }
  ];

  const firstCategory = categories[0];
  const otherCategories = categories.slice(1);

  return (
    <div className="container my-8">
      <h2 className="text-center text-3xl font-bold mb-6 text-gray-800">Shop by Category</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
        
        {/* First Category: Updated with Flexbox for correct alignment */}
        <a href={firstCategory.href} className="group block md:row-span-2 flex flex-col">
          {/* This div now grows to fill available space, pushing the title to the bottom of the container */}
          <div className="overflow-hidden rounded-lg flex-1"> 
            <img 
              src={firstCategory.imgSrc} 
              alt={firstCategory.name} 
              className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300" 
            />
          </div>
          <h3 className="text-center font-bold text-lg mt-4 text-gray-700">{firstCategory.name}</h3>
        </a>

        {/* Other categories: Also updated with Flexbox for consistency */}
        {otherCategories.map((category) => (
          <a key={category.name} href={category.href} className="group block flex flex-col">
            <div className="overflow-hidden rounded-lg">
              <img 
                src={category.imgSrc} 
                alt={category.name} 
                className="w-full h-64 object-cover transition-transform group-hover:scale-110 duration-300" 
              />
            </div>
            <h3 className="text-center font-bold text-lg mt-4 text-gray-700">{category.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}  