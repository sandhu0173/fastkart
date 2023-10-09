import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const feather = require('feather-icons');

const Header = () => {
    const navigate = useNavigate();
    function handleEmptyClick(e) {
        e.preventDefault();
        // Your custom logic here
    }
    useEffect(()=>{
      feather.replace();
    },[])
    return (
        // Header Start
        <>
        <header className="pb-md-4 pb-0">
                <div className="header-top">
                    <div className="container-fluid-lg">
                        <div className="row">
                            <div className="col-xxl-3 d-xxl-block d-none">
                                <div className="top-left-header">
                                    <i className="iconly-Location icli text-white"></i>
                                    <span className="text-white">1418 Riverwood Drive, CA 96052, US</span>
                                </div>
                            </div>

                            <div className="col-xxl-6 col-lg-9 d-lg-block d-none">
                                <div className="header-offer">
                                    <div className="notification-slider">
                                        <div>
                                            <div className="timer-notification">
                                                <h6><strong className="me-1">Welcome to Fastkart!</strong>Wrap new offers/gift
                                                    every signle day on Weekends.<strong className="ms-1">New Coupon Code: Fast024
                                                    </strong>

                                                </h6>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="timer-notification">
                                                <h6>Something you love is now on sale!
                                                    <a href="shop-left-sidebar.html" className="text-white">Buy Now
                                                        !</a>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <ul className="about-list right-nav-about">
                                    <li className="right-nav-list">
                                        <div className="dropdown theme-form-select">
                                            <button className="btn dropdown-toggle" type="button" id="select-language"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src="./assets/images/country/united-states.png"
                                                    className="img-fluid blur-up lazyload" alt="" />
                                                <span>English</span>
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="select-language">
                                                <li>
                                                    <a className="dropdown-item" href="#" onClick={(e) => handleEmptyClick(e)} id="english">
                                                        <img src="./assets/images/country/united-kingdom.png"
                                                            className="img-fluid blur-up lazyload" alt="" />
                                                        <span>English</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#" onClick={(e) => handleEmptyClick(e)} id="france">
                                                        <img src="./assets/images/country/germany.png"
                                                            className="img-fluid blur-up lazyload" alt="" />
                                                        <span>Germany</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#" onClick={(e) => handleEmptyClick(e)} id="chinese">
                                                        <img src="./assets/images/country/turkish.png"
                                                            className="img-fluid blur-up lazyload" alt="" />
                                                        <span>Turki</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="right-nav-list">
                                        <div className="dropdown theme-form-select">
                                            <button className="btn dropdown-toggle" type="button" id="select-dollar"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <span>USD</span>
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end sm-dropdown-menu"
                                                aria-labelledby="select-dollar">
                                                <li>
                                                    <a className="dropdown-item" id="aud" href="#" onClick={(e) => handleEmptyClick(e)}>AUD</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" id="eur" href="#" onClick={(e) => handleEmptyClick(e)}>EUR</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" id="cny" href="#" onClick={(e) => handleEmptyClick(e)}>CNY</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="top-nav top-header sticky-header">
                    <div className="container-fluid-lg">
                        <div className="row">
                            <div className="col-12">
                                <div className="navbar-top">
                                    <button className="navbar-toggler d-xl-none d-inline navbar-menu-button" type="button"
                                        data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                                        <span className="navbar-toggler-icon">
                                            <i className="fa-solid fa-bars"></i>
                                        </span>
                                    </button>
                                    <Link to={"/"} className="web-logo nav-logo">
                                        <img src="./assets/images/logo/1.png" className="img-fluid blur-up lazyload" alt="" />
                                    </Link>

                                    <div className="middle-box">
                                        <div className="location-box">
                                            <button className="btn location-button" data-bs-toggle="modal"
                                                data-bs-target="#locationModal">
                                                <span className="location-arrow">
                                                    <i data-feather="map-pin"></i>
                                                </span>
                                                <span className="locat-name">Your Location</span>
                                                <i className="fa-solid fa-angle-down"></i>
                                            </button>
                                        </div>

                                        <div className="search-box">
                                            <div className="input-group">
                                                <input type="search" className="form-control" placeholder="I'm searching for..."
                                                    aria-label="Recipient's username" aria-describedby="button-addon2" />
                                                <button className="btn" type="button" id="button-addon2">
                                                    <i data-feather="search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rightside-box">
                                        <div className="search-full">
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i data-feather="search" className="font-light"></i>
                                                </span>
                                                <input type="text" className="form-control search-type" placeholder="Search here.." />
                                                <span className="input-group-text close-search">
                                                    <i data-feather="x" className="font-light"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <ul className="right-side-menu">
                                            <li className="right-side">
                                                <div className="delivery-login-box">
                                                    <div className="delivery-icon">
                                                        <div className="search-box">
                                                            <i data-feather="search"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="right-side">
                                                <a href="contact-us.html" className="delivery-login-box">
                                                    <div className="delivery-icon">
                                                        <i data-feather="phone-call"></i>
                                                    </div>
                                                    <div className="delivery-detail">
                                                        <h6>24/7 Delivery</h6>
                                                        <h5>+91 888 104 2340</h5>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="right-side">
                                                <a href="wishlist.html" className="btn p-0 position-relative header-wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </li>
                                            <li className="right-side">
                                                <div className="onhover-dropdown header-badge">
                                                    <button type="button" className="btn p-0 position-relative header-wishlist">
                                                        <i data-feather="shopping-cart"></i>
                                                        <span className="position-absolute top-0 start-100 translate-middle badge">2
                                                            <span className="visually-hidden">unread messages</span>
                                                        </span>
                                                    </button>

                                                    <div className="onhover-div">
                                                        <ul className="cart-list">
                                                            <li className="product-box-contain">
                                                                <div className="drop-cart">
                                                                    <a href="product-left-thumbnail.html" className="drop-image">
                                                                        <img src="./assets/images/vegetable/product/1.png"
                                                                            className="blur-up lazyload" alt="" />
                                                                    </a>

                                                                    <div className="drop-contain">
                                                                        <a href="product-left-thumbnail.html">
                                                                            <h5>Fantasy Crunchy Choco Chip Cookies</h5>
                                                                        </a>
                                                                        <h6><span>1 x</span> $80.58</h6>
                                                                        <button className="close-button close_button">
                                                                            <i className="fa-solid fa-xmark"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </li>

                                                            <li className="product-box-contain">
                                                                <div className="drop-cart">
                                                                    <a href="product-left-thumbnail.html" className="drop-image">
                                                                        <img src="./assets/images/vegetable/product/2.png"
                                                                            className="blur-up lazyload" alt="" />
                                                                    </a>

                                                                    <div className="drop-contain">
                                                                        <a href="product-left-thumbnail.html">
                                                                            <h5>Peanut Butter Bite Premium Butter Cookies 600 g
                                                                            </h5>
                                                                        </a>
                                                                        <h6><span>1 x</span> $25.68</h6>
                                                                        <button className="close-button close_button">
                                                                            <i className="fa-solid fa-xmark"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>

                                                        <div className="price-box">
                                                            <h5>Total :</h5>
                                                            <h4 className="theme-color fw-bold">$106.58</h4>
                                                        </div>

                                                        <div className="button-group">
                                                            <a href="cart.html" className="btn btn-sm cart-button">View Cart</a>
                                                            <a href="checkout.html" className="btn btn-sm cart-button theme-bg-color
                                                        text-white">Checkout</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="right-side onhover-dropdown">
                                                <div className="delivery-login-box">
                                                    <div className="delivery-icon">
                                                        <i data-feather="user"></i>
                                                    </div>
                                                    <div className="delivery-detail">
                                                        <h6>Hello,</h6>
                                                        <h5>My Account</h5>
                                                    </div>
                                                </div>

                                                <div className="onhover-div onhover-div-login">
                                                    <ul className="user-box-name">
                                                        <li className="product-box-contain">
                                                            <i></i>
                                                            <a href="login.html">Log In</a>
                                                        </li>

                                                        <li className="product-box-contain">
                                                            <a href="sign-up.html">Register</a>
                                                        </li>

                                                        <li className="product-box-contain">
                                                            <a href="forgot.html">Forgot Password</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="header-nav">
                                <div className="header-nav-left">
                                    <button className="dropdown-category">
                                        <i data-feather="align-left"></i>
                                        <span>All Categories</span>
                                    </button>

                                    <div className="category-dropdown">
                                        <div className="category-title">
                                            <h5>Categories</h5>
                                            <button type="button" className="btn p-0 close-button text-content">
                                                <i className="fa-solid fa-xmark"></i>
                                            </button>
                                        </div>

                                        <ul className="category-list">
                                            <li className="onhover-category-list">
                                                <a href="#" onClick={(e) => handleEmptyClick(e)} className="category-name">
                                                    <img src="./assets/svg/vegetable.svg" alt="" />
                                                    <h6>Vegetables & Fruit</h6>
                                                    <i className="fa-solid fa-angle-right"></i>
                                                </a>

                                                <div className="onhover-category-box">
                                                    <div className="list-1">
                                                        <div className="category-title-box">
                                                            <h5>Organic Vegetables</h5>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Potato & Tomato</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Cucumber & Capsicum</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Leafy Vegetables</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Root Vegetables</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Beans & Okra</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Cabbage & Cauliflower</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Gourd & Drumstick</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Specialty</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="list-2">
                                                        <div className="category-title-box">
                                                            <h5>Fresh Fruit</h5>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Banana & Papaya</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Kiwi, Citrus Fruit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Apples & Pomegranate</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Seasonal Fruits</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Mangoes</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Fruit Baskets</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="onhover-category-list">
                                                <a href="#" onClick={(e) => handleEmptyClick(e)} className="category-name">
                                                    <img src="./assets/svg/cup.svg" alt="" />
                                                    <h6>Beverages</h6>
                                                    <i className="fa-solid fa-angle-right"></i>
                                                </a>

                                                <div className="onhover-category-box w-100">
                                                    <div className="list-1">
                                                        <div className="category-title-box">
                                                            <h5>Energy & Soft Drinks</h5>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Soda & Cocktail Mix</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Soda & Cocktail Mix</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Sports & Energy Drinks</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Non Alcoholic Drinks</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Packaged Water</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Spring Water</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Flavoured Water</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="onhover-category-list">
                                                <a href="#" onClick={(e) => handleEmptyClick(e)} className="category-name">
                                                    <img src="./assets/svg/meats.svg" alt="" />
                                                    <h6>Meats & Seafood</h6>
                                                    <i className="fa-solid fa-angle-right"></i>
                                                </a>

                                                <div className="onhover-category-box">
                                                    <div className="list-1">
                                                        <div className="category-title-box">
                                                            <h5>Meat</h5>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Fresh Meat</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Frozen Meat</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Marinated Meat</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Fresh & Frozen Meat</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="list-2">
                                                        <div className="category-title-box">
                                                            <h5>Seafood</h5>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Fresh Water Fish</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Dry Fish</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Frozen Fish & Seafood</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Marine Water Fish</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Canned Seafood</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Prawans & Shrimps</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Other Seafood</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="onhover-category-list">
                                                <a href="#" onClick={(e) => handleEmptyClick(e)} className="category-name">
                                                    <img src="./assets/svg/breakfast.svg" alt="" />
                                                    <h6>Breakfast & Dairy</h6>
                                                    <i className="fa-solid fa-angle-right"></i>
                                                </a>

                                                <div className="onhover-category-box">
                                                    <div className="list-1">
                                                        <div className="category-title-box">
                                                            <h5>Breakfast Cereals</h5>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Oats & Porridge</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Kids Cereal</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Muesli</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Flakes</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Granola & Cereal Bars</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Instant Noodles</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Pasta & Macaroni</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Frozen Non-Veg Snacks</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="list-2">
                                                        <div className="category-title-box">
                                                            <h5>Dairy</h5>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Milk</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Curd</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Paneer, Tofu & Cream</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Butter & Margarine</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Condensed, Powdered Milk</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Buttermilk & Lassi</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Yogurt & Shrikhand</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Flavoured, Soya Milk</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="onhover-category-list">
                                                <a href="#" onClick={(e) => handleEmptyClick(e)} className="category-name">
                                                    <img src="./assets/svg/frozen.svg" alt="" />
                                                    <h6>Frozen Foods</h6>
                                                    <i className="fa-solid fa-angle-right"></i>
                                                </a>

                                                <div className="onhover-category-box w-100">
                                                    <div className="list-1">
                                                        <div className="category-title-box">
                                                            <h5>Noodle, Pasta</h5>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Instant Noodles</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Hakka Noodles</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Cup Noodles</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Vermicelli</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Instant Pasta</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="onhover-category-list">
                                                <a href="#" onClick={(e) => handleEmptyClick(e)} className="category-name">
                                                    <img src="./assets/svg/biscuit.svg" alt="" />
                                                    <h6>Biscuits & Snacks</h6>
                                                    <i className="fa-solid fa-angle-right"></i>
                                                </a>

                                                <div className="onhover-category-box">
                                                    <div className="list-1">
                                                        <div className="category-title-box">
                                                            <h5>Biscuits & Cookies</h5>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Salted Biscuits</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Marie, Health, Digestive</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Cream Biscuits & Wafers</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Glucose & Milk Biscuits</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Cookies</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="list-2">
                                                        <div className="category-title-box">
                                                            <h5>Bakery Snacks</h5>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Bread Sticks & Lavash</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Cheese & Garlic Bread</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Puffs, Patties, Sandwiches</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Breadcrumbs & Croutons</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="onhover-category-list">
                                                <a href="#" onClick={(e) => handleEmptyClick(e)} className="category-name">
                                                    <img src="./assets/svg/grocery.svg" alt="" />
                                                    <h6>Grocery & Staples</h6>
                                                    <i className="fa-solid fa-angle-right"></i>
                                                </a>

                                                <div className="onhover-category-box">
                                                    <div className="list-1">
                                                        <div className="category-title-box">
                                                            <h5>Grocery</h5>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Lemon, Ginger & Garlic</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Indian & Exotic Herbs</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Organic Vegetables</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Organic Fruits</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="list-2">
                                                        <div className="category-title-box">
                                                            <h5>Organic Staples</h5>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Organic Dry Fruits</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Organic Dals & Pulses</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Organic Millet & Flours</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Organic Sugar, Jaggery</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Organic Masalas & Spices</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Organic Rice, Other Rice</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Organic Flours</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>Organic Edible Oil, Ghee</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="header-nav-middle">
                                    <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                                        <div className="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
                                            <div className="offcanvas-header navbar-shadow">
                                                <h5>Menu</h5>
                                                <button className="btn-close lead" type="button" data-bs-dismiss="offcanvas"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="offcanvas-body">
                                                <ul className="navbar-nav">
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" href="#" onClick={(e) => handleEmptyClick(e)}
                                                            data-bs-toggle="dropdown">Home</a>

                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="index.html">Kartshop</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="index-2.html">Sweetshop</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="index-3.html">Organic</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="index-4.html">Supershop</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="index-5.html">Classic shop</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="index-6.html">Furniture</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="index-7.html">Search Oriented</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="index-8.html">Category Focus</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="index-9.html">Fashion</a>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" href="#" onClick={(e) => handleEmptyClick(e)}
                                                            data-bs-toggle="dropdown">Shop</a>

                                                        <ul className="dropdown-menu">
                                                            <li> 
                                                                <Link className="dropdown-item" to={"/shop-category-slider"} >Shop
                                                                    Category Slider</Link>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="shop-category.html">Shop
                                                                    Category Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="shop-banner.html">Shop Banner</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="shop-left-sidebar.html">Shop Left
                                                                    Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="shop-list.html">Shop List</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="shop-right-sidebar.html">Shop
                                                                    Right Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="shop-top-filter.html">Shop Top
                                                                    Filter</a>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" href="#" onClick={(e) => handleEmptyClick(e)}
                                                            data-bs-toggle="dropdown">Product</a>

                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="product-4-image.html">Product
                                                                    4 Image</a>
                                                            </li>
                                                            <li className="sub-dropdown-hover">
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)} className="dropdown-item">Product
                                                                    Thumbnail</a>
                                                                <ul className="sub-menu">
                                                                    <li>
                                                                        <a href="product-left-thumbnail.html">Left Thumbnail</a>
                                                                    </li>

                                                                    <li>
                                                                        <a href="product-right-thumbnail.html">Right
                                                                            Thumbnail</a>
                                                                    </li>

                                                                    <li>
                                                                        <a href="product-bottom-thumbnail.html">Bottom
                                                                            Thumbnail</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="product-bundle.html" className="dropdown-item">Product
                                                                    Bundle</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-slider.html" className="dropdown-item">Product
                                                                    Slider</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-sticky.html" className="dropdown-item">Product
                                                                    Sticky</a>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="nav-item dropdown dropdown-mega">
                                                        <a className="nav-link dropdown-toggle ps-xl-2 ps-0"
                                                            href="#" onClick={(e) => handleEmptyClick(e)} data-bs-toggle="dropdown">Mega Menu</a>

                                                        <div className="dropdown-menu dropdown-menu-2">
                                                            <div className="row">
                                                                <div className="dropdown-column col-xl-3">
                                                                    <h5 className="dropdown-header">Daily Vegetables</h5>
                                                                    <a className="dropdown-item" href="shop-left-sidebar.html">Beans
                                                                        & Brinjals</a>

                                                                    <a className="dropdown-item"
                                                                        href="shop-left-sidebar.html">Broccoli & Cauliflower</a>

                                                                    <a href="shop-left-sidebar.html"
                                                                        className="dropdown-item">Chilies, Garlic</a>

                                                                    <a className="dropdown-item"
                                                                        href="shop-left-sidebar.html">Vegetables & Salads</a>

                                                                    <a className="dropdown-item"
                                                                        href="shop-left-sidebar.html">Gourd, Cucumber</a>

                                                                    <a className="dropdown-item" href="shop-left-sidebar.html">Herbs
                                                                        & Sprouts</a>

                                                                    <a href="demo-personal-portfolio.html"
                                                                        className="dropdown-item">Lettuce & Leafy</a>
                                                                </div>

                                                                <div className="dropdown-column col-xl-3">
                                                                    <h5 className="dropdown-header">Baby Tender</h5>
                                                                    <a className="dropdown-item" href="shop-left-sidebar.html">Beans
                                                                        & Brinjals</a>

                                                                    <a className="dropdown-item"
                                                                        href="shop-left-sidebar.html">Broccoli & Cauliflower</a>

                                                                    <a className="dropdown-item"
                                                                        href="shop-left-sidebar.html">Chilies, Garlic</a>

                                                                    <a className="dropdown-item"
                                                                        href="shop-left-sidebar.html">Vegetables & Salads</a>

                                                                    <a className="dropdown-item"
                                                                        href="shop-left-sidebar.html">Gourd, Cucumber</a>

                                                                    <a className="dropdown-item"
                                                                        href="shop-left-sidebar.html">Potatoes & Tomatoes</a>

                                                                    <a href="shop-left-sidebar.html" className="dropdown-item">Peas
                                                                        & Corn</a>
                                                                </div>

                                                                <div className="dropdown-column col-xl-3">
                                                                    <h5 className="dropdown-header">Exotic Vegetables</h5>
                                                                    <a className="dropdown-item"
                                                                        href="shop-left-sidebar.html">Asparagus & Artichokes</a>

                                                                    <a className="dropdown-item"
                                                                        href="shop-left-sidebar.html">Avocados & Peppers</a>

                                                                    <a className="dropdown-item"
                                                                        href="shop-left-sidebar.html">Broccoli & Zucchini</a>

                                                                    <a className="dropdown-item"
                                                                        href="shop-left-sidebar.html">Celery, Fennel & Leeks</a>

                                                                    <a className="dropdown-item"
                                                                        href="shop-left-sidebar.html">Chilies & Lime</a>
                                                                </div>

                                                                <div className="dropdown-column dropdown-column-img col-3"></div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" href="#" onClick={(e) => handleEmptyClick(e)}
                                                            data-bs-toggle="dropdown">Blog</a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="blog-detail.html">Blog Detail</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="blog-grid.html">Blog Grid</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="blog-list.html">Blog List</a>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="nav-item dropdown new-nav-item">
                                                        <label className="new-dropdown">New</label>
                                                        <a className="nav-link dropdown-toggle" href="#" onClick={(e) => handleEmptyClick(e)}
                                                            data-bs-toggle="dropdown">Pages</a>
                                                        <ul className="dropdown-menu">
                                                            <li className="sub-dropdown-hover">
                                                                <a className="dropdown-item" href="#" onClick={(e) => handleEmptyClick(e)}>Email
                                                                    Template <span className="new-text"><i
                                                                        className="fa-solid fa-bolt-lightning"></i></span></a>
                                                                <ul className="sub-menu">
                                                                    <li>
                                                                        <a
                                                                            href="https://themes.pixelstrap.com/fastkart/email-templete/abandonment-email.html">Abandonment</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://themes.pixelstrap.com/fastkart/email-templete/offer-template.html">Offer
                                                                            Template</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://themes.pixelstrap.com/fastkart/email-templete/order-success.html">Order
                                                                            Success</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://themes.pixelstrap.com/fastkart/email-templete/reset-password.html">Reset
                                                                            Password</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://themes.pixelstrap.com/fastkart/email-templete/welcome.html">Welcome
                                                                            template</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="sub-dropdown-hover">
                                                                <a className="dropdown-item" href="#" onClick={(e) => handleEmptyClick(e)}>Invoice
                                                                    Template <span className="new-text"><i
                                                                        className="fa-solid fa-bolt-lightning"></i></span></a>
                                                                <ul className="sub-menu">
                                                                    <li>
                                                                        <a href="https://themes.pixelstrap.com/fastkart/invoice/invoice-1.html">Invoice 1</a>
                                                                    </li>

                                                                    <li>
                                                                        <a href="https://themes.pixelstrap.com/fastkart/invoice/invoice-2.html">Invoice 2</a>
                                                                    </li>

                                                                    <li>
                                                                        <a href="https://themes.pixelstrap.com/fastkart/invoice/invoice-3.html">Invoice 3</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="404.html">404</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="about-us.html">About Us</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="cart.html">Cart</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="contact-us.html">Contact</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="checkout.html">Checkout</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="coming-soon.html">Coming Soon</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="compare.html">Compare</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="faq.html">Faq</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="order-success.html">Order
                                                                    Success</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="order-tracking.html">Order
                                                                    Tracking</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="otp.html">OTP</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="search.html">Search</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="user-dashboard.html">User
                                                                    Dashboard</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="wishlist.html">Wishlist</a>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" href="#" onClick={(e) => handleEmptyClick(e)}
                                                            data-bs-toggle="dropdown">Seller</a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="seller-become.html">Become a
                                                                    Seller</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="seller-dashboard.html">Seller
                                                                    Dashboard</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="seller-detail.html">Seller
                                                                    Detail</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="seller-detail-2.html">Seller
                                                                    Detail 2</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="seller-grid.html">Seller Grid</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="seller-grid-2.html">Seller Grid
                                                                    2</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="header-nav-right">
                                    <button className="btn deal-button" data-bs-toggle="modal" data-bs-target="#deal-box">
                                        <i data-feather="zap"></i>
                                        <span>Deal Today</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            </>
    );
}
        
export default Header;