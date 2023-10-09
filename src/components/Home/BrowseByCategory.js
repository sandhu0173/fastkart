export const BrowseByCategory = () => {
    return (
        <>
        <div className="title">
                                <h2>Bowse by Categories</h2>
                                <span className="title-leaf">
                                    <svg className="icon-width">
                                        <use xlinkHref="./assets/svg/leaf.svg#leaf"></use>
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
                                            <img src="./assets/svg/cup.svg" className="blur-up lazyload" alt="" />
                                            <h5>Beverages</h5>
                                        </div>
                                    </a>
                                </div>

                                <div>
                                    <a href="shop-left-sidebar.html" className="category-box category-dark">
                                        <div>
                                            <img src="./assets/svg/meats.svg" className="blur-up lazyload" alt="" />
                                            <h5>Meats & Seafood</h5>
                                        </div>
                                    </a>
                                </div>

                                <div>
                                    <a href="shop-left-sidebar.html" className="category-box category-dark">
                                        <div>
                                            <img src="./assets/svg/breakfast.svg" className="blur-up lazyload" alt="" />
                                            <h5>Breakfast</h5>
                                        </div>
                                    </a>
                                </div>

                                <div>
                                    <a href="shop-left-sidebar.html" className="category-box category-dark">
                                        <div>
                                            <img src="./assets/svg/frozen.svg" className="blur-up lazyload" alt="" />
                                            <h5>Frozen Foods</h5>
                                        </div>
                                    </a>
                                </div>

                                <div>
                                    <a href="shop-left-sidebar.html" className="category-box category-dark">
                                        <div>
                                            <img src="./assets/svg/milk.svg" className="blur-up lazyload" alt="" />
                                            <h5>Milk & Dairies</h5>
                                        </div>
                                    </a>
                                </div>

                                <div>
                                    <a href="shop-left-sidebar.html" className="category-box category-dark">
                                        <div>
                                            <img src="./assets/svg/pet.svg" className="blur-up lazyload" alt="" />
                                            <h5>Pet Food</h5>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="section-t-space section-b-space">
                                <div className="row g-md-4 g-3">
                                    <div className="col-md-6">
                                        <div className="banner-contain hover-effect">
                                            <img src="./assets/images/vegetable/banner/9.jpg" className="bg-img blur-up lazyload"
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
                                            <img src="./assets/images/vegetable/banner/10.jpg" className="bg-img blur-up lazyload"
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

        </>
    );
}
///export default BrowseByCategory