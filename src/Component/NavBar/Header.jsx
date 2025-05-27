import React, { useEffect, useState } from 'react';
import "../NavBar/Header.css";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { ImUser } from "react-icons/im";
import { Avatar, Badge, Space, Popover } from 'antd';
import Logo from "../../Images/WEDDINGZ ADDA LOGO.png";
import { Link, useLocation } from 'react-router-dom';
import AddtoCart from '../../Pages/AddtoCart';
import { IoMdSearch } from "react-icons/io";
import { setUserToken } from '../../features/authSlice';
import { LuMenu } from "react-icons/lu";
import { getProfile, getToken } from "../../services/localStorageServices";
import { useDispatch, useSelector } from "react-redux";
import { Drawer } from 'antd';
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { useCartContext } from '../../context/addToCart';
import { MdOutlineRateReview } from "react-icons/md";
import { NavDropdown } from 'react-bootstrap';
const Header = ({ someProp }) => {
    const location = useLocation();
    const [isSticky, setIsSticky] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { cartValue, setCartCount, setCartValue } = useCartContext();
    const { access_token } = getToken();
    const dispatch = useDispatch();

    const { token } = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(setUserToken({ token: access_token }));
    }, [access_token, dispatch]);

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClass = someProp ? 'black-navbar' : 'transparent-navbar';

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const [placement, setPlacement] = useState('left');

    const handleMenuClick = () => {
        setOpen(false);
    };

    return (
        <>
            <section className={`Header-section-main-con ${isSticky ? 'sticky' : ''} ${navbarClass}`}>
                {/* <div className='navbar-upper-con'>
                <h2>Work In Progress, Don’t Order Now</h2>
            </div> */}
                <div className='Header-Section-con'>
                    <div className='header-first-row'>
                        <div className='row'>
                            <div className='col-4 d-flex justify-content-start align-items-center'>
                                <div className='Header-social-media-main-con'>
                                    <div className='Header-social-media-con'>
                                        <a href='https://www.instagram.com/1fiveluxury?igsh=b2U4NmJlOHo4MXE2&utm_source=qr' target='blank'><FaInstagram /></a>
                                        <a href='https://www.facebook.com/people/1FiveLuxury/61573584849714/?mibextid=wwXIfr&rdid=V1JCC7ErJAIG6JCi&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Eq18XeuAx%2F%3Fmibextid%3DwwXIfr' target='blank'><FaFacebookSquare /></a>
                                        <a href='https://x.com/1fiveluxury?s=21&t=abNZb9BXQdbo-Hy7hi12Xg' target='blank'><FaXTwitter /></a>
                                        <a href='https://www.youtube.com/@1fiveluxury' target='blank'><FaYoutube /></a>
                                        <a href="mailto: 1FiveLuxury@gmail.com" target='blank'><IoMailOutline /></a>
                                        {/* <a href="https://wa.me/+919892331133?text=" target='blank'><FaWhatsapp /></a>
                                    <a href="tel:+919892331133" target='blank'><IoIosCall /></a> */}
                                    </div>
                                    <div className='header-responsive-search-and-menu-btn-con'>
                                        <div className='header-responsive-search-and-menu-btn'>
                                            <div className='header-responsive-menu-btn' onClick={showDrawer}>
                                                <LuMenu />
                                            </div>
                                            <div className='header-responsive-search-btn' onClick={toggleSearch}>
                                                <IoMdSearch />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 d-flex justify-content-center align-items-center'>
                                <div className='Header-Logo-Main-Con'>
                                    <Link to="/">
                                        <div className='Header-Logo-Con'>
                                            <img src={Logo} alt='Logo' />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-4 d-flex justify-content-end align-items-center'>
                                <div className='Header-Icons-Main-con'>
                                    <div className='Header-Icons-con'>
                                        <div className='Header-Profile-Icons-Con'>
                                            <Link to={token ? "/order" : "/account/sign-in"}>
                                                <button title={token ? "order" : "/account/sign-in"}>
                                                    <ImUser />
                                                </button>
                                            </Link>
                                        </div>
                                        <div className='Header-Profile-Icons-Con-search' onClick={toggleSearch}>
                                            <IoMdSearch />
                                        </div>
                                        {/* <div className='Header-Profile-Icons-Con'
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasRight"
                                        aria-controls="offcanvasRight">
                                        <Badge size="small" count={cartValue.length}>
                                            <IoCart />
                                        </Badge>
                                    </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='header-second-row'>
                        <div className='header-second-row-main-con'>
                            <div className='main-menu-main-con'>
                                <div className='main-menu-con'>
                                    <Link to="/">Home</Link>
                                    <Link to="/women">Venues</Link>
                                    <Link to="/vengor-page">Vendors</Link>
                                    <NavDropdown title="Explore More" id="collapsible-nav-dropdown">
                                        <NavDropdown.Item href="about-page"><Link to="/about-page">About Us</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="faq">
                                            <Link to="/faq">Faq's</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="blog"><Link to="/blog">Blogs</Link></NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Support & Help
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    {/* <Link to="/About Us">About Us</Link> */}
                                    {/* <Link to="/women">Store</Link> */}
                                    {/* <Link to="/about">about us</Link>
                                <Link to="/contact">contact us</Link> */}
                                </div>
                            </div>
                            <div className='header-download-app-and-other'>
                                <div className='header-download-app'>
                                    <MdOutlineRateReview />
                                    <h3>Write A Review</h3>
                                </div>
                                <div className='header-download-app'>
                                    <MdOutlineRateReview />
                                    <h3>Download App</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='menu-side-bar-con'>
                <Drawer onClose={onClose} open={open} placement={placement}>
                    <div className='menu-side-bar-menu-con'>
                        <div className='menu-side-bar-menu' onClick={handleMenuClick}>
                            <Link to="/">Home</Link>
                        </div>
                        <div className='menu-side-bar-menu' onClick={handleMenuClick}>
                            <Link to="/women">Women</Link>
                        </div>
                        <div
                            className='menu-side-bar-menu' onClick={handleMenuClick}>
                            <Link to="/men">Men</Link>
                        </div>
                        <div className='menu-side-bar-menu' onClick={handleMenuClick}>
                            <Link to="/accessories">Accessories</Link>
                        </div>
                    </div>

                    <div className='menu-side-bar-menu-second-option'>
                        <div className='menu-side-bar-menu-second' onClick={handleMenuClick}>
                            <Link to="/about">About</Link>
                        </div>
                        <div className='menu-side-bar-menu-second' onClick={handleMenuClick}>
                            <Link to="/contact">Contact</Link>
                        </div>
                        <div className='menu-side-bar-menu-second' onClick={handleMenuClick}>
                            <Link to="/return-policy">returns</Link>
                        </div>
                        <div className='menu-side-bar-menu-second' onClick={handleMenuClick}>
                            <Link to="/shipping-policy">shipping</Link>
                        </div>
                        <div className='menu-side-bar-menu-second' onClick={handleMenuClick}>
                            <Link to="/privacy-policies">Privacy policy</Link>
                        </div>
                        <div className='menu-side-bar-menu-second' onClick={handleMenuClick}>
                            <Link to="/terms-conditions">Terms & Conditions</Link>
                        </div>
                    </div>

                    <div className='menu-side-bar-menu-second-option-cosial-media'>
                        <a href='https://www.instagram.com/1fiveluxury?igsh=b2U4NmJlOHo4MXE2&utm_source=qr' target='blank'><FaInstagram /></a>
                        <a href='https://www.facebook.com/people/1FiveLuxury/61573584849714/?mibextid=wwXIfr&rdid=V1JCC7ErJAIG6JCi&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Eq18XeuAx%2F%3Fmibextid%3DwwXIfr' target='blank'><FaFacebookSquare /></a>
                        <a href='https://x.com/1fiveluxury?s=21&t=abNZb9BXQdbo-Hy7hi12Xg' target='blank'><FaXTwitter /></a>
                        <a href='https://www.youtube.com/@1fiveluxury' target='blank'><FaYoutube /></a>
                        <a href="mailto: 1FiveLuxury@gmail.com" target='blank'><IoMailOutline /></a>
                        {/* <a href="https://wa.me/+919892331133?text=" target='blank'><FaWhatsapp /></a>
                        <a href="tel:+919892331133" target='blank'><IoIosCall /></a> */}
                    </div>
                </Drawer>
            </div>

            {/* <SearchPage toggleSearch={toggleSearch} isSearchOpen={isSearchOpen} />
            <AddtoCart /> */}
        </>
    );
};

export default Header;
