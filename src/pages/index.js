import styled from "styled-components";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from 'next/link';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Layout } from "@/components/layout";
import { Autoplay, Pagination } from "swiper/modules";

// --- STYLED COMPONENTS --- (No changes here)
export const HomePageWrapper = styled.section`
  .hero-banner { width: 100%; height: 720px; position: relative; }
  .hero-section { position: absolute; left: 10%; top: 50%; transform: translateY(-50%); z-index: 10; }
  .tagline { font-size: 20px; font-weight: 500; color: black; }
  .hero-title { font-size: 95px; font-weight: 400; color: black; }
  .shop-btn { padding: 10px 40px; background-color: #e97933; color: #fff; text-decoration: none; display: inline-block; margin-top: 20px; }
  .swiper { width: 100%; height: 100%; }
`;

const Section = styled.section`
  padding: 80px 0;
  background-color: ${props => props.bg || '#ffffff'};
  .section-title { font-size: 2.8rem; font-weight: bold; text-align: center; margin-bottom: 15px; color: #2c3e50; }
  .section-subtitle { font-size: 1.2rem; text-align: center; color: #7f8c8d; margin-bottom: 50px; max-width: 700px; margin-left: auto; margin-right: auto; }
`;

const CurtainTypeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
`;

const CurtainTypeCard = styled(Link)`
  display: block; position: relative; overflow: hidden; border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  &:hover { transform: translateY(-5px); box-shadow: 0 12px 30px rgba(0,0,0,0.15); }
  .category-image { width: 100%; height: 400px; object-fit: cover; transition: transform 0.4s ease; }
  &:hover .category-image { transform: scale(1.05); }
  .category-name { position: absolute; bottom: 0; left: 0; right: 0; padding: 20px; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); color: white; font-size: 1.5rem; font-weight: bold; text-align: center; }
`;

const NewArrivalsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const ArrivalCard = styled(Link)`
  display: block; text-decoration: none; color: inherit; border-radius: 12px;
  overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  &:hover { transform: translateY(-8px); box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12); }
  .arrival-image-wrapper { position: relative; width: 100%; aspect-ratio: 1 / 1; }
  .arrival-info { padding: 25px; background: #fff; }
  .arrival-title { font-size: 1.5rem; font-weight: bold; margin-bottom: 8px; }
  .arrival-desc { font-size: 1rem; color: #7f8c8d; }
`;


// --- HOMEPAGE COMPONENT ---
// Destructure props directly for cleaner access
const HomePage = ({ headerData, banner, curtainTypes, newArrivals }) => {
  return (
    <HomePageWrapper>
      <Layout headerData={headerData}>
        {/* --- HERO BANNER --- */}
        <div className="hero-banner">
          <Swiper
            speed={600}
            parallax={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
          >
            {banner?.map((item, index) => (
              // BUG FIX: Added unique key prop
              <SwiperSlide key={`banner-slide-${index}`}>
                <Image src={item.url} alt={item.title || "Banner Image"} fill style={{ objectFit: 'cover' }} priority />
                <div className="container hero-section">
                  <div data-swiper-parallax="-200">
                    <h2 className="tagline">{item.tagline}</h2>
                    <h1 className="hero-title">{item.title}</h1>
                    <Link href="/products" className="shop-btn">Shop Now</Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* --- SHOP BY CURTAIN TYPE SECTION --- */}
        <Section>
          <div className="container">
            <h2 className="section-title">Shop by Curtain Type</h2>
            <p className="section-subtitle">
              Find the perfect style for any room. From light and airy sheers to room-darkening blackouts, we have a curtain for every need.
            </p>
            <CurtainTypeGrid>
              {curtainTypes.map(curtain => (
                <CurtainTypeCard href={curtain.href} key={curtain.name}>
                  <Image src={curtain.image} alt={curtain.name} width={400} height={400} className="category-image" />
                  <div className="category-name">{curtain.name}</div>
                </CurtainTypeCard>
              ))}
            </CurtainTypeGrid>
          </div>
        </Section>
        
        {/* --- NEW ARRIVALS SECTION --- */}
        <Section bg="#f8f9fa">
          <div className="container">
            <h2 className="section-title">New Arrivals</h2>
            <p className="section-subtitle">
              Explore our latest collection of curtains, designed to bring style and elegance to any room.
            </p>
            <NewArrivalsGrid>
              {newArrivals.map(item => (
                <ArrivalCard href={item.href} key={item.title}>
                  <div className="arrival-image-wrapper">
                    {/* BUG FIX: Correctly applied objectFit as a style property */}
                    <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                  </div>
                  <div className="arrival-info">
                    <h3 className="arrival-title">{item.title}</h3>
                    <p className="arrival-desc">{item.description}</p>
                  </div>
                </ArrivalCard>
              ))}
            </NewArrivalsGrid>
          </div>
        </Section>
        
      </Layout>
    </HomePageWrapper>
  );
};

export default HomePage;

// --- DATA FETCHING FOR NEXT.JS ---
export async function getStaticProps() {
  
  // In a real app, you would fetch all this data from a headless CMS or API.
  const headerData = {
    logo: '/logo.png',
    navLinks: [
      { text: 'Curtains', url: '/curtains' },
      { text: 'About Us', url: '/about' },
    ]
  };

  const bannerData = [
    { url: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg', tagline: 'Elegance in Every Fold', title: 'Discover Our New Collection' },
    { url: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg', tagline: 'Perfect Ambiance', title: 'Light Filtering Sheers' },
    { url: 'https://cdn.ddecor.com/media/mageplaza/bannerslider/banner/image/s/a/sandscape.jpg',tagline: "Royal in Every Fold",title: 'Velvet Room Darkening'},
    { url: 'https://cdn.ddecor.com/media/wysiwyg/bannerslider/desktop/4_RMC.jpg',taglie:"Illuminate Your Space with Elegance",title:'Illuminate Your Space with Elegance'}
  ];

  const curtainTypesData = [
    { name: "Sheer Curtains", image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg", href: "/Curtains/sheers" },
    { name: "Blackout Curtains", image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg", href: "/Curtains/blackout" },
    { name: "Velvet Curtains", image: "https://images.pexels.com/photos/7195431/pexels-photo-7195431.jpeg", href: "/Curtains/roomdark" },
    { name: "Linen Curtains", image: "https://images.pexels.com/photos/4112558/pexels-photo-4112558.jpeg", href: "/Curtains/thermalblackout" },
  ];
 
  const newArrivalsData = [
    { title: "Sheer Curtains", description: "Light, airy, and elegant", image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg", href: "/products/sheer" },
    { title: "Blackout Curtains", description: "For privacy and peaceful sleep", image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg", href: "/products/blackout" },
  ];

  return {
    props: {
      headerData,
      banner: bannerData,
      curtainTypes: curtainTypesData,
      newArrivals: newArrivalsData,
    },
  };
}