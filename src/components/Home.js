import React from 'react';
import jquery, { ui } from 'jquery';

import '../assets/css/animate.min.css';
import '../assets/css/vendors/font-awesome.css';
import '../assets/css/vendors/feather-icon.css';
import "../assets/css/vendors/slick/slick.css";
import "../assets/css/vendors/slick/slick-theme.css";
import "../assets/js/slick/slick.js"
import "../assets/js/slick/slick-animation.min.js"
import "../assets/js/slick/custom_slick.js"
import '../assets/css/bulk-style.css';
import '../assets/css/vendors/animate.css';
import '../assets/css/style.css';
import 'jquery-ui';
//import "../assets/js/feather/feather.min.js"
//import "../assets/js/feather/feather-icon.js"
import "../assets/js/lazysizes.min.js"

import "../assets/js/auto-height.js"

//import "../assets/js/timer1.js"

import "../assets/js/fly-cart.js"

import "../assets/js/quantity-2.js"

import "../assets/js/wow.min.js"
//import "../assets/js/custom-wow.js"

import "../assets/js/script.js"

//import "../assets/js/theme-setting.js"

//js files

import '../assets/js/script';

const Home = () => {
    function handleEmptyClick(e) {
        e.preventDefault();
        // Your custom logic here
    }
    return (
        // Header Start
        <>
            <div>
            <div className="fullpage-loader" id="fullpage-loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            </div>
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
                                                <img src="../assets/images/country/united-states.png"
                                                    className="img-fluid blur-up lazyload" alt="" />
                                                <span>English</span>
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="select-language">
                                                <li>
                                                    <a className="dropdown-item" href="#" onClick={(e) => handleEmptyClick(e)} id="english">
                                                        <img src="../assets/images/country/united-kingdom.png"
                                                            className="img-fluid blur-up lazyload" alt="" />
                                                        <span>English</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#" onClick={(e) => handleEmptyClick(e)} id="france">
                                                        <img src="../assets/images/country/germany.png"
                                                            className="img-fluid blur-up lazyload" alt="" />
                                                        <span>Germany</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#" onClick={(e) => handleEmptyClick(e)} id="chinese">
                                                        <img src="../assets/images/country/turkish.png"
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
                                    <a href="index.html" className="web-logo nav-logo">
                                        <img src="../assets/images/logo/1.png" className="img-fluid blur-up lazyload" alt="" />
                                    </a>

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
                                                                        <img src="../assets/images/vegetable/product/1.png"
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
                                                                        <img src="../assets/images/vegetable/product/2.png"
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
                                                    <img src="../assets/svg/vegetable.svg" alt="" />
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
                                                    <img src="../assets/svg/cup.svg" alt="" />
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
                                                    <img src="../assets/svg/meats.svg" alt="" />
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
                                                    <img src="../assets/svg/breakfast.svg" alt="" />
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
                                                    <img src="../assets/svg/frozen.svg" alt="" />
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
                                                    <img src="../assets/svg/biscuit.svg" alt="" />
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
                                                    <img src="../assets/svg/grocery.svg" alt="" />
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
                                                                <a className="dropdown-item" href="shop-category-slider.html">Shop
                                                                    Category Slider</a>
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
            {/* <!--Header End-- > */}

            {/* < !--mobile fix menu start-- > */}
            <div className="mobile-menu d-md-none d-block mobile-cart">
                <ul>
                    <li className="active">
                        <a href="index.html">
                            <i className="iconly-Home icli"></i>
                            <span>Home</span>
                        </a>
                    </li>

                    <li className="mobile-category">
                        <a href="#" onClick={(e) => handleEmptyClick(e)}>
                            <i className="iconly-Category icli js-link"></i>
                            <span>Category</span>
                        </a>
                    </li>

                    <li>
                        <a href="search.html" className="search-box">
                            <i className="iconly-Search icli"></i>
                            <span>Search</span>
                        </a>
                    </li>

                    <li>
                        <a href="wishlist.html" className="notifi-wishlist">
                            <i className="iconly-Heart icli"></i>
                            <span>My Wish</span>
                        </a>
                    </li>

                    <li>
                        <a href="cart.html">
                            <i className="iconly-Bag-2 icli fly-cate"></i>
                            <span>Cart</span>
                        </a>
                    </li>
                </ul>
            </div>
            {/* <!--mobile fix menu end-- > */}

            {/* < !--Home Section Start-- > */}
            <section className="home-section pt-2">
                <div className="container-fluid-lg">
                    <div className="row g-4">
                        <div className="col-xl-8 ratio_65">
                            <div className="home-contain h-100">
                                <div className="h-100">
                                    <img src="../assets/images/vegetable/banner/1.jpg" className="bg-img blur-up lazyload" alt="" />
                                </div>
                                <div className="home-detail p-center-left w-75">
                                    <div>
                                        <h6>Exclusive offer <span>30% Off</span></h6>
                                        <h1 className="text-uppercase">Stay home & delivered your <span className="daily">Daily
                                            Needs</span></h1>
                                        <p className="w-75 d-none d-sm-block">Vegetables contain many vitamins and minerals that are
                                            good for your health.</p>
                                        {/* <button onclick="location.href = 'shop-left-sidebar.html';"  className="btn btn-animation mt-xxl-4 mt-2 home-button mend-auto"> */}
                                        <button className="btn btn-animation mt-xxl-4 mt-2 home-button mend-auto">   Shop Now <i
                                            className="fa-solid fa-right-long icon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 ratio_65">
                            <div className="row g-4">
                                <div className="col-xl-12 col-md-6">
                                    <div className="home-contain">
                                        <img src="../assets/images/vegetable/banner/2.jpg" className="bg-img blur-up lazyload"
                                            alt="" />
                                        <div className="home-detail p-center-left home-p-sm w-75">
                                            <div>
                                                <h2 className="mt-0 text-danger">45% <span className="discount text-title">OFF</span>
                                                </h2>
                                                <h3 className="theme-color">Nut Collection</h3>
                                                <p className="w-75">We deliver organic vegetables & fruits</p>
                                                <a href="shop-left-sidebar.html" className="shop-button">Shop Now <i
                                                    className="fa-solid fa-right-long"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-12 col-md-6">
                                    <div className="home-contain">
                                        <img src="../assets/images/vegetable/banner/3.jpg" className="bg-img blur-up lazyload"
                                            alt="" />
                                        <div className="home-detail p-center-left home-p-sm w-75">
                                            <div>
                                                <h3 className="mt-0 theme-color fw-bold">Healthy Food</h3>
                                                <h4 className="text-danger">Organic Market</h4>
                                                <p className="organic">Start your daily shopping with some Organic food</p>
                                                <a href="shop-left-sidebar.html" className="shop-button">Shop Now <i
                                                    className="fa-solid fa-right-long"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Home Section End-- > */}

            {/* < !--Banner Section Start-- > */}
            <section className="banner-section ratio_60 wow fadeInUp">
                <div className="container-fluid-lg">
                    <div className="banner-slider">
                        <div>
                            <div className="banner-contain hover-effect">
                                <img src="../assets/images/vegetable/banner/4.jpg" className="bg-img blur-up lazyload" alt="" />
                                <div className="banner-details">
                                    <div className="banner-box">
                                        <h6 className="text-danger">5% OFF</h6>
                                        <h5>Hot Deals on New Items</h5>
                                        <h6 className="text-content">Daily Essentials Eggs & Dairy</h6>
                                    </div>
                                    <a href="shop-left-sidebar.html" className="banner-button text-white">Shop Now <i
                                        className="fa-solid fa-right-long ms-2"></i></a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="banner-contain hover-effect">
                                <img src="../assets/images/vegetable/banner/5.jpg" className="bg-img blur-up lazyload" alt="" />
                                <div className="banner-details">
                                    <div className="banner-box">
                                        <h6 className="text-danger">5% OFF</h6>
                                        <h5>Buy More & Save More</h5>
                                        <h6 className="text-content">Fresh Vegetables</h6>
                                    </div>
                                    <a href="shop-left-sidebar.html" className="banner-button text-white">Shop Now <i
                                        className="fa-solid fa-right-long ms-2"></i></a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="banner-contain hover-effect">
                                <img src="../assets/images/vegetable/banner/6.jpg" className="bg-img blur-up lazyload" alt="" />
                                <div className="banner-details">
                                    <div className="banner-box">
                                        <h6 className="text-danger">5% OFF</h6>
                                        <h5>Organic Meat Prepared</h5>
                                        <h6 className="text-content">Delivered to Your Home</h6>
                                    </div>
                                    <a href="shop-left-sidebar.html" className="banner-button text-white">Shop Now <i
                                        className="fa-solid fa-right-long ms-2"></i></a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="banner-contain hover-effect">
                                <img src="../assets/images/vegetable/banner/7.jpg" className="bg-img blur-up lazyload" alt="" />
                                <div className="banner-details">
                                    <div className="banner-box">
                                        <h6 className="text-danger">5% OFF</h6>
                                        <h5>Buy More & Save More</h5>
                                        <h6 className="text-content">Nuts & Snacks</h6>
                                    </div>
                                    <a href="shop-left-sidebar.html" className="banner-button text-white">Shop Now <i
                                        className="fa-solid fa-right-long ms-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Banner Section End-- > */}

            {/* < !--Product Section Start-- > */}
            <section className="product-section">
                <div className="container-fluid-lg">
                    <div className="row g-sm-4 g-3">
                        <div className="col-xxl-3 col-xl-4 d-none d-xl-block">
                            <div className="p-sticky">
                                <div className="category-menu">
                                    <h3>Category</h3>
                                    <ul>
                                        <li>
                                            <div className="category-list">
                                                <img src="../assets/svg/vegetable.svg" className="blur-up lazyload" alt="" />
                                                <h5>
                                                    <a href="shop-left-sidebar.html">Vegetables & Fruit</a>
                                                </h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="category-list">
                                                <img src="../assets/svg/cup.svg" className="blur-up lazyload" alt="" />
                                                <h5>
                                                    <a href="shop-left-sidebar.html">Beverages</a>
                                                </h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="category-list">
                                                <img src="../assets/svg/meats.svg" className="blur-up lazyload" alt="" />
                                                <h5>
                                                    <a href="shop-left-sidebar.html">Meats & Seafood</a>
                                                </h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="category-list">
                                                <img src="../assets/svg/breakfast.svg" className="blur-up lazyload" alt="" />
                                                <h5>
                                                    <a href="shop-left-sidebar.html">Breakfast & Dairy</a>
                                                </h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="category-list">
                                                <img src="../assets/svg/frozen.svg" className="blur-up lazyload" alt="" />
                                                <h5>
                                                    <a href="shop-left-sidebar.html">Frozen Foods</a>
                                                </h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="category-list">
                                                <img src="../assets/svg/biscuit.svg" className="blur-up lazyload" alt="" />
                                                <h5>
                                                    <a href="shop-left-sidebar.html">Biscuits & Snacks</a>
                                                </h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="category-list">
                                                <img src="../assets/svg/grocery.svg" className="blur-up lazyload" alt="" />
                                                <h5>
                                                    <a href="shop-left-sidebar.html">Grocery & Staples</a>
                                                </h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="category-list">
                                                <img src="../assets/svg/drink.svg" className="blur-up lazyload" alt="" />
                                                <h5>
                                                    <a href="shop-left-sidebar.html">Wines & Alcohol Drinks</a>
                                                </h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="category-list">
                                                <img src="../assets/svg/milk.svg" className="blur-up lazyload" alt="" />
                                                <h5>
                                                    <a href="shop-left-sidebar.html">Milk & Dairies</a>
                                                </h5>
                                            </div>
                                        </li>
                                        <li className="pb-30">
                                            <div className="category-list">
                                                <img src="../assets/svg/pet.svg" className="blur-up lazyload" alt="" />
                                                <h5>
                                                    <a href="shop-left-sidebar.html">Pet Foods</a>
                                                </h5>
                                            </div>
                                        </li>
                                    </ul>

                                    <ul className="value-list">
                                        <li>
                                            <div className="category-list">
                                                <h5 className="ms-0 text-title">
                                                    <a href="shop-left-sidebar.html">Value of the Day</a>
                                                </h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="category-list">
                                                <h5 className="ms-0 text-title">
                                                    <a href="shop-left-sidebar.html">Top 50 Offers</a>
                                                </h5>
                                            </div>
                                        </li>
                                        <li className="mb-0">
                                            <div className="category-list">
                                                <h5 className="ms-0 text-title">
                                                    <a href="shop-left-sidebar.html">New Arrivals</a>
                                                </h5>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="ratio_156 section-t-space">
                                    <div className="home-contain hover-effect">
                                        <img src="../assets/images/vegetable/banner/8.jpg" className="bg-img blur-up lazyload"
                                            alt="" />
                                        <div className="home-detail p-top-left home-p-medium">
                                            <div>
                                                <h6 className="text-yellow home-banner">Seafood</h6>
                                                <h3 className="text-uppercase fw-normal"><span
                                                    className="theme-color fw-bold">Freshes</span> Products</h3>
                                                <h3 className="fw-light">every hour</h3>
                                                {/* <button onclick="location.href = 'shop-left-sidebar.html';" className="btn btn-animation btn-md mend-auto"> */}
                                                <button className="btn btn-animation btn-md mend-auto">
                                                    Shop Now <i
                                                        className="fa-solid fa-arrow-right icon"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="ratio_medium section-t-space">
                                    <div className="home-contain hover-effect">
                                        <img src="../assets/images/vegetable/banner/11.jpg" className="img-fluid blur-up lazyload"
                                            alt="" />
                                        <div className="home-detail p-top-left home-p-medium">
                                            <div>
                                                <h4 className="text-yellow text-exo home-banner">Organic</h4>
                                                <h2 className="text-uppercase fw-normal mb-0 text-russo theme-color">fresh</h2>
                                                <h2 className="text-uppercase fw-normal text-title">Vegetables</h2>
                                                <p className="mb-3">Super Offer to 50% Off</p>
                                                {/* <button onclick="location.href = 'shop-left-sidebar.html';" className="btn btn-animation btn-md mend-auto"> */}
                                                <button className="btn btn-animation btn-md mend-auto">
                                                    Shop Now <i
                                                        className="fa-solid fa-arrow-right icon"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="section-t-space">
                                    <div className="category-menu">
                                        <h3>Trending Products</h3>

                                        <ul className="product-list border-0 p-0 d-block">
                                            <li>
                                                <div className="offer-product">
                                                    <a href="product-left-thumbnail.html" className="offer-image">
                                                        <img src="../assets/images/vegetable/product/23.png"
                                                            className="blur-up lazyload" alt="" />
                                                    </a>

                                                    <div className="offer-detail">
                                                        <div>
                                                            <a href="product-left-thumbnail.html" className="text-title">
                                                                <h6 className="name">Meatigo Premium Goat Curry</h6>
                                                            </a>
                                                            <span>450 G</span>
                                                            <h6 className="price theme-color">$ 70.00</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="offer-product">
                                                    <a href="product-left-thumbnail.html" className="offer-image">
                                                        <img src="../assets/images/vegetable/product/24.png"
                                                            className="blur-up lazyload" alt="" />
                                                    </a>

                                                    <div className="offer-detail">
                                                        <div>
                                                            <a href="product-left-thumbnail.html" className="text-title">
                                                                <h6 className="name">Dates Medjoul Premium Imported</h6>
                                                            </a>
                                                            <span>450 G</span>
                                                            <h6 className="price theme-color">$ 40.00</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="offer-product">
                                                    <a href="product-left-thumbnail.html" className="offer-image">
                                                        <img src="../assets/images/vegetable/product/25.png"
                                                            className="blur-up lazyload" alt="" />
                                                    </a>

                                                    <div className="offer-detail">
                                                        <div>
                                                            <a href="product-left-thumbnail.html" className="text-title">
                                                                <h6 className="name">Good Life Walnut Kernels</h6>
                                                            </a>
                                                            <span>200 G</span>
                                                            <h6 className="price theme-color">$ 52.00</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="mb-0">
                                                <div className="offer-product">
                                                    <a href="product-left-thumbnail.html" className="offer-image">
                                                        <img src="../assets/images/vegetable/product/26.png"
                                                            className="blur-up lazyload" alt="" />
                                                    </a>

                                                    <div className="offer-detail">
                                                        <div>
                                                            <a href="product-left-thumbnail.html" className="text-title">
                                                                <h6 className="name">Apple Red Premium Imported</h6>
                                                            </a>
                                                            <span>1 KG</span>
                                                            <h6 className="price theme-color">$ 80.00</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="section-t-space">
                                    <div className="category-menu">
                                        <h3>Customer Comment</h3>

                                        <div className="review-box">
                                            <div className="review-contain">
                                                <h5 className="w-75">We Care About Our Customer Experience</h5>
                                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                                                    used to demonstrate the visual form of a document or a typeface without
                                                    relying on meaningful content.</p>
                                            </div>

                                            <div className="review-profile">
                                                <div className="review-image">
                                                    <img src="../assets/images/vegetable/review/1.jpg"
                                                        className="img-fluid blur-up lazyload" alt="" />
                                                </div>
                                                <div className="review-detail">
                                                    <h5>Tina Mcdonnale</h5>
                                                    <h6>Sale Manager</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-9 col-xl-8">
                            <div className="title title-flex">
                                <div>
                                    <h2>Top Save Today</h2>
                                    <span className="title-leaf">
                                        <svg className="icon-width">
                                            <use xlinkHref="../assets/svg/leaf.svg#leaf"></use>
                                        </svg>
                                    </span>
                                    <p>Don't miss this opportunity at a special discount just for this week.</p>
                                </div>
                                <div className="timing-box">
                                    <div className="timing">
                                        <i data-feather="clock"></i>
                                        <h6 className="name">Expires in :</h6>
                                        <div className="time" id="clockdiv-1" data-hours="1" data-minutes="2" data-seconds="3">
                                            <ul>
                                                <li>
                                                    <div className="counter">
                                                        <div className="days">
                                                            <h6></h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="counter">
                                                        <div className="hours">
                                                            <h6></h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="counter">
                                                        <div className="minutes">
                                                            <h6></h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="counter">
                                                        <div className="seconds">
                                                            <h6></h6>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="section-b-space">
                                <div className="product-border border-row overflow-hidden">
                                    <div className="product-box-slider no-arrow">
                                        <div>
                                            <div className="row m-0">
                                                <div className="col-12 px-0">
                                                    <div className="product-box">
                                                        <div className="product-image">
                                                            <a href="product-left-thumbnail.html">
                                                                <img src="../assets/images/vegetable/product/1.png"
                                                                    className="img-fluid blur-up lazyload" alt="" />
                                                            </a>
                                                            <ul className="product-option">
                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="View">
                                                                    <a href="#" onClick={(e) => handleEmptyClick(e)} data-bs-toggle="modal"
                                                                        data-bs-target="#view">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                </li>

                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Compare">
                                                                    <a href="compare.html">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </li>

                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Wishlist">
                                                                    <a href="wishlist.html" className="notifi-wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-detail">
                                                            <a href="product-left-thumbnail.html">
                                                                <h6 className="name">Fantasy Crunchy Choco Chip Cookies</h6>
                                                            </a>

                                                            <h5 className="sold text-content">
                                                                <span className="theme-color price">$26.69</span>
                                                                <del>28.56</del>
                                                            </h5>

                                                            <div className="product-rating mt-sm-2 mt-1">
                                                                <ul className="rating">
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star"></i>
                                                                    </li>
                                                                </ul>

                                                                <h6 className="theme-color">In Stock</h6>
                                                            </div>

                                                            <div className="add-to-cart-box">
                                                                <button className="btn btn-add-cart addcart-button">Add
                                                                    <span className="add-icon">
                                                                        <i className="fa-solid fa-plus"></i>
                                                                    </span>
                                                                </button>
                                                                <div className="cart_qty qty-box">
                                                                    <div className="input-group">
                                                                        <button type="button" className="qty-left-minus"
                                                                            data-type="minus" data-field="">
                                                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                                                        </button>
                                                                        <input className="form-control input-number qty-input"
                                                                            type="text" name="quantity" onChange={(e) => { e.preventDefault() }} value="0" />
                                                                        <button type="button" className="qty-right-plus"
                                                                            data-type="plus" data-field="">
                                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 px-0">
                                                    <div className="product-box">
                                                        <div className="product-image">
                                                            <a href="product-left-thumbnail.html">
                                                                <img src="../assets/images/vegetable/product/2.png"
                                                                    className="img-fluid blur-up lazyload" alt="" />
                                                            </a>
                                                            <ul className="product-option">
                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="View">
                                                                    <a href="#" onClick={(e) => handleEmptyClick(e)} data-bs-toggle="modal"
                                                                        data-bs-target="#view">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                </li>

                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Compare">
                                                                    <a href="compare.html">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </li>

                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Wishlist">
                                                                    <a href="wishlist.html" className="notifi-wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-detail">
                                                            <a href="product-left-thumbnail.html">
                                                                <h6 className="name">Cold Brew Coffee Instant Coffee 50 g</h6>
                                                            </a>

                                                            <h5 className="sold text-content">
                                                                <span className="theme-color price">$26.69</span>
                                                                <del>28.56</del>
                                                            </h5>

                                                            <div className="product-rating mt-sm-2 mt-1">
                                                                <ul className="rating">
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star"></i>
                                                                    </li>
                                                                </ul>

                                                                <h6 className="theme-color">In Stock</h6>
                                                            </div>

                                                            <div className="add-to-cart-box">
                                                                <button className="btn btn-add-cart addcart-button">Add
                                                                    <span className="add-icon">
                                                                        <i className="fa-solid fa-plus"></i>
                                                                    </span>
                                                                </button>
                                                                <div className="cart_qty qty-box">
                                                                    <div className="input-group">
                                                                        <button type="button" className="qty-left-minus"
                                                                            data-type="minus" data-field="">
                                                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                                                        </button>
                                                                        <input className="form-control input-number qty-input"
                                                                            type="text" name="quantity" onChange={(e) => { e.preventDefault() }} value="0" />
                                                                        <button type="button" className="qty-right-plus"
                                                                            data-type="plus" data-field="">
                                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="row m-0">
                                                <div className="col-12 px-0">
                                                    <div className="product-box">
                                                        <div className="product-image">
                                                            <a href="product-left-thumbnail.html">
                                                                <img src="../assets/images/vegetable/product/3.png"
                                                                    className="img-fluid blur-up lazyload" alt="" />
                                                            </a>
                                                            <ul className="product-option">
                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="View">
                                                                    <a href="#" onClick={(e) => handleEmptyClick(e)} data-bs-toggle="modal"
                                                                        data-bs-target="#view">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                </li>

                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Compare">
                                                                    <a href="compare.html">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </li>

                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Wishlist">
                                                                    <a href="wishlist.html" className="notifi-wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-detail">
                                                            <a href="product-left-thumbnail.html">
                                                                <h6 className="name">Peanut Butter Bite Premium Butter Cookies 600 g
                                                                </h6>
                                                            </a>

                                                            <h5 className="sold text-content">
                                                                <span className="theme-color price">$26.69</span>
                                                                <del>28.56</del>
                                                            </h5>

                                                            <div className="product-rating mt-sm-2 mt-1">
                                                                <ul className="rating">
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star"></i>
                                                                    </li>
                                                                </ul>

                                                                <h6 className="theme-color">In Stock</h6>
                                                            </div>

                                                            <div className="add-to-cart-box">
                                                                <button className="btn btn-add-cart addcart-button">Add
                                                                    <span className="add-icon">
                                                                        <i className="fa-solid fa-plus"></i>
                                                                    </span>
                                                                </button>
                                                                <div className="cart_qty qty-box">
                                                                    <div className="input-group">
                                                                        <button type="button" className="qty-left-minus"
                                                                            data-type="minus" data-field="">
                                                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                                                        </button>
                                                                        <input className="form-control input-number qty-input"
                                                                            type="text" name="quantity" onChange={(e) => { e.preventDefault() }} value="0" />
                                                                        <button type="button" className="qty-right-plus"
                                                                            data-type="plus" data-field="">
                                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 px-0">
                                                    <div className="product-box">
                                                        <div className="label-tag">
                                                            <span>NEW</span>
                                                        </div>
                                                        <div className="product-image">
                                                            <a href="product-left-thumbnail.html">
                                                                <img src="../assets/images/vegetable/product/4.png"
                                                                    className="img-fluid blur-up lazyload" alt="" />
                                                            </a>
                                                            <ul className="product-option">
                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="View">
                                                                    <a href="#" onClick={(e) => handleEmptyClick(e)} data-bs-toggle="modal"
                                                                        data-bs-target="#view">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                </li>

                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Compare">
                                                                    <a href="compare.html">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </li>

                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Wishlist">
                                                                    <a href="wishlist.html" className="notifi-wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-detail">
                                                            <a href="product-left-thumbnail.html">
                                                                <h6 className="name">SnackAmor Combo Pack of Jowar Stick and Jowar
                                                                    Chips</h6>
                                                            </a>

                                                            <h5 className="sold text-content">
                                                                <span className="theme-color price">$26.69</span>
                                                                <del>28.56</del>
                                                            </h5>

                                                            <div className="product-rating mt-sm-2 mt-1">
                                                                <ul className="rating">
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star"></i>
                                                                    </li>
                                                                </ul>

                                                                <h6 className="theme-color">In Stock</h6>
                                                            </div>

                                                            <div className="add-to-cart-box">
                                                                <button className="btn btn-add-cart addcart-button">Add
                                                                    <span className="add-icon">
                                                                        <i className="fa-solid fa-plus"></i>
                                                                    </span>
                                                                </button>
                                                                <div className="cart_qty qty-box">
                                                                    <div className="input-group">
                                                                        <button type="button" className="qty-left-minus"
                                                                            data-type="minus" data-field="">
                                                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                                                        </button>
                                                                        <input className="form-control input-number qty-input"
                                                                            type="text" name="quantity" onChange={(e) => { e.preventDefault() }} value="0" />
                                                                        <button type="button" className="qty-right-plus"
                                                                            data-type="plus" data-field="">
                                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="row m-0">
                                                <div className="col-12 px-0">
                                                    <div className="product-box">
                                                        <div className="product-image">
                                                            <a href="product-left-thumbnail.html">
                                                                <img src="../assets/images/vegetable/product/5.png"
                                                                    className="img-fluid blur-up lazyload" alt="" />
                                                            </a>
                                                            <ul className="product-option">
                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="View">
                                                                    <a href="#" onClick={(e) => handleEmptyClick(e)} data-bs-toggle="modal"
                                                                        data-bs-target="#view">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                </li>

                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Compare">
                                                                    <a href="compare.html">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </li>

                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Wishlist">
                                                                    <a href="wishlist.html" className="notifi-wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-detail">
                                                            <a href="product-left-thumbnail.html">
                                                                <h6 className="name">Yumitos Chilli Sprinkled Potato Chips 100 g
                                                                </h6>
                                                            </a>

                                                            <h5 className="sold text-content">
                                                                <span className="theme-color price">$26.69</span>
                                                                <del>28.56</del>
                                                            </h5>

                                                            <div className="product-rating mt-sm-2 mt-1">
                                                                <ul className="rating">
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star"></i>
                                                                    </li>
                                                                </ul>

                                                                <h6 className="theme-color">In Stock</h6>
                                                            </div>

                                                            <div className="add-to-cart-box">
                                                                <button className="btn btn-add-cart addcart-button">Add
                                                                    <span className="add-icon">
                                                                        <i className="fa-solid fa-plus"></i>
                                                                    </span>
                                                                </button>
                                                                <div className="cart_qty qty-box">
                                                                    <div className="input-group">
                                                                        <button type="button" className="qty-left-minus"
                                                                            data-type="minus" data-field="">
                                                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                                                        </button>
                                                                        <input className="form-control input-number qty-input"
                                                                            type="text" name="quantity" onChange={(e) => { e.preventDefault() }} value="0" />
                                                                        <button type="button" className="qty-right-plus"
                                                                            data-type="plus" data-field="">
                                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 px-0">
                                                    <div className="product-box">
                                                        <div className="product-image">
                                                            <a href="product-left-thumbnail.html">
                                                                <img src="../assets/images/vegetable/product/6.png"
                                                                    className="img-fluid blur-up lazyload" alt="" />
                                                            </a>
                                                            <ul className="product-option">
                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="View">
                                                                    <a href="#" onClick={(e) => handleEmptyClick(e)} data-bs-toggle="modal"
                                                                        data-bs-target="#view">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                </li>

                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Compare">
                                                                    <a href="compare.html">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </li>

                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Wishlist">
                                                                    <a href="wishlist.html" className="notifi-wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-detail">
                                                            <a href="product-left-thumbnail.html">
                                                                <h6 className="name">Neu Farm Unpolished Desi Toor Dal 1 kg</h6>
                                                            </a>

                                                            <h5 className="sold text-content">
                                                                <span className="theme-color price">$26.69</span>
                                                                <del>28.56</del>
                                                            </h5>

                                                            <div className="product-rating mt-sm-2 mt-1">
                                                                <ul className="rating">
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star"></i>
                                                                    </li>
                                                                </ul>

                                                                <h6 className="theme-color">In Stock</h6>
                                                            </div>

                                                            <div className="add-to-cart-box">
                                                                <button className="btn btn-add-cart addcart-button">Add
                                                                    <span className="add-icon">
                                                                        <i className="fa-solid fa-plus"></i>
                                                                    </span>
                                                                </button>
                                                                <div className="cart_qty qty-box">
                                                                    <div className="input-group">
                                                                        <button type="button" className="qty-left-minus"
                                                                            data-type="minus" data-field="">
                                                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                                                        </button>
                                                                        <input className="form-control input-number qty-input"
                                                                            type="text" name="quantity" onChange={(e) => { e.preventDefault() }} value="0" />
                                                                        <button type="button" className="qty-right-plus"
                                                                            data-type="plus" data-field="">
                                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="row m-0">
                                                <div className="col-12 px-0">
                                                    <div className="product-box">
                                                        <div className="label-tag">
                                                            <span>NEW</span>
                                                        </div>
                                                        <div className="product-image">
                                                            <a href="product-left-thumbnail.html">
                                                                <img src="../assets/images/vegetable/product/7.png"
                                                                    className="img-fluid blur-up lazyload" alt="" />
                                                            </a>
                                                            <ul className="product-option">
                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="View">
                                                                    <a href="#" onClick={(e) => handleEmptyClick(e)} data-bs-toggle="modal"
                                                                        data-bs-target="#view">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                </li>

                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Compare">
                                                                    <a href="compare.html">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </li>

                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Wishlist">
                                                                    <a href="wishlist.html" className="notifi-wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-detail">
                                                            <a href="product-left-thumbnail.html">
                                                                <h6 className="name">healthy Long Life Toned Milk 1 L</h6>
                                                            </a>

                                                            <h5 className="sold text-content">
                                                                <span className="theme-color price">$26.69</span>
                                                                <del>28.56</del>
                                                            </h5>

                                                            <div className="product-rating mt-sm-2 mt-1">
                                                                <ul className="rating">
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star"></i>
                                                                    </li>
                                                                </ul>

                                                                <h6 className="theme-color">In Stock</h6>
                                                            </div>

                                                            <div className="add-to-cart-box">
                                                                <button className="btn btn-add-cart addcart-button">Add
                                                                    <span className="add-icon">
                                                                        <i className="fa-solid fa-plus"></i>
                                                                    </span>
                                                                </button>
                                                                <div className="cart_qty qty-box">
                                                                    <div className="input-group">
                                                                        <button type="button" className="qty-left-minus"
                                                                            data-type="minus" data-field="">
                                                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                                                        </button>
                                                                        <input className="form-control input-number qty-input"
                                                                            type="text" name="quantity" onChange={(e) => { e.preventDefault() }} value="0" />
                                                                        <button type="button" className="qty-right-plus"
                                                                            data-type="plus" data-field="">
                                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 px-0">
                                                    <div className="product-box">
                                                        <div className="product-image">
                                                            <a href="product-left-thumbnail.html">
                                                                <img src="../assets/images/vegetable/product/8.png"
                                                                    className="img-fluid blur-up lazyload" alt="" />
                                                            </a>
                                                            <ul className="product-option">
                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="View">
                                                                    <a href="#" onClick={(e) => handleEmptyClick(e)} data-bs-toggle="modal"
                                                                        data-bs-target="#view">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                </li>

                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Compare">
                                                                    <a href="compare.html">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </li>

                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Wishlist">
                                                                    <a href="wishlist.html" className="notifi-wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-detail">
                                                            <a href="product-left-thumbnail.html">
                                                                <h6 className="name">Dog Treats Natural Yak Milk Bars For Small Dogs
                                                                    100g</h6>
                                                            </a>

                                                            <h5 className="sold text-content">
                                                                <span className="theme-color price">$26.69</span>
                                                                <del>28.56</del>
                                                            </h5>

                                                            <div className="product-rating mt-sm-2 mt-1">
                                                                <ul className="rating">
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star"></i>
                                                                    </li>
                                                                </ul>

                                                                <h6 className="theme-color">In Stock</h6>
                                                            </div>

                                                            <div className="add-to-cart-box">
                                                                <button className="btn btn-add-cart addcart-button">Add
                                                                    <span className="add-icon">
                                                                        <i className="fa-solid fa-plus"></i>
                                                                    </span>
                                                                </button>
                                                                <div className="cart_qty qty-box">
                                                                    <div className="input-group">
                                                                        <button type="button" className="qty-left-minus"
                                                                            data-type="minus" data-field="">
                                                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                                                        </button>
                                                                        <input className="form-control input-number qty-input"
                                                                            type="text" name="quantity" onChange={(e) => { e.preventDefault() }} value="0" />
                                                                        <button type="button" className="qty-right-plus"
                                                                            data-type="plus" data-field="">
                                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="row m-0">
                                                <div className="col-12 px-0">
                                                    <div className="product-box">
                                                        <div className="product-image">
                                                            <a href="product-left-thumbnail.html">
                                                                <img src="../assets/images/vegetable/product/9.png"
                                                                    className="img-fluid blur-up lazyload" alt="" />
                                                            </a>
                                                            <ul className="product-option">
                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="View">
                                                                    <a href="#" onClick={(e) => handleEmptyClick(e)} data-bs-toggle="modal"
                                                                        data-bs-target="#view">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                </li>

                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Compare">
                                                                    <a href="compare.html">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </li>

                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Wishlist">
                                                                    <a href="wishlist.html" className="notifi-wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-detail">
                                                            <a href="product-left-thumbnail.html">
                                                                <h6 className="name">Raw Mutton Leg, Packaging 5 Kg</h6>
                                                            </a>

                                                            <h5 className="sold text-content">
                                                                <span className="theme-color price">$26.69</span>
                                                                <del>28.56</del>
                                                            </h5>

                                                            <div className="product-rating mt-sm-2 mt-1">
                                                                <ul className="rating">
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star"></i>
                                                                    </li>
                                                                </ul>

                                                                <h6 className="theme-color">In Stock</h6>
                                                            </div>

                                                            <div className="add-to-cart-box">
                                                                <button className="btn btn-add-cart addcart-button">Add
                                                                    <span className="add-icon">
                                                                        <i className="fa-solid fa-plus"></i>
                                                                    </span>
                                                                </button>
                                                                <div className="cart_qty qty-box">
                                                                    <div className="input-group">
                                                                        <button type="button" className="qty-left-minus"
                                                                            data-type="minus" data-field="">
                                                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                                                        </button>
                                                                        <input className="form-control input-number qty-input"
                                                                            type="text" name="quantity" onChange={(e) => { e.preventDefault() }} value="0" />
                                                                        <button type="button" className="qty-right-plus"
                                                                            data-type="plus" data-field="">
                                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 px-0">
                                                    <div className="product-box">
                                                        <div className="product-image">
                                                            <a href="product-left-thumbnail.html">
                                                                <img src="../assets/images/vegetable/product/10.png"
                                                                    className="img-fluid blur-up lazyload" alt="" />
                                                            </a>
                                                            <ul className="product-option">
                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="View">
                                                                    <a href="#" onClick={(e) => handleEmptyClick(e)} data-bs-toggle="modal"
                                                                        data-bs-target="#view">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                </li>

                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Compare">
                                                                    <a href="compare.html">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </li>

                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Wishlist">
                                                                    <a href="wishlist.html" className="notifi-wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-detail">
                                                            <a href="product-left-thumbnail.html">
                                                                <h6 className="name">Blended Instant Coffee 50 g Buy 1 Get 1 Free
                                                                </h6>
                                                            </a>

                                                            <h5 className="sold text-content">
                                                                <span className="theme-color price">$26.69</span>
                                                                <del>28.56</del>
                                                            </h5>

                                                            <div className="product-rating mt-sm-2 mt-1">
                                                                <ul className="rating">
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star"></i>
                                                                    </li>
                                                                </ul>

                                                                <h6 className="theme-color">In Stock</h6>
                                                            </div>

                                                            <div className="add-to-cart-box">
                                                                <button className="btn btn-add-cart addcart-button">Add
                                                                    <span className="add-icon">
                                                                        <i className="fa-solid fa-plus"></i>
                                                                    </span>
                                                                </button>
                                                                <div className="cart_qty qty-box">
                                                                    <div className="input-group">
                                                                        <button type="button" className="qty-left-minus"
                                                                            data-type="minus" data-field="">
                                                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                                                        </button>
                                                                        <input className="form-control input-number qty-input"
                                                                            type="text" name="quantity" onChange={(e) => { e.preventDefault() }} value="0" />
                                                                        <button type="button" className="qty-right-plus"
                                                                            data-type="plus" data-field="">
                                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="row m-0">
                                                <div className="col-12 px-0">
                                                    <div className="product-box">
                                                        <div className="product-image">
                                                            <a href="product-left-thumbnail.html">
                                                                <img src="../assets/images/vegetable/product/3.png"
                                                                    className="img-fluid blur-up lazyload" alt="" />
                                                            </a>
                                                            <ul className="product-option">
                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="View">
                                                                    <a href="#" onClick={(e) => handleEmptyClick(e)} data-bs-toggle="modal"
                                                                        data-bs-target="#view">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                </li>

                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Compare">
                                                                    <a href="compare.html">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </li>

                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Wishlist">
                                                                    <a href="wishlist.html" className="notifi-wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-detail">
                                                            <a href="product-left-thumbnail.html">
                                                                <h6 className="name">Peanut Butter Bite Premium Butter Cookies 600 g
                                                                </h6>
                                                            </a>

                                                            <h5 className="sold text-content">
                                                                <span className="theme-color price">$26.69</span>
                                                                <del>28.56</del>
                                                            </h5>

                                                            <div className="product-rating mt-sm-2 mt-1">
                                                                <ul className="rating">
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star"></i>
                                                                    </li>
                                                                </ul>

                                                                <h6 className="theme-color">In Stock</h6>
                                                            </div>

                                                            <div className="add-to-cart-box">
                                                                <button className="btn btn-add-cart addcart-button">Add
                                                                    <span className="add-icon">
                                                                        <i className="fa-solid fa-plus"></i>
                                                                    </span>
                                                                </button>
                                                                <div className="cart_qty qty-box">
                                                                    <div className="input-group">
                                                                        <button type="button" className="qty-left-minus"
                                                                            data-type="minus" data-field="">
                                                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                                                        </button>
                                                                        <input className="form-control input-number qty-input"
                                                                            type="text" name="quantity" onChange={(e) => { e.preventDefault() }} value="0" />
                                                                        <button type="button" className="qty-right-plus"
                                                                            data-type="plus" data-field="">
                                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 px-0">
                                                    <div className="product-box">
                                                        <div className="product-image">
                                                            <a href="product-left-thumbnail.html">
                                                                <img src="../assets/images/vegetable/product/5.png"
                                                                    className="img-fluid blur-up lazyload" alt="" />
                                                            </a>
                                                            <ul className="product-option">
                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="View">
                                                                    <a href="#" onClick={(e) => handleEmptyClick(e)} data-bs-toggle="modal"
                                                                        data-bs-target="#view">
                                                                        <i data-feather="eye"></i>
                                                                    </a>
                                                                </li>

                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Compare">
                                                                    <a href="compare.html">
                                                                        <i data-feather="refresh-cw"></i>
                                                                    </a>
                                                                </li>

                                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Wishlist">
                                                                    <a href="wishlist.html" className="notifi-wishlist">
                                                                        <i data-feather="heart"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="product-detail">
                                                            <a href="product-left-thumbnail.html">
                                                                <h6 className="name">Yumitos Chilli Sprinkled Potato Chips 100 g
                                                                </h6>
                                                            </a>

                                                            <h5 className="sold text-content">
                                                                <span className="theme-color price">$26.69</span>
                                                                <del>28.56</del>
                                                            </h5>

                                                            <div className="product-rating mt-sm-2 mt-1">
                                                                <ul className="rating">
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star" className="fill"></i>
                                                                    </li>
                                                                    <li>
                                                                        <i data-feather="star"></i>
                                                                    </li>
                                                                </ul>

                                                                <h6 className="theme-color">In Stock</h6>
                                                            </div>

                                                            <div className="add-to-cart-box">
                                                                <button className="btn btn-add-cart addcart-button">Add
                                                                    <span className="add-icon">
                                                                        <i className="fa-solid fa-plus"></i>
                                                                    </span>
                                                                </button>
                                                                <div className="cart_qty qty-box">
                                                                    <div className="input-group">
                                                                        <button type="button" className="qty-left-minus"
                                                                            data-type="minus" data-field="">
                                                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                                                        </button>
                                                                        <input className="form-control input-number qty-input"
                                                                            type="text" name="quantity" onChange={(e) => { e.preventDefault() }} value="0" />
                                                                        <button type="button" className="qty-right-plus"
                                                                            data-type="plus" data-field="">
                                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="title">
                                <h2>Bowse by Categories</h2>
                                <span className="title-leaf">
                                    <svg className="icon-width">
                                        <use xlinkHref="../assets/svg/leaf.svg#leaf"></use>
                                    </svg>
                                </span>
                                <p>Top Categories Of The Week</p>
                            </div>

                            <div className="category-slider-2 product-wrapper no-arrow">
                                <div>
                                    <a href="shop-left-sidebar.html" className="category-box category-dark">
                                        <div>
                                            <img src="//themes.pixelstrap.com/fastkart/assets/svg/1/vegetable.svg" className="blur-up lazyload" alt="" />
                                            <h5>Vegetables & Fruit</h5>
                                        </div>
                                    </a>
                                </div>

                                <div>
                                    <a href="shop-left-sidebar.html" className="category-box category-dark">
                                        <div>
                                            <img src="../assets/svg/cup.svg" className="blur-up lazyload" alt="" />
                                            <h5>Beverages</h5>
                                        </div>
                                    </a>
                                </div>

                                <div>
                                    <a href="shop-left-sidebar.html" className="category-box category-dark">
                                        <div>
                                            <img src="../assets/svg/meats.svg" className="blur-up lazyload" alt="" />
                                            <h5>Meats & Seafood</h5>
                                        </div>
                                    </a>
                                </div>

                                <div>
                                    <a href="shop-left-sidebar.html" className="category-box category-dark">
                                        <div>
                                            <img src="../assets/svg/breakfast.svg" className="blur-up lazyload" alt="" />
                                            <h5>Breakfast</h5>
                                        </div>
                                    </a>
                                </div>

                                <div>
                                    <a href="shop-left-sidebar.html" className="category-box category-dark">
                                        <div>
                                            <img src="../assets/svg/frozen.svg" className="blur-up lazyload" alt="" />
                                            <h5>Frozen Foods</h5>
                                        </div>
                                    </a>
                                </div>

                                <div>
                                    <a href="shop-left-sidebar.html" className="category-box category-dark">
                                        <div>
                                            <img src="../assets/svg/milk.svg" className="blur-up lazyload" alt="" />
                                            <h5>Milk & Dairies</h5>
                                        </div>
                                    </a>
                                </div>

                                <div>
                                    <a href="shop-left-sidebar.html" className="category-box category-dark">
                                        <div>
                                            <img src="../assets/svg/pet.svg" className="blur-up lazyload" alt="" />
                                            <h5>Pet Food</h5>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="section-t-space section-b-space">
                                <div className="row g-md-4 g-3">
                                    <div className="col-md-6">
                                        <div className="banner-contain hover-effect">
                                            <img src="../assets/images/vegetable/banner/9.jpg" className="bg-img blur-up lazyload"
                                                alt="" />
                                            <div className="banner-details p-center-left p-4">
                                                <div>
                                                    <h3 className="text-exo">50% offer</h3>
                                                    <h4 className="text-russo fw-normal theme-color mb-2">Testy Mushrooms</h4>
                                                    {/* <button onclick="location.href = 'shop-left-sidebar.html';" className="btn btn-animation btn-sm mend-auto"> */}
                                                    <button className="btn btn-animation btn-sm mend-auto">
                                                        Shop Now <i
                                                            className="fa-solid fa-arrow-right icon"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="banner-contain hover-effect">
                                            <img src="../assets/images/vegetable/banner/10.jpg" className="bg-img blur-up lazyload"
                                                alt="" />
                                            <div className="banner-details p-center-left p-4">
                                                <div>
                                                    <h3 className="text-exo">50% offer</h3>
                                                    <h4 className="text-russo fw-normal theme-color mb-2">Fresh MEAT</h4>
                                                    {/* <button onclick="location.href = 'shop-left-sidebar.html';" className="btn btn-animation btn-sm mend-auto"> */}
                                                    <button className="btn btn-animation btn-sm mend-auto">
                                                        Shop Now <i
                                                            className="fa-solid fa-arrow-right icon"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="title d-block">
                                <h2>Food Cupboard</h2>
                                <span className="title-leaf">
                                    <svg className="icon-width">
                                        <use xlinkHref="../assets/svg/leaf.svg#leaf"></use>
                                    </svg>
                                </span>
                                <p>A virtual assistant collects the products from your list</p>
                            </div>

                            <div className="product-border overflow-hidden wow fadeInUp">
                                <div className="product-box-slider no-arrow">
                                    <div>
                                        <div className="row m-0">
                                            <div className="col-12 px-0">
                                                <div className="product-box">
                                                    <div className="product-image">
                                                        <a href="product-left-thumbnail.html">
                                                            <img src="../assets/images/vegetable/product/1.png"
                                                                className="img-fluid blur-up lazyload" alt="" />
                                                        </a>
                                                        <ul className="product-option">
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)} data-bs-toggle="modal"
                                                                    data-bs-target="#view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="notifi-wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-detail">
                                                        <a href="product-left-thumbnail.html">
                                                            <h6 className="name h-100">Chocalate Powder</h6>
                                                        </a>

                                                        <h5 className="sold text-content">
                                                            <span className="theme-color price">$26.69</span>
                                                            <del>28.56</del>
                                                        </h5>

                                                        <div className="product-rating mt-sm-2 mt-1">
                                                            <ul className="rating">
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star"></i>
                                                                </li>
                                                            </ul>

                                                            <h6 className="theme-color">In Stock</h6>
                                                        </div>

                                                        <div className="add-to-cart-box">
                                                            <button className="btn btn-add-cart addcart-button">Add
                                                                <span className="add-icon">
                                                                    <i className="fa-solid fa-plus"></i>
                                                                </span>
                                                            </button>
                                                            <div className="cart_qty qty-box">
                                                                <div className="input-group">
                                                                    <button type="button" className="qty-left-minus"
                                                                        data-type="minus" data-field="">
                                                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                                                    </button>
                                                                    <input className="form-control input-number qty-input"
                                                                        type="text" name="quantity" onChange={(e) => { e.preventDefault() }} value="0" />
                                                                    <button type="button" className="qty-right-plus"
                                                                        data-type="plus" data-field="">
                                                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="row m-0">
                                            <div className="col-12 px-0">
                                                <div className="product-box">
                                                    <div className="product-image">
                                                        <a href="product-left-thumbnail.html">
                                                            <img src="../assets/images/vegetable/product/2.png"
                                                                className="img-fluid blur-up lazyload" alt="" />
                                                        </a>
                                                        <ul className="product-option">
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)} data-bs-toggle="modal"
                                                                    data-bs-target="#view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="notifi-wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-detail">
                                                        <a href="product-left-thumbnail.html">
                                                            <h6 className="name h-100">Sandwich Cookies</h6>
                                                        </a>

                                                        <h5 className="sold text-content">
                                                            <span className="theme-color price">$26.69</span>
                                                            <del>28.56</del>
                                                        </h5>

                                                        <div className="product-rating mt-sm-2 mt-1">
                                                            <ul className="rating">
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star"></i>
                                                                </li>
                                                            </ul>

                                                            <h6 className="theme-color">In Stock</h6>
                                                        </div>

                                                        <div className="add-to-cart-box">
                                                            <button className="btn btn-add-cart addcart-button">Add
                                                                <span className="add-icon">
                                                                    <i className="fa-solid fa-plus"></i>
                                                                </span>
                                                            </button>
                                                            <div className="cart_qty qty-box">
                                                                <div className="input-group">
                                                                    <button type="button" className="qty-left-minus"
                                                                        data-type="minus" data-field="">
                                                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                                                    </button>
                                                                    <input className="form-control input-number qty-input"
                                                                        type="text" name="quantity" onChange={(e) => { e.preventDefault() }} value="0" />
                                                                    <button type="button" className="qty-right-plus"
                                                                        data-type="plus" data-field="">
                                                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="row m-0">
                                            <div className="col-12 px-0">
                                                <div className="product-box">
                                                    <div className="product-image">
                                                        <a href="product-left-thumbnail.html">
                                                            <img src="../assets/images/vegetable/product/3.png"
                                                                className="img-fluid blur-up lazyload" alt="" />
                                                        </a>
                                                        <ul className="product-option">
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)} data-bs-toggle="modal"
                                                                    data-bs-target="#view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="notifi-wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-detail">
                                                        <a href="product-left-thumbnail.html">
                                                            <h6 className="name h-100">Butter Croissant</h6>
                                                        </a>

                                                        <h5 className="sold text-content">
                                                            <span className="theme-color price">$26.69</span>
                                                            <del>28.56</del>
                                                        </h5>

                                                        <div className="product-rating mt-sm-2 mt-1">
                                                            <ul className="rating">
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star"></i>
                                                                </li>
                                                            </ul>

                                                            <h6 className="theme-color">In Stock</h6>
                                                        </div>

                                                        <div className="add-to-cart-box">
                                                            <button className="btn btn-add-cart addcart-button">Add
                                                                <span className="add-icon">
                                                                    <i className="fa-solid fa-plus"></i>
                                                                </span>
                                                            </button>
                                                            <div className="cart_qty qty-box">
                                                                <div className="input-group">
                                                                    <button type="button" className="qty-left-minus"
                                                                        data-type="minus" data-field="">
                                                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                                                    </button>
                                                                    <input className="form-control input-number qty-input"
                                                                        type="text" name="quantity" onChange={(e) => { e.preventDefault() }} value="0" />
                                                                    <button type="button" className="qty-right-plus"
                                                                        data-type="plus" data-field="">
                                                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="row m-0">
                                            <div className="col-12 px-0">
                                                <div className="product-box">
                                                    <div className="product-image">
                                                        <a href="product-left-thumbnail.html">
                                                            <img src="../assets/images/vegetable/product/4.png"
                                                                className="img-fluid blur-up lazyload" alt="" />
                                                        </a>
                                                        <ul className="product-option">
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)} data-bs-toggle="modal"
                                                                    data-bs-target="#view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="notifi-wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-detail">
                                                        <a href="product-left-thumbnail.html">
                                                            <h6 className="name h-100">Dark Chocalate</h6>
                                                        </a>

                                                        <h5 className="sold text-content">
                                                            <span className="theme-color price">$26.69</span>
                                                            <del>28.56</del>
                                                        </h5>

                                                        <div className="product-rating mt-sm-2 mt-1">
                                                            <ul className="rating">
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star"></i>
                                                                </li>
                                                            </ul>

                                                            <h6 className="theme-color">In Stock</h6>
                                                        </div>

                                                        <div className="add-to-cart-box">
                                                            <button className="btn btn-add-cart addcart-button">Add
                                                                <span className="add-icon">
                                                                    <i className="fa-solid fa-plus"></i>
                                                                </span>
                                                            </button>
                                                            <div className="cart_qty qty-box">
                                                                <div className="input-group">
                                                                    <button type="button" className="qty-left-minus"
                                                                        data-type="minus" data-field="">
                                                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                                                    </button>
                                                                    <input className="form-control input-number qty-input"
                                                                        type="text" name="quantity" onChange={(e) => { e.preventDefault() }} value="0" />
                                                                    <button type="button" className="qty-right-plus"
                                                                        data-type="plus" data-field="">
                                                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="row m-0">
                                            <div className="col-12 px-0">
                                                <div className="product-box">
                                                    <div className="product-image">
                                                        <a href="product-left-thumbnail.html">
                                                            <img src="../assets/images/vegetable/product/5.png"
                                                                className="img-fluid blur-up lazyload" alt="" />
                                                        </a>
                                                        <ul className="product-option">
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)} data-bs-toggle="modal"
                                                                    data-bs-target="#view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="notifi-wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-detail">
                                                        <a href="product-left-thumbnail.html">
                                                            <h6 className="name h-100">Mix-sweet-food</h6>
                                                        </a>

                                                        <h5 className="sold text-content">
                                                            <span className="theme-color price">$26.69</span>
                                                            <del>28.56</del>
                                                        </h5>

                                                        <div className="product-rating mt-sm-2 mt-1">
                                                            <ul className="rating">
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star"></i>
                                                                </li>
                                                            </ul>

                                                            <h6 className="theme-color">In Stock</h6>
                                                        </div>

                                                        <div className="add-to-cart-box">
                                                            <button className="btn btn-add-cart addcart-button">Add
                                                                <span className="add-icon">
                                                                    <i className="fa-solid fa-plus"></i>
                                                                </span>
                                                            </button>
                                                            <div className="cart_qty qty-box">
                                                                <div className="input-group">
                                                                    <button type="button" className="qty-left-minus"
                                                                        data-type="minus" data-field="">
                                                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                                                    </button>
                                                                    <input className="form-control input-number qty-input"
                                                                        type="text" name="quantity" onChange={(e) => { e.preventDefault() }} value="0" />
                                                                    <button type="button" className="qty-right-plus"
                                                                        data-type="plus" data-field="">
                                                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="row m-0">
                                            <div className="col-12 px-0">
                                                <div className="product-box">
                                                    <div className="product-image">
                                                        <a href="product-left-thumbnail.html">
                                                            <img src="../assets/images/vegetable/product/4.png"
                                                                className="img-fluid blur-up lazyload" alt="" />
                                                        </a>
                                                        <ul className="product-option">
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                                <a href="#" onClick={(e) => handleEmptyClick(e)} data-bs-toggle="modal"
                                                                    data-bs-target="#view">
                                                                    <i data-feather="eye"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Compare">
                                                                <a href="compare.html">
                                                                    <i data-feather="refresh-cw"></i>
                                                                </a>
                                                            </li>

                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Wishlist">
                                                                <a href="wishlist.html" className="notifi-wishlist">
                                                                    <i data-feather="heart"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-detail">
                                                        <a href="product-left-thumbnail.html">
                                                            <h6 className="name h-100">Dark Chocalate</h6>
                                                        </a>

                                                        <h5 className="sold text-content">
                                                            <span className="theme-color price">$26.69</span>
                                                            <del>28.56</del>
                                                        </h5>

                                                        <div className="product-rating mt-sm-2 mt-1">
                                                            <ul className="rating">
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star"></i>
                                                                </li>
                                                            </ul>

                                                            <h6 className="theme-color">In Stock</h6>
                                                        </div>

                                                        <div className="add-to-cart-box">
                                                            <button className="btn btn-add-cart addcart-button">Add
                                                                <span className="add-icon">
                                                                    <i className="fa-solid fa-plus"></i>
                                                                </span>
                                                            </button>
                                                            <div className="cart_qty qty-box">
                                                                <div className="input-group">
                                                                    <button type="button" className="qty-left-minus"
                                                                        data-type="minus" data-field="">
                                                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                                                    </button>
                                                                    <input className="form-control input-number qty-input"
                                                                        type="text" name="quantity" onChange={(e) => { e.preventDefault() }} value="0" />
                                                                    <button type="button" className="qty-right-plus"
                                                                        data-type="plus" data-field="">
                                                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="section-t-space">
                                <div className="banner-contain">
                                    <img src="../assets/images/vegetable/banner/15.jpg" className="bg-img blur-up lazyload" alt="" />
                                    <div className="banner-details p-center p-4 text-white text-center">
                                        <div>
                                            <h3 className="lh-base fw-bold offer-text">Get $3 Cashback! Min Order of $30</h3>
                                            <h6 className="coupon-code">Use Code : GROCERY1920</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="section-t-space section-b-space">
                                <div className="row g-md-4 g-3">
                                    <div className="col-xxl-8 col-xl-12 col-md-7">
                                        <div className="banner-contain hover-effect">
                                            <img src="../assets/images/vegetable/banner/12.jpg" className="bg-img blur-up lazyload"
                                                alt="" />
                                            <div className="banner-details p-center-left p-4">
                                                <div>
                                                    <h2 className="text-kaushan fw-normal theme-color">Get Ready To</h2>
                                                    <h3 className="mt-2 mb-3">TAKE ON THE DAY!</h3>
                                                    <p className="text-content banner-text">In publishing and graphic design, Lorem
                                                        ipsum is a placeholder text commonly used to demonstrate.</p>
                                                    {/* <button onclick="location.href = 'shop-left-sidebar.html';" className="btn btn-animation btn-sm mend-auto"> */}
                                                    <button className="btn btn-animation btn-sm mend-auto">
                                                        Shop Now <i
                                                            className="fa-solid fa-arrow-right icon"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xxl-4 col-xl-12 col-md-5">
                                        <a href="shop-left-sidebar.html" className="banner-contain hover-effect h-100">
                                            <img src="../assets/images/vegetable/banner/13.jpg" className="bg-img blur-up lazyload"
                                                alt="" />
                                            <div className="banner-details p-center-left p-4 h-100">
                                                <div>
                                                    <h2 className="text-kaushan fw-normal text-danger">20% Off</h2>
                                                    <h3 className="mt-2 mb-2 theme-color">SUMMRY</h3>
                                                    <h3 className="fw-normal product-name text-title">Product</h3>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="title d-block">
                                <div>
                                    <h2>Our best Seller</h2>
                                    <span className="title-leaf">
                                        <svg className="icon-width">
                                            <use xlinkHref="../assets/svg/leaf.svg#leaf"></use>
                                        </svg>
                                    </span>
                                    <p>A virtual assistant collects the products from your list</p>
                                </div>
                            </div>

                            <div className="best-selling-slider product-wrapper wow fadeInUp">
                                <div>
                                    <ul className="product-list">
                                        <li>
                                            <div className="offer-product">
                                                <a href="product-left-thumbnail.html" className="offer-image">
                                                    <img src="../assets/images/vegetable/product/11.png"
                                                        className="blur-up lazyload" alt="" />
                                                </a>

                                                <div className="offer-detail">
                                                    <div>
                                                        <a href="product-left-thumbnail.html" className="text-title">
                                                            <h6 className="name">Tuffets Whole Wheat Bread</h6>
                                                        </a>
                                                        <span>500 G</span>
                                                        <h6 className="price theme-color">$ 10.00</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="offer-product">
                                                <a href="product-left-thumbnail.html" className="offer-image">
                                                    <img src="../assets/images/vegetable/product/12.png"
                                                        className="blur-up lazyload" alt="" />
                                                </a>

                                                <div className="offer-detail">
                                                    <div>
                                                        <a href="product-left-thumbnail.html" className="text-title">
                                                            <h6 className="name">Potato</h6>
                                                        </a>
                                                        <span>500 G</span>
                                                        <h6 className="price theme-color">$ 10.00</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="offer-product">
                                                <a href="product-left-thumbnail.html" className="offer-image">
                                                    <img src="../assets/images/vegetable/product/13.png"
                                                        className="blur-up lazyload" alt="" />
                                                </a>

                                                <div className="offer-detail">
                                                    <div>
                                                        <a href="product-left-thumbnail.html" className="text-title">
                                                            <h6 className="name">Green Chilli</h6>
                                                        </a>
                                                        <span>200 G</span>
                                                        <h6 className="price theme-color">$ 10.00</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="offer-product">
                                                <a href="product-left-thumbnail.html" className="offer-image">
                                                    <img src="../assets/images/vegetable/product/14.png"
                                                        className="blur-up lazyload" alt="" />
                                                </a>

                                                <div className="offer-detail">
                                                    <div>
                                                        <a href="product-left-thumbnail.html" className="text-title">
                                                            <h6 className="name">Muffets Burger Bun</h6>
                                                        </a>
                                                        <span>150 G</span>
                                                        <h6 className="price theme-color">$ 10.00</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <ul className="product-list">
                                        <li>
                                            <div className="offer-product">
                                                <a href="product-left-thumbnail.html" className="offer-image">
                                                    <img src="../assets/images/vegetable/product/15.png"
                                                        className="blur-up lazyload" alt="" />
                                                </a>

                                                <div className="offer-detail">
                                                    <div>
                                                        <a href="product-left-thumbnail.html" className="text-title">
                                                            <h6 className="name">Tuffets Britannia Cheezza</h6>
                                                        </a>
                                                        <span>500 G</span>
                                                        <h6 className="price theme-color">$ 10.00</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="offer-product">
                                                <a href="product-left-thumbnail.html" className="offer-image">
                                                    <img src="../assets/images/vegetable/product/16.png"
                                                        className="blur-up lazyload" alt="" />
                                                </a>

                                                <div className="offer-detail">
                                                    <div>
                                                        <a href="product-left-thumbnail.html" className="text-title">
                                                            <h6 className="name">Long Life Toned Milk</h6>
                                                        </a>
                                                        <span>1 L</span>
                                                        <h6 className="price theme-color">$ 10.00</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="offer-product">
                                                <a href="product-left-thumbnail.html" className="offer-image">
                                                    <img src="../assets/images/vegetable/product/17.png"
                                                        className="blur-up lazyload" alt="" />
                                                </a>

                                                <div className="offer-detail">
                                                    <div>
                                                        <a href="product-left-thumbnail.html" className="text-title">
                                                            <h6 className="name">Organic Tomato</h6>
                                                        </a>
                                                        <span>1 KG</span>
                                                        <h6 className="price theme-color">$ 10.00</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="offer-product">
                                                <a href="product-left-thumbnail.html" className="offer-image">
                                                    <img src="../assets/images/vegetable/product/18.png"
                                                        className="blur-up lazyload" alt="" />
                                                </a>

                                                <div className="offer-detail">
                                                    <div>
                                                        <a href="product-left-thumbnail.html" className="text-title">
                                                            <h6 className="name">Organic Jam</h6>
                                                        </a>
                                                        <span>150 G</span>
                                                        <h6 className="price theme-color">$ 10.00</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <ul className="product-list">
                                        <li>
                                            <div className="offer-product">
                                                <a href="product-left-thumbnail.html" className="offer-image">
                                                    <img src="../assets/images/vegetable/product/19.png"
                                                        className="blur-up lazyload" alt="" />
                                                </a>

                                                <div className="offer-detail">
                                                    <div>
                                                        <a href="product-left-thumbnail.html" className="text-title">
                                                            <h6 className="name">Good Life Refined Sunflower Oil</h6>
                                                        </a>
                                                        <span>1 L</span>
                                                        <h6 className="price theme-color">$ 10.00</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="offer-product">
                                                <a href="product-left-thumbnail.html" className="offer-image">
                                                    <img src="../assets/images/vegetable/product/20.png"
                                                        className="blur-up lazyload" alt="" />
                                                </a>

                                                <div className="offer-detail">
                                                    <div>
                                                        <a href="product-left-thumbnail.html" className="text-title">
                                                            <h6 className="name">Good Life Raw Peanuts</h6>
                                                        </a>
                                                        <span>500 G</span>
                                                        <h6 className="price theme-color">$ 10.00</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="offer-product">
                                                <a href="product-left-thumbnail.html" className="offer-image">
                                                    <img src="../assets/images/vegetable/product/21.png"
                                                        className="blur-up lazyload" alt="" />
                                                </a>

                                                <div className="offer-detail">
                                                    <div>
                                                        <a href="product-left-thumbnail.html" className="text-title">
                                                            <h6 className="name">TufBest Farms Moong Dal</h6>
                                                        </a>
                                                        <span>1 KG</span>
                                                        <h6 className="price theme-color">$ 10.00</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="offer-product">
                                                <a href="product-left-thumbnail.html" className="offer-image">
                                                    <img src="../assets/images/vegetable/product/22.png"
                                                        className="blur-up lazyload" alt="" />
                                                </a>

                                                <div className="offer-detail">
                                                    <div>
                                                        <a href="product-left-thumbnail.html" className="text-title">
                                                            <h6 className="name">Frooti Mango Drink</h6>
                                                        </a>
                                                        <span>160 ML</span>
                                                        <h6 className="price theme-color">$ 10.00</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="section-t-space">
                                <div className="banner-contain hover-effect">
                                    <img src="../assets/images/vegetable/banner/14.jpg" className="bg-img blur-up lazyload" alt="" />
                                    <div className="banner-details p-center banner-b-space w-100 text-center">
                                        <div>
                                            <h6 className="ls-expanded theme-color mb-sm-3 mb-1">SUMMER</h6>
                                            <h2 className="banner-title">VEGETABLE</h2>
                                            <h5 className="lh-sm mx-auto mt-1 text-content">Save up to 5% OFF</h5>
                                            {/* <button onclick="location.href = 'shop-left-sidebar.html';" className="btn btn-animation btn-sm mx-auto mt-sm-3 mt-2"> */}
                                            <button className="btn btn-animation btn-sm mx-auto mt-sm-3 mt-2">
                                                Shop Now <i
                                                    className="fa-solid fa-arrow-right icon"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="title section-t-space">
                                <h2>Featured Blog</h2>
                                <span className="title-leaf">
                                    <svg className="icon-width">
                                        <use xlinkHref="../assets/svg/leaf.svg#leaf"></use>
                                    </svg>
                                </span>
                                <p>A virtual assistant collects the products from your list</p>
                            </div>

                            <div className="slider-3-blog ratio_65 no-arrow product-wrapper">
                                <div>
                                    <div className="blog-box">
                                        <div className="blog-box-image">
                                            <a href="blog-detail.html" className="blog-image">
                                                <img src="../assets/images/vegetable/blog/1.jpg" className="bg-img blur-up lazyload"
                                                    alt="" />
                                            </a>
                                        </div>

                                        <a href="blog-detail.html" className="blog-detail">
                                            <h6>20 March, 2022</h6>
                                            <h5>Fresh Vegetable Online</h5>
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <div className="blog-box">
                                        <div className="blog-box-image">
                                            <a href="blog-detail.html" className="blog-image">
                                                <img src="../assets/images/vegetable/blog/2.jpg" className="bg-img blur-up lazyload"
                                                    alt="" />
                                            </a>
                                        </div>

                                        <a href="blog-detail.html" className="blog-detail">
                                            <h6>10 April, 2022</h6>
                                            <h5>Fresh Combo Fruit</h5>
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <div className="blog-box">
                                        <div className="blog-box-image">
                                            <a href="blog-detail.html" className="blog-image">
                                                <img src="../assets/images/vegetable/blog/3.jpg" className="bg-img blur-up lazyload"
                                                    alt="" />
                                            </a>
                                        </div>

                                        <a href="blog-detail.html" className="blog-detail">
                                            <h6>10 April, 2022</h6>
                                            <h5>Nuts to Eat for Better Health</h5>
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <div className="blog-box">
                                        <div className="blog-box-image">
                                            <a href="blog-detail.html" className="blog-image">
                                                <img src="../assets/images/vegetable/blog/1.jpg" className="bg-img blur-up lazyload"
                                                    alt="" />
                                            </a>
                                        </div>

                                        <a href="blog-detail.html" className="blog-detail">
                                            <h6>20 March, 2022</h6>
                                            <h5>Fresh Vegetable Online</h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Product Section End-- > */}

            {/* < !--Newsletter Section Start-- > */}
            <section className="newsletter-section section-b-space">
                <div className="container-fluid-lg">
                    <div className="newsletter-box newsletter-box-2">
                        <div className="newsletter-contain py-5">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-xxl-4 col-lg-5 col-md-7 col-sm-9 offset-xxl-2 offset-md-1">
                                        <div className="newsletter-detail">
                                            <h2>Join our newsletter and get...</h2>
                                            <h5>$20 discount for your first order</h5>
                                            <div className="input-box">
                                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                                    placeholder="Enter Your Email" />
                                                <i className="fa-solid fa-envelope arrow"></i>
                                                <button className="sub-btn  btn-animation">
                                                    <span className="d-sm-block d-none">Subscribe</span>
                                                    <i className="fa-solid fa-arrow-right icon"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Newsletter Section End-- > */}

            {/* < !--Footer Section Start-- > */}
            <footer className="section-t-space">
                <div className="container-fluid-lg">
                    <div className="service-section">
                        <div className="row g-3">
                            <div className="col-12">
                                <div className="service-contain">
                                    <div className="service-box">
                                        <div className="service-image">
                                            <img src="../assets/svg/product.svg" className="blur-up lazyload" alt="" />
                                        </div>

                                        <div className="service-detail">
                                            <h5>Every Fresh Products</h5>
                                        </div>
                                    </div>

                                    <div className="service-box">
                                        <div className="service-image">
                                            <img src="../assets/svg/delivery.svg" className="blur-up lazyload" alt="" />
                                        </div>

                                        <div className="service-detail">
                                            <h5>Free Delivery For Order Over $50</h5>
                                        </div>
                                    </div>

                                    <div className="service-box">
                                        <div className="service-image">
                                            <img src="../assets/svg/discount.svg" className="blur-up lazyload" alt="" />
                                        </div>

                                        <div className="service-detail">
                                            <h5>Daily Mega Discounts</h5>
                                        </div>
                                    </div>

                                    <div className="service-box">
                                        <div className="service-image">
                                            <img src="../assets/svg/market.svg" className="blur-up lazyload" alt="" />
                                        </div>

                                        <div className="service-detail">
                                            <h5>Best Price On The Market</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-footer section-b-space section-t-space">
                        <div className="row g-md-4 g-3">
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="footer-logo">
                                    <div className="theme-logo">
                                        <a href="index.html">
                                            <img src="../assets/images/logo/1.png" className="blur-up lazyload" alt="" />
                                        </a>
                                    </div>

                                    <div className="footer-logo-contain">
                                        <p>We are a friendly bar serving a variety of cocktails, wines and beers. Our bar is a
                                            perfect place for a couple.</p>

                                        <ul className="address">
                                            <li>
                                                <i data-feather="home"></i>
                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>1418 Riverwood Drive, CA 96052, US</a>
                                            </li>
                                            <li>
                                                <i data-feather="mail"></i>
                                                <a href="#" onClick={(e) => handleEmptyClick(e)}>support@fastkart.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <div className="footer-title">
                                    <h4>Categories</h4>
                                </div>

                                <div className="footer-contain">
                                    <ul>
                                        <li>
                                            <a href="shop-left-sidebar.html" className="text-content">Vegetables & Fruit</a>
                                        </li>
                                        <li>
                                            <a href="shop-left-sidebar.html" className="text-content">Beverages</a>
                                        </li>
                                        <li>
                                            <a href="shop-left-sidebar.html" className="text-content">Meats & Seafood</a>
                                        </li>
                                        <li>
                                            <a href="shop-left-sidebar.html" className="text-content">Frozen Foods</a>
                                        </li>
                                        <li>
                                            <a href="shop-left-sidebar.html" className="text-content">Biscuits & Snacks</a>
                                        </li>
                                        <li>
                                            <a href="shop-left-sidebar.html" className="text-content">Grocery & Staples</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl col-lg-2 col-sm-3">
                                <div className="footer-title">
                                    <h4>Useful Links</h4>
                                </div>

                                <div className="footer-contain">
                                    <ul>
                                        <li>
                                            <a href="index.html" className="text-content">Home</a>
                                        </li>
                                        <li>
                                            <a href="shop-left-sidebar.html" className="text-content">Shop</a>
                                        </li>
                                        <li>
                                            <a href="about-us.html" className="text-content">About Us</a>
                                        </li>
                                        <li>
                                            <a href="blog-list.html" className="text-content">Blog</a>
                                        </li>
                                        <li>
                                            <a href="contact-us.html" className="text-content">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-2 col-sm-3">
                                <div className="footer-title">
                                    <h4>Help Center</h4>
                                </div>

                                <div className="footer-contain">
                                    <ul>
                                        <li>
                                            <a href="order-success.html" className="text-content">Your Order</a>
                                        </li>
                                        <li>
                                            <a href="user-dashboard.html" className="text-content">Your Account</a>
                                        </li>
                                        <li>
                                            <a href="order-tracking.html" className="text-content">Track Order</a>
                                        </li>
                                        <li>
                                            <a href="wishlist.html" className="text-content">Your Wishlist</a>
                                        </li>
                                        <li>
                                            <a href="search.html" className="text-content">Search</a>
                                        </li>
                                        <li>
                                            <a href="faq.html" className="text-content">FAQ</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="footer-title">
                                    <h4>Contact Us</h4>
                                </div>

                                <div className="footer-contact">
                                    <ul>
                                        <li>
                                            <div className="footer-number">
                                                <i data-feather="phone"></i>
                                                <div className="contact-number">
                                                    <h6 className="text-content">Hotline 24/7 :</h6>
                                                    <h5>+91 888 104 2340</h5>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="footer-number">
                                                <i data-feather="mail"></i>
                                                <div className="contact-number">
                                                    <h6 className="text-content">Email Address :</h6>
                                                    <h5>fastkart@hotmail.com</h5>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="social-app mb-0">
                                            <h5 className="mb-2 text-content">Download App :</h5>
                                            <ul>
                                                <li className="mb-0">
                                                    <a href="https://play.google.com/store/apps" target="_blank">
                                                        <img src="../assets/images/playstore.svg" className="blur-up lazyload"
                                                            alt="" />
                                                    </a>
                                                </li>
                                                <li className="mb-0">
                                                    <a href="https://www.apple.com/in/app-store/" target="_blank">
                                                        <img src="../assets/images/appstore.svg" className="blur-up lazyload"
                                                            alt="" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sub-footer section-small-space">
                        <div className="reserve">
                            <h6 className="text-content">©2022 Fastkart All rights reserved</h6>
                        </div>

                        <div className="payment">
                            <img src="../assets/images/payment/1.png" className="blur-up lazyload" alt="" />
                        </div>

                        <div className="social-link">
                            <h6 className="text-content">Stay connected :</h6>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" target="_blank">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://in.pinterest.com/" target="_blank">
                                        <i className="fa-brands fa-pinterest-p"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!--Footer Section End-- > */}

            {/* < !--Quick View Modal Box Start-- > */}
            <div className="modal fade theme-modal view-modal" id="view" tabIndex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-sm-down">
                    <div className="modal-content">
                        <div className="modal-header p-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row g-sm-4 g-2">
                                <div className="col-lg-6">
                                    <div className="slider-image">
                                        <img src="../assets/images/product/category/1.jpg" className="img-fluid blur-up lazyload"
                                            alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="right-sidebar-modal">
                                        <h4 className="title-name">Peanut Butter Bite Premium Butter Cookies 600 g</h4>
                                        <h4 className="price">$36.99</h4>
                                        <div className="product-rating">
                                            <ul className="rating">
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star"></i>
                                                </li>
                                            </ul>
                                            <span className="ms-2">8 Reviews</span>
                                            <span className="ms-2 text-danger">6 sold in last 16 hours</span>
                                        </div>

                                        <div className="product-detail">
                                            <h4>Product Details :</h4>
                                            <p>Candy canes sugar plum tart cotton candy chupa chups sugar plum chocolate I love.
                                                Caramels marshmallow icing dessert candy canes I love soufflé I love toffee.
                                                Marshmallow pie sweet sweet roll sesame snaps tiramisu jelly bear claw. Bonbon
                                                muffin I love carrot cake sugar plum dessert bonbon.</p>
                                        </div>

                                        <ul className="brand-list">
                                            <li>
                                                <div className="brand-box">
                                                    <h5>Brand Name:</h5>
                                                    <h6>Black Forest</h6>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="brand-box">
                                                    <h5>Product Code:</h5>
                                                    <h6>W0690034</h6>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="brand-box">
                                                    <h5>Product Type:</h5>
                                                    <h6>White Cream Cake</h6>
                                                </div>
                                            </li>
                                        </ul>

                                        <div className="select-size">
                                            <h4>Cake Size :</h4>
                                            <select className="form-select select-form-size" defaultValue={"Select Size"}>
                                                <option value="1.2">1/2 KG</option>
                                                <option value="0">1 KG</option>
                                                <option value="1.5">1/5 KG</option>
                                                <option value="red">Red Roses</option>
                                                <option value="pink">With Pink Roses</option>
                                            </select>
                                        </div>

                                        <div className="modal-button">
                                            {/* <button onclick="location.href = 'cart.html';" className="btn btn-md add-cart-button icon"> */}
                                            <button className="btn btn-md add-cart-button icon">
                                                Add
                                                To Cart</button>
                                            {/* <button onclick="location.href = 'product-left.html';" className="btn theme-bg-color view-button icon text-white fw-bold btn-md"> */}
                                            <button className="btn theme-bg-color view-button icon text-white fw-bold btn-md">
                                                View More Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Quick View Modal Box End-- > */}

            {/* < !--Location Modal Start-- > */}
            <div className="modal location-modal fade theme-modal" id="locationModal" tabIndex="-1"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Choose your Delivery Location</h5>
                            <p className="mt-1 text-content">Enter your address and we will specify the offer for your area.</p>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="location-list">
                                <div className="search-input">
                                    <input type="search" className="form-control" placeholder="Search Your Area" />
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>

                                <div className="disabled-box">
                                    <h6>Select a Location</h6>
                                </div>

                                <ul className="location-select custom-height">
                                    <li>
                                        <a href="#" onClick={(e) => handleEmptyClick(e)}>
                                            <h6>Alabama</h6>
                                            <span>Min: $130</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" onClick={(e) => handleEmptyClick(e)}>
                                            <h6>Arizona</h6>
                                            <span>Min: $150</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" onClick={(e) => handleEmptyClick(e)}>
                                            <h6>California</h6>
                                            <span>Min: $110</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" onClick={(e) => handleEmptyClick(e)}>
                                            <h6>Colorado</h6>
                                            <span>Min: $140</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" onClick={(e) => handleEmptyClick(e)}>
                                            <h6>Florida</h6>
                                            <span>Min: $160</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" onClick={(e) => handleEmptyClick(e)}>
                                            <h6>Georgia</h6>
                                            <span>Min: $120</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" onClick={(e) => handleEmptyClick(e)}>
                                            <h6>Kansas</h6>
                                            <span>Min: $170</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" onClick={(e) => handleEmptyClick(e)}>
                                            <h6>Minnesota</h6>
                                            <span>Min: $120</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" onClick={(e) => handleEmptyClick(e)}>
                                            <h6>New York</h6>
                                            <span>Min: $110</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" onClick={(e) => handleEmptyClick(e)}>
                                            <h6>Washington</h6>
                                            <span>Min: $130</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Location Modal End-- > */}

            {/* < !--Cookie Bar Box Start-- > */}
            <div className="cookie-bar-box">
                <div className="cookie-box">
                    <div className="cookie-image">
                        <img src="../assets/images/cookie-bar.png" className="blur-up lazyload" alt="" />
                        <h2>Cookies!</h2>
                    </div>

                    <div className="cookie-contain">
                        <h5 className="text-content">We use cookies to make your experience better</h5>
                    </div>
                </div>

                <div className="button-group">
                    <button className="btn privacy-button">Privacy Policy</button>
                    <button className="btn ok-button">OK</button>
                </div>
            </div>
            {/* <!--Cookie Bar Box End-- > */}

            {/* < !--Deal Box Modal Start-- > */}
            <div className="modal fade theme-modal deal-modal" id="deal-box" tabIndex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div>
                                <h5 className="modal-title w-100" id="deal_today">Deal Today</h5>
                                <p className="mt-1 text-content">Recommended deals for you.</p>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="deal-offer-box">
                                <ul className="deal-offer-list">
                                    <li className="list-1">
                                        <div className="deal-offer-contain">
                                            <a href="shop-left-sidebar.html" className="deal-image">
                                                <img src="../assets/images/vegetable/product/10.png" className="blur-up lazyload"
                                                    alt="" />
                                            </a>

                                            <a href="shop-left-sidebar.html" className="deal-contain">
                                                <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                                <h6>$52.57 <del>57.62</del> <span>500 G</span></h6>
                                            </a>
                                        </div>
                                    </li>

                                    <li className="list-2">
                                        <div className="deal-offer-contain">
                                            <a href="shop-left-sidebar.html" className="deal-image">
                                                <img src="../assets/images/vegetable/product/11.png" className="blur-up lazyload"
                                                    alt="" />
                                            </a>

                                            <a href="shop-left-sidebar.html" className="deal-contain">
                                                <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                                <h6>$52.57 <del>57.62</del> <span>500 G</span></h6>
                                            </a>
                                        </div>
                                    </li>

                                    <li className="list-3">
                                        <div className="deal-offer-contain">
                                            <a href="shop-left-sidebar.html" className="deal-image">
                                                <img src="../assets/images/vegetable/product/12.png" className="blur-up lazyload"
                                                    alt="" />
                                            </a>

                                            <a href="shop-left-sidebar.html" className="deal-contain">
                                                <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                                <h6>$52.57 <del>57.62</del> <span>500 G</span></h6>
                                            </a>
                                        </div>
                                    </li>

                                    <li className="list-1">
                                        <div className="deal-offer-contain">
                                            <a href="shop-left-sidebar.html" className="deal-image">
                                                <img src="../assets/images/vegetable/product/13.png" className="blur-up lazyload"
                                                    alt="" />
                                            </a>

                                            <a href="shop-left-sidebar.html" className="deal-contain">
                                                <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                                <h6>$52.57 <del>57.62</del> <span>500 G</span></h6>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Deal Box Modal End-- > */}

            {/* < !--Tap to top start-- > */}
            <div className="theme-option">
                <div className="setting-box">
                    <button className="btn setting-button">
                        <i className="fa-solid fa-gear"></i>
                    </button>

                    <div className="theme-setting-2">
                        <div className="theme-box">
                            <ul>
                                <li>
                                    <div className="setting-name">
                                        <h4>Color</h4>
                                    </div>
                                    <div className="theme-setting-button color-picker">
                                        <form className="form-control">
                                            <label htmlFor="colorPick" className="form-label mb-0">Theme Color</label>
                                            <input type="color" className="form-control form-control-color" id="colorPick" onChange={(e) => { e.preventDefault() }}
                                                value="#0da487" title="Choose your color" />
                                        </form>
                                    </div>
                                </li>

                                <li>
                                    <div className="setting-name">
                                        <h4>Dark</h4>
                                    </div>
                                    <div className="theme-setting-button">
                                        <button className="btn btn-2 outline" id="darkButton">Dark</button>
                                        <button className="btn btn-2 unline" id="lightButton">Light</button>
                                    </div>
                                </li>

                                <li>
                                    <div className="setting-name">
                                        <h4>RTL</h4>
                                    </div>
                                    <div className="theme-setting-button rtl">
                                        <button className="btn btn-2 rtl-unline">LTR</button>
                                        <button className="btn btn-2 rtl-outline">RTL</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="back-to-top">
                    <a id="back-to-top" href="#">
                        <i className="fas fa-chevron-up"></i>
                    </a>
                </div>
            </div>
            <div className="setting-box buy-now mt-2">
                <a
                    className="btn setting-button"
                    href="https://1.envato.market/gbvkjA"
                    target="_blank"
                >
                    <i className="fa-solid fa fa-cart-flatbed"></i>
                </a>
            </div>
            <div className="bg-overlay"></div>

            {/* <script src="../assets/js/jquery-3.6.0.min.js"></script>
            <script src="../assets/js/jquery-ui.min.js"></script>
            <script src="../assets/js/bootstrap/bootstrap.bundle.min.js"></script>
            <script src="../assets/js/bootstrap/bootstrap-notify.min.js"></script>
            <script src="../assets/js/bootstrap/popper.min.js"></script>
            <script src="../assets/js/feather/feather.min.js"></script>
            <script src="../assets/js/feather/feather-icon.js"></script>
            <script src="../assets/js/lazysizes.min.js"></script>
            <script src="../assets/js/slick/slick.js"></script>
            <script src="../assets/js/slick/slick-animation.min.js"></script>
            <script src="../assets/js/slick/custom_slick.js"></script>
            <script src="../assets/js/auto-height.js"></script>
            <script src="../assets/js/timer1.js"></script>
            <script src="../assets/js/fly-cart.js"></script>
            <script src="../assets/js/quantity-2.js"></script>
            <script src="../assets/js/wow.min.js"></script>
            <script src="../assets/js/custom-wow.js"></script>
            <script src="../assets/js/script.js"></script>
            <script src="../assets/js/theme-setting.js"></script> */}
        </>
    );
}

export default Home;