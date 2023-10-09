export const FoodCupboard = () => {
  function handleEmptyClick(e) {
    e.preventDefault();
  }
  return (
    <>
      <div className="title d-block">
        <h2>Food Cupboard</h2>
        <span className="title-leaf">
          <svg className="icon-width">
            <use xlinkHref="./assets/svg/leaf.svg#leaf"></use>
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
                      <img
                        src="./assets/images/vegetable/product/1.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="View"
                      >
                        <a
                          href="#"
                          onClick={(e) => handleEmptyClick(e)}
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i data-feather="eye"></i>
                        </a>
                      </li>

                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i data-feather="refresh-cw"></i>
                        </a>
                      </li>

                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Wishlist"
                      >
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
                      <button className="btn btn-add-cart addcart-button">
                        Add
                        <span className="add-icon">
                          <i className="fa-solid fa-plus"></i>
                        </span>
                      </button>
                      <div className="cart_qty qty-box">
                        <div className="input-group">
                          <button
                            type="button"
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa fa-minus" aria-hidden="true"></i>
                          </button>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            onChange={(e) => {
                              e.preventDefault();
                            }}
                            value="0"
                          />
                          <button
                            type="button"
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
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
                      <img
                        src="./assets/images/vegetable/product/2.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="View"
                      >
                        <a
                          href="#"
                          onClick={(e) => handleEmptyClick(e)}
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i data-feather="eye"></i>
                        </a>
                      </li>

                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i data-feather="refresh-cw"></i>
                        </a>
                      </li>

                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Wishlist"
                      >
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
                      <button className="btn btn-add-cart addcart-button">
                        Add
                        <span className="add-icon">
                          <i className="fa-solid fa-plus"></i>
                        </span>
                      </button>
                      <div className="cart_qty qty-box">
                        <div className="input-group">
                          <button
                            type="button"
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa fa-minus" aria-hidden="true"></i>
                          </button>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            onChange={(e) => {
                              e.preventDefault();
                            }}
                            value="0"
                          />
                          <button
                            type="button"
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
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
                      <img
                        src="./assets/images/vegetable/product/3.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="View"
                      >
                        <a
                          href="#"
                          onClick={(e) => handleEmptyClick(e)}
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i data-feather="eye"></i>
                        </a>
                      </li>

                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i data-feather="refresh-cw"></i>
                        </a>
                      </li>

                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Wishlist"
                      >
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
                      <button className="btn btn-add-cart addcart-button">
                        Add
                        <span className="add-icon">
                          <i className="fa-solid fa-plus"></i>
                        </span>
                      </button>
                      <div className="cart_qty qty-box">
                        <div className="input-group">
                          <button
                            type="button"
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa fa-minus" aria-hidden="true"></i>
                          </button>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            onChange={(e) => {
                              e.preventDefault();
                            }}
                            value="0"
                          />
                          <button
                            type="button"
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
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
                      <img
                        src="./assets/images/vegetable/product/4.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="View"
                      >
                        <a
                          href="#"
                          onClick={(e) => handleEmptyClick(e)}
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i data-feather="eye"></i>
                        </a>
                      </li>

                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i data-feather="refresh-cw"></i>
                        </a>
                      </li>

                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Wishlist"
                      >
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
                      <button className="btn btn-add-cart addcart-button">
                        Add
                        <span className="add-icon">
                          <i className="fa-solid fa-plus"></i>
                        </span>
                      </button>
                      <div className="cart_qty qty-box">
                        <div className="input-group">
                          <button
                            type="button"
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa fa-minus" aria-hidden="true"></i>
                          </button>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            onChange={(e) => {
                              e.preventDefault();
                            }}
                            value="0"
                          />
                          <button
                            type="button"
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
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
                      <img
                        src="./assets/images/vegetable/product/5.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="View"
                      >
                        <a
                          href="#"
                          onClick={(e) => handleEmptyClick(e)}
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i data-feather="eye"></i>
                        </a>
                      </li>

                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i data-feather="refresh-cw"></i>
                        </a>
                      </li>

                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Wishlist"
                      >
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
                      <button className="btn btn-add-cart addcart-button">
                        Add
                        <span className="add-icon">
                          <i className="fa-solid fa-plus"></i>
                        </span>
                      </button>
                      <div className="cart_qty qty-box">
                        <div className="input-group">
                          <button
                            type="button"
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa fa-minus" aria-hidden="true"></i>
                          </button>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            onChange={(e) => {
                              e.preventDefault();
                            }}
                            value="0"
                          />
                          <button
                            type="button"
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
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
                      <img
                        src="./assets/images/vegetable/product/4.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>
                    <ul className="product-option">
                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="View"
                      >
                        <a
                          href="#"
                          onClick={(e) => handleEmptyClick(e)}
                          data-bs-toggle="modal"
                          data-bs-target="#view"
                        >
                          <i data-feather="eye"></i>
                        </a>
                      </li>

                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <a href="compare.html">
                          <i data-feather="refresh-cw"></i>
                        </a>
                      </li>

                      <li
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Wishlist"
                      >
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
                      <button className="btn btn-add-cart addcart-button">
                        Add
                        <span className="add-icon">
                          <i className="fa-solid fa-plus"></i>
                        </span>
                      </button>
                      <div className="cart_qty qty-box">
                        <div className="input-group">
                          <button
                            type="button"
                            className="qty-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            <i className="fa fa-minus" aria-hidden="true"></i>
                          </button>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            onChange={(e) => {
                              e.preventDefault();
                            }}
                            value="0"
                          />
                          <button
                            type="button"
                            className="qty-right-plus"
                            data-type="plus"
                            data-field=""
                          >
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
          <img
            src="./assets/images/vegetable/banner/15.jpg"
            className="bg-img blur-up lazyload"
            alt=""
          />
          <div className="banner-details p-center p-4 text-white text-center">
            <div>
              <h3 className="lh-base fw-bold offer-text">
                Get $3 Cashback! Min Order of $30
              </h3>
              <h6 className="coupon-code">Use Code : GROCERY1920</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="section-t-space section-b-space">
        <div className="row g-md-4 g-3">
          <div className="col-xxl-8 col-xl-12 col-md-7">
            <div className="banner-contain hover-effect">
              <img
                src="./assets/images/vegetable/banner/12.jpg"
                className="bg-img blur-up lazyload"
                alt=""
              />
              <div className="banner-details p-center-left p-4">
                <div>
                  <h2 className="text-kaushan fw-normal theme-color">
                    Get Ready To
                  </h2>
                  <h3 className="mt-2 mb-3">TAKE ON THE DAY!</h3>
                  <p className="text-content banner-text">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate.
                  </p>
                  {/* <button onclick="location.href = 'shop-left-sidebar.html';" className="btn btn-animation btn-sm mend-auto"> */}
                  <button className="btn btn-animation btn-sm mend-auto">
                    Shop Now <i className="fa-solid fa-arrow-right icon"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-4 col-xl-12 col-md-5">
            <a
              href="shop-left-sidebar.html"
              className="banner-contain hover-effect h-100"
            >
              <img
                src="./assets/images/vegetable/banner/13.jpg"
                className="bg-img blur-up lazyload"
                alt=""
              />
              <div className="banner-details p-center-left p-4 h-100">
                <div>
                  <h2 className="text-kaushan fw-normal text-danger">
                    20% Off
                  </h2>
                  <h3 className="mt-2 mb-2 theme-color">SUMMRY</h3>
                  <h3 className="fw-normal product-name text-title">Product</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
