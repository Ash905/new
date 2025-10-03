import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useCart } from "@/context/CartContext"; // Import the useCart hook

// --- NEW STYLED COMPONENTS FOR CART BADGE ---

const CartIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CartCountBadge = styled.span`
  position: absolute;
  top: -8px;      // Position the badge above the icon
  right: -10px;   // Position the badge to the right of the icon
  background-color: #e97933; // Use a color that matches your theme
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 10px;
  font-weight: bold;
  line-height: 1;
  min-width: 18px;
  text-align: center;
  border: 1px solid #fff;
`;


// --- EXISTING STYLED COMPONENTS (No changes needed here) ---
const HeaderWrapper = styled.header`
  position: fixed; top: 0; width: 100%; z-index: 1000;
  background: #fdfdfd; border-bottom: 1px solid #f0f0f0;
  padding: 0 20px; height: 80px; display: flex;
  align-items: center; justify-content: center;
`;
// ... (rest of your existing styled-components are unchanged)
const Container = styled.div`
  width: 100%; max-width: 1400px; display: flex;
  align-items: center; justify-content: space-between;
`;

const LogoLink = styled(Link)`
  font-family: "Georgia", serif; font-size: 24px; font-weight: bold;
  color: #333; text-decoration: none; cursor: pointer;
  span { color: #8a6da0; font-weight: normal; }
`;

const Nav = styled.nav`
  display: flex; gap: 10px; align-items: center;
  @media (max-width: 992px) { display: none; }
`;

const NavLink = styled(Link)`
  cursor: pointer; font-size: 16px; font-weight: 500;
  color: #333; padding: 8px 16px; border-radius: 6px;
  text-decoration: none; transition: background-color 0.2s ease-in-out;
  &.active, &:hover { background-color: #f5f0ea; }
`;

const MegaMenu = styled.div`
  display: none; position: absolute; top: 100%; left: 0;
  width: auto; min-width: 600px; background-color: #ffffff;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 8px 8px; padding: 30px;
  opacity: 0; visibility: hidden; transform: translateY(10px);
  transition: all 0.3s ease;
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px;
`;

const SimpleDropdown = styled.div`
    display: none; position: absolute; top: 100%; left: 0;
    background-color: #ffffff; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 6px; padding: 10px 0; min-width: 200px; z-index: 1001;
    border: 1px solid #f0f0f0;
    opacity: 0; visibility: hidden; transform: translateY(10px);
    transition: all 0.3s ease;
    a {
        display: block; padding: 10px 20px; color: #333;
        text-decoration: none; font-size: 15px; font-weight: 500;
        &:hover { background-color: #f5f0ea; }
    }
`;

const NavItemContainer = styled.div`
  position: relative;
  &:hover > ${MegaMenu},
  &:hover > ${SimpleDropdown} {
    display: block; opacity: 1; visibility: visible; transform: translateY(0);
  }
  &:hover > ${MegaMenu} {
      display: grid;
  }
`;

const MenuColumn = styled.div`
  h3 {
    font-size: 14px; font-weight: 700; color: #333;
    margin-bottom: 15px; text-transform: uppercase;
    border-bottom: 2px solid #f0f0f0; padding-bottom: 8px;
  }
  ul { list-style: none; padding: 0; margin: 0; }
`;

const MenuLink = styled(Link)`
  display: flex; align-items: center; padding: 8px 0;
  font-size: 15px; color: #555; text-decoration: none;
  transition: color 0.2s ease;
  &:hover { color: #8a6da0; }
  .color-swatch {
    width: 14px; height: 14px; border-radius: 50%;
    margin-right: 10px; border: 1px solid #ddd;
  }
`;

const RightSection = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    svg { color: #333; cursor: pointer; height: 24px; width: 24px; }
    a { display: flex; align-items: center; text-decoration: none; }
    @media (max-width: 992px) { display: none; }
`;

const UserMenuContainer = styled.div`
    position: relative;
`;

const UserMenu = styled.div`
    position: absolute; top: 45px; right: -20px; background: #ffffff;
    border-radius: 4px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    min-width: 160px; color: #333; border: 1px solid #eee;
    .welcome { padding: 10px 15px; font-weight: bold; font-size: 14px; border-bottom: 1px solid #eee; }
    a {
        display: block; background: none; border: none; padding: 10px 15px;
        width: 100%; text-align: left; cursor: pointer; font-weight: 500;
        font-size: 14px; color: #333; text-decoration: none;
        &:hover { background: #f5f5f5; }
    }
`;

const MobileMenuButton = styled.button`
    display: none; font-size: 1.5rem; background: none; border: none; color: #333;
    @media (max-width: 992px) { display: block; }
`;


// --- HEADER COMPONENT ---
export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const userMenuRef = useRef(null);
    const { cartItems } = useCart(); // Get cart items from the context

    const navItems = [
      // Your navItems array remains the same
        {
          name: "H", href: "/",
          megaMenu: null

        },
        {
            name: "Curtains",
            href: "#",
            megaMenu: [
                {
                    heading: "Shop by Utility",
                    links: [
                        { name: "Room Darkening", href: "/Curtains/roomdark" }, { name: "Sheers", href: "/Curtains/sheers" },
                        { name: "Blackout", href: "/Curtains/blackout" }, { name: "Thermal Blackout", href: "/Curtains/thermalblackout" },
                    ]
                },
                {
                    heading: "Shop by Style",
                    links: [
                        { name: "Floral", href: "#" }, { name: "Indie", href: "#" },
                        { name: "Geometric", href: "#" }, { name: "Jacquard", href: "#" },
                    ]
                },
                {
                    heading: "Shop by Colours",
                    links: [
                        { name: "Light Colours", href: "#", color: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)" },
                        { name: "Dark Colours", href: "#", color: "linear-gradient(135deg, #232526 0%, #414345 100%)" },
                        { name: "Pastels", href: "#", color: "linear-gradient(135deg, #f9d423 0%, #ff6978 100%)" },
                        { name: "Red", href: "#", color: "#e74c3c" },
                    ]
                },
                {
                    heading: "Featured",
                    links: [
                        { name: "Bestsellers", href: "/Curtains/sheers" }, { name: "New Arrivals", href: "#" },
                        { name: "Designer's Pick", href: "#" },
                    ]
                },
            ]
        },
        { name: "Blinds", href: "#", 
          megaMenu: [
                {
                    heading: "Shop by Category",
                    links: [
                        { name: "Vertical", href: "/Blinds/Vertical" }, { name: "Venetian", href: "/Blinds/Venetian" },
                        { name: "Roller", href: "/Blinds/Roller" }, { name: "Roman", href: "/Blinds/Roman" },
                    ]
                },
                {
                    heading: "Shop by Colours",
                    links: [
                        { name: "Light Colours", href: "#", color: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)" },
                        { name: "Dark Colours", href: "#", color: "linear-gradient(135deg, #232526 0%, #414345 100%)" },
                        { name: "Pastels", href: "#", color: "linear-gradient(135deg, #f9d423 0%, #ff6978 100%)" },
                        { name: "Red", href: "#", color: "#e74c3c" },
                    ]
                },
                {
                    heading: "Featured",
                    links: [
                        { name: "Bestsellers", href: "#" }, { name: "New Arrivals", href: "#" },
                        { name: "Designer's Pick", href: "#" },
                    ]
                },
            ]
        },
        {
            name: "Cushions", href: "#",
            megaMenu: [
                {
                    heading: "Shop by Utility",
                    links: [
                        { name: "Bolster", href: "/Cushions/bolster" }, { name: "Decorative", href: "/Cushions/decorative" },
                        { name: "Lumbar", href: "/Cushions/Lumbarr" }, { name: "Sofa", href: "/Cushions/Sofa" },
                    ]
                },
                {
                    heading: "Shop by Design",
                    links: [
                        { name: "Square", href: "#" }, { name: "Rectangular", href: "#" },
                        { name: "Feather/Filled", href: "#" }, { name: "Jacquard", href: "#" },
                    ]
                },
                {
                    heading: "Shop by Colours",
                    links: [
                        { name: "Light Colours", href: "#", color: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)" },
                        { name: "Dark Colours", href: "#", color: "linear-gradient(135deg, #232526 0%, #414345 100%)" },
                        { name: "Pastels", href: "#", color: "linear-gradient(135deg, #f9d423 0%, #ff6978 100%)" },
                        { name: "Red", href: "#", color: "#e74c3c" },
                    ]
                },
                {
                    heading: "Featured",
                    links: [
                        { name: "Bestsellers", href: "#" }, { name: "New Arrivals", href: "#" },
                        { name: "Designer's Pick", href: "#" },
                    ]
                },
            ]
        },
        {
            name: "Runners",
            href: "#",
            megaMenu: [
                {
                    heading: "Shop by Utility",
                    links: [
                        { name: "Table Runners", href: "/runners/table_runners" }, { name: "Floor Runners", href: "/runners/floor_runners" },
                        { name: "Kitchen Runners", href: "/runners/Kitchen_runners" },
                    ]
                },
                {
                    heading: "Shop by Style",
                    links: [
                        { name: "Modern/Geometric", href: "#" }, { name: "Vintage", href: "#" },
                        { name: "Handwoven", href: "#" },
                    ]
                },
                {
                    heading: "Featured",
                    links: [
                        { name: "Bestsellers", href: "/runners/table_runners" }, { name: "New Arrivals", href: "#" },
                        { name: "Designer's Pick", href: "#" },
                    ]
                },
            ]
        },
        {
            name: "Services", href: "#",
            sublinks: [
                { name: "Order Tracking", href: "/services/order-tracking" },
                { name: "Help & FAQs", href: "/services/help-and-faqs" },
                { name: "Our Mission", href: "/services/mission" },
            ]
        },
        { name: "Inspire", href: "/inspire" },
        { name: "Blog", href: "/blog" },
    ];

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
                setUserMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <HeaderWrapper id="header">
            <Container>
                <LogoLink href="/">SPACES | <span>GoVenue</span></LogoLink>
                <Nav>
                    {navItems.map((item) => (
                        <NavItemContainer key={item.name}>
                            <NavLink href={item.href} onClick={(e) => (item.megaMenu || item.sublinks) && e.preventDefault()}>
                                {item.name}
                            </NavLink>
                            {item.megaMenu && (
                                <MegaMenu>
                                    {item.megaMenu.map(column => (
                                        <MenuColumn key={column.heading}>
                                            <h3>{column.heading}</h3>
                                            <ul>
                                                {column.links.map(link => (
                                                    <li key={link.name}>
                                                        <MenuLink href={link.href}>
                                                            {link.color && <span className="color-swatch" style={{ background: link.color }}></span>}
                                                            {link.name}
                                                        </MenuLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </MenuColumn>
                                    ))}
                                </MegaMenu>
                            )}
                            {item.sublinks && (
                                <SimpleDropdown>
                                    {item.sublinks.map((sublink) => (
                                        <Link key={sublink.name} href={sublink.href}>
                                            {sublink.name}
                                        </Link>
                                    ))}
                                </SimpleDropdown>
                            )}
                        </NavItemContainer>
                    ))}
                </Nav>
                <RightSection>
                    <CiSearch />
                    <UserMenuContainer ref={userMenuRef}>
                        <FaUser onClick={() => setUserMenuOpen((prev) => !prev)} />
                        {userMenuOpen && (
                            <UserMenu>
                                <div className="welcome">Welcome</div>
                                <Link href="/login">Login / Signup</Link>
                                <Link href="/services/order-tracking">Track Order</Link>
                                <Link href="#">Returns/Exchange</Link>
                                <Link href="/contactus">Contact Us</Link>
                            </UserMenu>
                        )}
                    </UserMenuContainer>
                    {/* --- UPDATED CART ICON --- */}
                    <Link href="/cart">
                      <CartIconContainer>
                        <FaShoppingCart />
                        {cartItems.length > 0 && <CartCountBadge>{cartItems.length}</CartCountBadge>}
                      </CartIconContainer>
                    </Link>
                </RightSection>
                <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </MobileMenuButton>
            </Container>
        </HeaderWrapper>
    );
};