import React from "react";
import Slider from "react-slick";

const CategorySection = () => {
    const settings = {
        arrows: true,
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1660,
                    settings: {
                        slidesToShow: 6,
                    }
                },
                {
                    breakpoint: 1501,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 1251,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 684,
                    settings: {
                        slidesToShow: 2,
                        autoplay: true,
                        autoplaySpeed: 2000,
                    }
                },
            ]
      };
    
    return (
        <>
        <section className="wow fadeInUp">
            <div className="container-fluid-lg">
                <div className="row">
                    <div className="col-12">
                        <Slider {...settings} >
                            <div>
                                <div className="shop-category-box">
                                    <a href="shop-left-sidebar.html">
                                        <div className="shop-category-image">
                                            <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/vegetable.svg" className="blur-up lazyload" alt="" />
                                        </div>
                                        <div className="category-box-name">
                                            <h6>Vegetables & Fruit</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <div className="shop-category-box">
                                    <a href="shop-left-sidebar.html">
                                        <div className="shop-category-image">
                                            <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/cup.svg" className="blur-up lazyload" alt="" />
                                        </div>
                                        <div className="category-box-name">
                                            <h6>Beverages</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <div className="shop-category-box">
                                    <a href="shop-left-sidebar.html">
                                        <div className="shop-category-image">
                                            <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/meats.svg" className="blur-up lazyload" alt="" />
                                        </div>
                                        <div className="category-box-name">
                                            <h6>Meats & Seafood</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <div className="shop-category-box">
                                    <a href="shop-left-sidebar.html">
                                        <div className="shop-category-image">
                                            <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/breakfast.svg" className="blur-up lazyload" alt="" />
                                        </div>
                                        <div className="category-box-name">
                                            <h6>Breakfast</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <div className="shop-category-box">
                                    <a href="shop-left-sidebar.html">
                                        <div className="shop-category-image">
                                            <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/frozen.svg" className="blur-up lazyload" alt="" />
                                        </div>
                                        <div className="category-box-name">
                                            <h6>Frozen Foods</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <div className="shop-category-box">
                                    <a href="shop-left-sidebar.html">
                                        <div className="shop-category-image">
                                            <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/milk.svg" className="blur-up lazyload" alt="" />
                                        </div>
                                        <div className="category-box-name">
                                            <h6>Milk & Dairies</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <div className="shop-category-box">
                                    <a href="shop-left-sidebar.html">
                                        <div className="shop-category-image">
                                            <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/pet.svg" className="blur-up lazyload" alt="" />
                                        </div>
                                        <div className="category-box-name">
                                            <h6>Pet Food</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <div className="shop-category-box">
                                    <a href="shop-left-sidebar.html">
                                        <div className="shop-category-image">
                                            <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/biscuit.svg" className="blur-up lazyload" alt="" />
                                        </div>
                                        <div className="category-box-name">
                                            <h6>Biscuits & Snacks</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <div className="shop-category-box">
                                    <a href="shop-left-sidebar.html">
                                        <div className="shop-category-image">
                                            <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/grocery.svg" className="blur-up lazyload" alt="" />
                                        </div>
                                        <div className="category-box-name">
                                            <h6>Grocery & Staples</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CategorySection;