export const TopSaveToday = () =>{
    function handleEmptyClick(e){
        e.preventDefault();
    }
    return (
        <>
                                    <div className="title title-flex">
                                <div>
                                    <h2>Top Save Today</h2>
                                    <span className="title-leaf">
                                        <svg className="icon-width">
                                            <use xlinkHref="./assets/svg/leaf.svg#leaf"></use>
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
                                                                <img src="./assets/images/vegetable/product/1.png"
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
                                                                <img src="./assets/images/vegetable/product/2.png"
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
                                                                <img src="./assets/images/vegetable/product/3.png"
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
                                                                <img src="./assets/images/vegetable/product/4.png"
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
                                                                <img src="./assets/images/vegetable/product/5.png"
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
                                                                <img src="./assets/images/vegetable/product/6.png"
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
                                                                <img src="./assets/images/vegetable/product/7.png"
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
                                                                <img src="./assets/images/vegetable/product/8.png"
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
                                                                <img src="./assets/images/vegetable/product/9.png"
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
                                                                <img src="./assets/images/vegetable/product/10.png"
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
                                                                <img src="./assets/images/vegetable/product/3.png"
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
                                                                <img src="./assets/images/vegetable/product/5.png"
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
        </>
    );
}