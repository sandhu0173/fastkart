import React from "react";

const ProductSection = () => {
    return (
        <>
            <div
                className="row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section">
                <div>
                    <div className="product-box-3 h-100 wow fadeInUp">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/cake/product/2.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>

                                <ul className="product-option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                        <a href="#" data-bs-toggle="modal"
                                            data-bs-target="#view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                        <a href="wishlist.html" className="notifi-wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-footer">
                            <div className="product-detail">
                                <span className="span-name">Vegetable</span>
                                <a href="product-left-thumbnail.html">
                                    <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                                </a>
                                <p className="text-content mt-1 mb-2 product-content">Cheesy feet cheesy grin brie.
                                    Mascarpone cheese and wine hard cheese the big cheese everyone loves smelly
                                    cheese macaroni cheese croque monsieur.</p>
                                <div className="product-rating mt-2">
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
                                    <span>(4.0)</span>
                                </div>
                                <h6 className="unit">250 ml</h6>
                                <h5 className="price"><span className="theme-color">$08.02</span> <del>$15.15</del>
                                </h5>
                                <div className="add-to-cart-box bg-white">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon bg-light-gray">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group bg-white">
                                            <button type="button" className="qty-left-minus bg-gray"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus bg-gray"
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

                <div>
                    <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.05s">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/cake/product/3.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>

                                <ul className="product-option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                        <a href="#" data-bs-toggle="modal"
                                            data-bs-target="#view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                        <a href="wishlist.html" className="notifi-wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-footer">
                            <div className="product-detail">
                                <span className="span-name">Vegetable</span>
                                <a href="product-left-thumbnail.html">
                                    <h5 className="name">Peanut Butter Bite Premium Butter Cookies 600 g</h5>
                                </a>
                                <p className="text-content mt-1 mb-2 product-content">Feta taleggio croque monsieur
                                    swiss manchego cheesecake dolcelatte jarlsberg. Hard cheese danish fontina
                                    boursin melted cheese fondue.</p>
                                <div className="product-rating mt-2">
                                    <ul className="rating">
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <span>(2.4)</span>
                                </div>
                                <h6 className="unit">350 G</h6>
                                <h5 className="price"><span className="theme-color">$04.33</span> <del>$10.36</del>
                                </h5>
                                <div className="add-to-cart-box bg-white">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon bg-light-gray">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group bg-white">
                                            <button type="button" className="qty-left-minus bg-gray"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus bg-gray"
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

                <div>
                    <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/cake/product/4.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>

                                <ul className="product-option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                        <a href="#" data-bs-toggle="modal"
                                            data-bs-target="#view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                        <a href="wishlist.html" className="notifi-wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-footer">
                            <div className="product-detail">
                                <span className="span-name">Snacks</span>
                                <a href="product-left-thumbnail.html">
                                    <h5 className="name">SnackAmor Combo Pack of Jowar Stick and Jowar Chips</h5>
                                </a>
                                <p className="text-content mt-1 mb-2 product-content">Lancashire hard cheese
                                    parmesan. Danish fontina mozzarella cream cheese smelly cheese cheese and
                                    wine cheesecake dolcelatte stilton. Cream cheese parmesan who moved my
                                    cheese when the cheese comes out everybody's happy cream cheese red
                                    leicester ricotta edam.</p>
                                <div className="product-rating mt-2">
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
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                    </ul>
                                    <span>(5.0)</span>
                                </div>
                                <h6 className="unit">570 G</h6>
                                <h5 className="price"><span className="theme-color">$12.52</span> <del>$13.62</del>
                                </h5>
                                <div className="add-to-cart-box bg-white">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon bg-light-gray">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group bg-white">
                                            <button type="button" className="qty-left-minus bg-gray"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus bg-gray"
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

                <div>
                    <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.15s">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/cake/product/5.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>

                                <ul className="product-option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                        <a href="#" data-bs-toggle="modal"
                                            data-bs-target="#view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                        <a href="wishlist.html" className="notifi-wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-footer">
                            <div className="product-detail">
                                <span className="span-name">Snacks</span>
                                <a href="product-left-thumbnail.html">
                                    <h5 className="name">Yumitos Chilli Sprinkled Potato Chips 100 g</h5>
                                </a>
                                <p className="text-content mt-1 mb-2 product-content">Cheddar cheddar pecorino hard
                                    cheese hard cheese cheese and biscuits bocconcini babybel. Cow goat paneer
                                    cream cheese fromage cottage cheese cauliflower cheese jarlsberg.</p>
                                <div className="product-rating mt-2">
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
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <span>(3.8)</span>
                                </div>
                                <h6 className="unit">100 G</h6>
                                <h5 className="price"><span className="theme-color">$10.25</span> <del>$12.36</del>
                                </h5>
                                <div className="add-to-cart-box bg-white">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon bg-light-gray">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group bg-white">
                                            <button type="button" className="qty-left-minus bg-gray"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus bg-gray"
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

                <div>
                    <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/cake/product/6.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>

                                <ul className="product-option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                        <a href="#" data-bs-toggle="modal"
                                            data-bs-target="#view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                        <a href="wishlist.html" className="notifi-wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-footer">
                            <div className="product-detail">
                                <span className="span-name">Vegetable</span>
                                <a href="product-left-thumbnail.html">
                                    <h5 className="name">Fantasy Crunchy Choco Chip Cookies</h5>
                                </a>
                                <p className="text-content mt-1 mb-2 product-content">Bavarian bergkase smelly
                                    cheese swiss cut the cheese lancashire who moved my cheese manchego melted
                                    cheese. Red leicester paneer cow when the cheese comes out everybody's happy
                                    croque monsieur goat melted cheese port-salut.</p>
                                <div className="product-rating mt-2">
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
                                    <span>(4.0)</span>
                                </div>

                                <h6 className="unit">550 G</h6>

                                <h5 className="price"><span className="theme-color">$14.25</span> <del>$16.57</del>
                                </h5>
                                <div className="add-to-cart-box bg-white">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon bg-light-gray">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group bg-white">
                                            <button type="button" className="qty-left-minus bg-gray"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus bg-gray"
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

                <div>
                    <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.25s">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/cake/product/7.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>

                                <ul className="product-option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                        <a href="#" data-bs-toggle="modal"
                                            data-bs-target="#view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                        <a href="wishlist.html" className="notifi-wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-footer">
                            <div className="product-detail">
                                <span className="span-name">Vegetable</span>
                                <a href="product-left-thumbnail.html">
                                    <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                                </a>
                                <p className="text-content mt-1 mb-2 product-content">Melted cheese babybel chalk
                                    and cheese. Port-salut port-salut cream cheese when the cheese comes out
                                    everybody's happy cream cheese hard cheese cream cheese red leicester.</p>
                                <div className="product-rating mt-2">
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
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <span>(3.8)</span>
                                </div>

                                <h6 className="unit">1 Kg</h6>

                                <h5 className="price"><span className="theme-color">$12.68</span> <del>$14.69</del>
                                </h5>
                                <div className="add-to-cart-box bg-white">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon bg-light-gray">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group bg-white">
                                            <button type="button" className="qty-left-minus bg-gray"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus bg-gray"
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

                <div>
                    <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/cake/product/2.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>

                                <ul className="product-option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                        <a href="#" data-bs-toggle="modal"
                                            data-bs-target="#view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                        <a href="wishlist.html" className="notifi-wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-footer">
                            <div className="product-detail">
                                <span className="span-name">Vegetable</span>
                                <a href="product-left-thumbnail.html">
                                    <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                                </a>
                                <p className="text-content mt-1 mb-2 product-content">Squirty cheese cottage cheese
                                    cheese strings. Red leicester paneer danish fontina queso lancashire when
                                    the cheese comes out everybody's happy cottage cheese paneer.</p>
                                <div className="product-rating mt-2">
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
                                    <span>(4.0)</span>
                                </div>
                                <h6 className="unit">250 ml</h6>
                                <h5 className="price"><span className="theme-color">$08.02</span> <del>$15.15</del>
                                </h5>
                                <div className="add-to-cart-box bg-white">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon bg-light-gray">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group bg-white">
                                            <button type="button" className="qty-left-minus bg-gray"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus bg-gray"
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

                <div>
                    <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.35s">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/cake/product/3.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>

                                <ul className="product-option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                        <a href="#" data-bs-toggle="modal"
                                            data-bs-target="#view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                        <a href="wishlist.html" className="notifi-wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-footer">
                            <div className="product-detail">
                                <span className="span-name">Vegetable</span>
                                <a href="product-left-thumbnail.html">
                                    <h5 className="name">Peanut Butter Bite Premium Butter Cookies 600 g</h5>
                                </a>
                                <p className="text-content mt-1 mb-2 product-content">Swiss ricotta cauliflower
                                    cheese squirty cheese cheesy grin camembert de normandie airedale edam.
                                    Squirty cheese babybel cheesecake the big cheese cauliflower cheese hard
                                    cheese cheese and biscuits cheese and wine.</p>
                                <div className="product-rating mt-2">
                                    <ul className="rating">
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <span>(2.4)</span>
                                </div>
                                <h6 className="unit">350 G</h6>
                                <h5 className="price"><span className="theme-color">$04.33</span> <del>$10.36</del>
                                </h5>
                                <div className="add-to-cart-box bg-white">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon bg-light-gray">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group bg-white">
                                            <button type="button" className="qty-left-minus bg-gray"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus bg-gray"
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

                <div>
                    <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/cake/product/4.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>

                                <ul className="product-option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                        <a href="#" data-bs-toggle="modal"
                                            data-bs-target="#view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                        <a href="wishlist.html" className="notifi-wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-footer">
                            <div className="product-detail">
                                <span className="span-name">Snacks</span>
                                <a href="product-left-thumbnail.html">
                                    <h5 className="name">SnackAmor Combo Pack of Jowar Stick and Jowar Chips</h5>
                                </a>
                                <p className="text-content mt-1 mb-2 product-content">Boursin the big cheese
                                    cheeseburger. Jarlsberg smelly cheese chalk and cheese gouda blue castello
                                    monterey jack swiss boursin. Halloumi cheesy feet mozzarella red leicester
                                    paneer boursin who moved my cheese croque monsieur.</p>
                                <div className="product-rating mt-2">
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
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                    </ul>
                                    <span>(5.0)</span>
                                </div>
                                <h6 className="unit">570 G</h6>
                                <h5 className="price"><span className="theme-color">$12.52</span> <del>$13.62</del>
                                </h5>
                                <div className="add-to-cart-box bg-white">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon bg-light-gray">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group bg-white">
                                            <button type="button" className="qty-left-minus bg-gray"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus bg-gray"
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

                <div>
                    <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.45s">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/cake/product/5.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>

                                <ul className="product-option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                        <a href="#" data-bs-toggle="modal"
                                            data-bs-target="#view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                        <a href="wishlist.html" className="notifi-wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-footer">
                            <div className="product-detail">
                                <span className="span-name">Snacks</span>
                                <a href="product-left-thumbnail.html">
                                    <h5 className="name">Yumitos Chilli Sprinkled Potato Chips 100 g</h5>
                                </a>
                                <p className="text-content mt-1 mb-2 product-content">Halloumi mozzarella monterey
                                    jack smelly cheese emmental bocconcini when the cheese comes out everybody's
                                    happy pecorino. Cut the cheese stilton danish fontina cheesy grin rubber
                                    cheese smelly cheese roquefort paneer.</p>
                                <div className="product-rating mt-2">
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
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <span>(3.8)</span>
                                </div>
                                <h6 className="unit">100 G</h6>
                                <h5 className="price"><span className="theme-color">$10.25</span> <del>$12.36</del>
                                </h5>
                                <div className="add-to-cart-box bg-white">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon bg-light-gray">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group bg-white">
                                            <button type="button" className="qty-left-minus bg-gray"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus bg-gray"
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

                <div>
                    <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/cake/product/6.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>

                                <ul className="product-option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                        <a href="#" data-bs-toggle="modal"
                                            data-bs-target="#view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                        <a href="wishlist.html" className="notifi-wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-footer">
                            <div className="product-detail">
                                <span className="span-name">Vegetable</span>
                                <a href="product-left-thumbnail.html">
                                    <h5 className="name">Fantasy Crunchy Choco Chip Cookies</h5>
                                </a>
                                <p className="text-content mt-1 mb-2 product-content">Manchego cow cheddar.
                                    Port-salut roquefort hard cheese babybel when the cheese comes out
                                    everybody's happy brie dolcelatte croque monsieur.</p>
                                <div className="product-rating mt-2">
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
                                    <span>(4.0)</span>
                                </div>

                                <h6 className="unit">550 G</h6>

                                <h5 className="price"><span className="theme-color">$14.25</span> <del>$16.57</del>
                                </h5>
                                <div className="add-to-cart-box bg-white">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon bg-light-gray">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group bg-white">
                                            <button type="button" className="qty-left-minus bg-gray"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus bg-gray"
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

                <div>
                    <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.55s">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/cake/product/7.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>

                                <ul className="product-option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                        <a href="#" data-bs-toggle="modal"
                                            data-bs-target="#view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                        <a href="wishlist.html" className="notifi-wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-footer">
                            <div className="product-detail">
                                <span className="span-name">Vegetable</span>
                                <a href="product-left-thumbnail.html">
                                    <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                                </a>
                                <p className="text-content mt-1 mb-2 product-content">Roquefort say cheese the big
                                    cheese ricotta chalk and cheese when the cheese comes out everybody's happy
                                    brie lancashire.</p>
                                <div className="product-rating mt-2">
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
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <span>(3.8)</span>
                                </div>

                                <h6 className="unit">1 Kg</h6>

                                <h5 className="price"><span className="theme-color">$12.68</span> <del>$14.69</del>
                                </h5>
                                <div className="add-to-cart-box bg-white">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon bg-light-gray">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group bg-white">
                                            <button type="button" className="qty-left-minus bg-gray"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus bg-gray"
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

                <div>
                    <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.6">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/cake/product/2.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>

                                <ul className="product-option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                        <a href="#" data-bs-toggle="modal"
                                            data-bs-target="#view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                        <a href="wishlist.html" className="notifi-wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-footer">
                            <div className="product-detail">
                                <span className="span-name">Vegetable</span>
                                <a href="product-left-thumbnail.html">
                                    <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                                </a>
                                <p className="text-content mt-1 mb-2 product-content">Lancashire when the cheese
                                    comes out everybody's happy blue castello halloumi boursin stinking bishop
                                    pecorino fromage frais.</p>
                                <div className="product-rating mt-2">
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
                                    <span>(4.0)</span>
                                </div>
                                <h6 className="unit">250 ml</h6>
                                <h5 className="price"><span className="theme-color">$08.02</span> <del>$15.15</del>
                                </h5>
                                <div className="add-to-cart-box bg-white">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon bg-light-gray">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group bg-white">
                                            <button type="button" className="qty-left-minus bg-gray"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus bg-gray"
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

                <div>
                    <div className="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.65s">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/cake/product/3.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>

                                <ul className="product-option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                        <a href="#" data-bs-toggle="modal"
                                            data-bs-target="#view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                        <a href="wishlist.html" className="notifi-wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-footer">
                            <div className="product-detail">
                                <span className="span-name">Vegetable</span>
                                <a href="product-left-thumbnail.html">
                                    <h5 className="name">Peanut Butter Bite Premium Butter Cookies 600 g</h5>
                                </a>
                                <p className="text-content mt-1 mb-2 product-content">Say cheese cheese and biscuits
                                    feta. Queso bocconcini danish fontina camembert de normandie brie airedale
                                    ricotta feta. Pecorino edam gouda caerphilly croque monsieur red leicester
                                    cheese triangles caerphilly.</p>
                                <div className="product-rating mt-2">
                                    <ul className="rating">
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <span>(2.4)</span>
                                </div>
                                <h6 className="unit">350 G</h6>
                                <h5 className="price"><span className="theme-color">$04.33</span> <del>$10.36</del>
                                </h5>
                                <div className="add-to-cart-box bg-white">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon bg-light-gray">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group bg-white">
                                            <button type="button" className="qty-left-minus bg-gray"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus bg-gray"
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
            <nav class="custome-pagination">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                            <i class="fa-solid fa-angles-left"></i>
                        </a>
                    </li>
                    <li class="page-item active">
                        <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item" aria-current="page">
                        <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">
                            <i class="fa-solid fa-angles-right"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default ProductSection;