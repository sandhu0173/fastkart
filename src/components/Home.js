import React, { useEffect, useState } from "react";
import Header from "./Header";
import CookieBar from "./CookieBar";
import Loader from "./Loader";
import MobileMenu from "./MobileMenu";
import HomeSection from "./Home/HomeSection";
import BannerSection from "./Home/BannerSection";
import ProductSection from "./Home/ProductSection";
import { Footer } from "./Footer";
import { NewsletterSection } from "./NewsletterSection";
import { Button } from "bootstrap";
import { useNavigate } from "react-router-dom";
const feather = require("feather-icons");

const Home = () => {
  function handleEmptyClick(e) {
    e.preventDefault();
    // Your custom logic here
  }

  const navigate = useNavigate();

  useEffect(() => {
    feather.replace();
  }, []);
  return (
    // Header Start
    <>
      <MobileMenu />
      <HomeSection />
      <BannerSection />
      <ProductSection />
      <NewsletterSection />

      {/* < !--Quick View Modal Box Start-- > */}
      <div
        className="modal fade theme-modal view-modal"
        id="view"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header p-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="row g-sm-4 g-2">
                <div className="col-lg-6">
                  <div className="slider-image">
                    <img
                      src="./assets/images/product/category/1.jpg"
                      className="img-fluid blur-up lazyload"
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="right-sidebar-modal">
                    <h4 className="title-name">
                      Peanut Butter Bite Premium Butter Cookies 600 g
                    </h4>
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
                      <span className="ms-2 text-danger">
                        6 sold in last 16 hours
                      </span>
                    </div>

                    <div className="product-detail">
                      <h4>Product Details :</h4>
                      <p>
                        Candy canes sugar plum tart cotton candy chupa chups
                        sugar plum chocolate I love. Caramels marshmallow icing
                        dessert candy canes I love soufflé I love toffee.
                        Marshmallow pie sweet sweet roll sesame snaps tiramisu
                        jelly bear claw. Bonbon muffin I love carrot cake sugar
                        plum dessert bonbon.
                      </p>
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
                      <select
                        className="form-select select-form-size"
                        defaultValue={"Select Size"}
                      >
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
                        Add To Cart
                      </button>
                      {/* <button onclick="location.href = 'product-left.html';" className="btn theme-bg-color view-button icon text-white fw-bold btn-md"> */}
                      <button className="btn theme-bg-color view-button icon text-white fw-bold btn-md">
                        View More Details
                      </button>
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
      <div
        className="modal location-modal fade theme-modal"
        id="locationModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Choose your Delivery Location
              </h5>
              <p className="mt-1 text-content">
                Enter your address and we will specify the offer for your area.
              </p>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="location-list">
                <div className="search-input">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search Your Area"
                  />
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

      <CookieBar />

      {/* < !--Deal Box Modal Start-- > */}
      <div
        className="modal fade theme-modal deal-modal"
        id="deal-box"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h5 className="modal-title w-100" id="deal_today">
                  Deal Today
                </h5>
                <p className="mt-1 text-content">Recommended deals for you.</p>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="deal-offer-box">
                <ul className="deal-offer-list">
                  <li className="list-1">
                    <div className="deal-offer-contain">
                      <a href="shop-left-sidebar.html" className="deal-image">
                        <img
                          src="./assets/images/vegetable/product/10.png"
                          className="blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <a href="shop-left-sidebar.html" className="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </a>
                    </div>
                  </li>

                  <li className="list-2">
                    <div className="deal-offer-contain">
                      <a href="shop-left-sidebar.html" className="deal-image">
                        <img
                          src="./assets/images/vegetable/product/11.png"
                          className="blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <a href="shop-left-sidebar.html" className="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </a>
                    </div>
                  </li>

                  <li className="list-3">
                    <div className="deal-offer-contain">
                      <a href="shop-left-sidebar.html" className="deal-image">
                        <img
                          src="./assets/images/vegetable/product/12.png"
                          className="blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <a href="shop-left-sidebar.html" className="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
                      </a>
                    </div>
                  </li>

                  <li className="list-1">
                    <div className="deal-offer-contain">
                      <a href="shop-left-sidebar.html" className="deal-image">
                        <img
                          src="./assets/images/vegetable/product/13.png"
                          className="blur-up lazyload"
                          alt=""
                        />
                      </a>

                      <a href="shop-left-sidebar.html" className="deal-contain">
                        <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                        <h6>
                          $52.57 <del>57.62</del> <span>500 G</span>
                        </h6>
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
                      <label htmlFor="colorPick" className="form-label mb-0">
                        Theme Color
                      </label>
                      <input
                        type="color"
                        className="form-control form-control-color"
                        id="colorPick"
                        onChange={(e) => {
                          e.preventDefault();
                        }}
                        value="#0da487"
                        title="Choose your color"
                      />
                    </form>
                  </div>
                </li>

                <li>
                  <div className="setting-name">
                    <h4>Dark</h4>
                  </div>
                  <div className="theme-setting-button">
                    <button className="btn btn-2 outline" id="darkButton">
                      Dark
                    </button>
                    <button className="btn btn-2 unline" id="lightButton">
                      Light
                    </button>
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
    </>
  );
};

export default Home;
