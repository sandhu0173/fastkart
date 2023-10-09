import React from "react";

const FilterMenu = () => {
    return (
        <div className="show-button">
            <div className="filter-button-group mt-0">
                <div className="filter-button d-inline-block d-lg-none">
                    <a><i className="fa-solid fa-filter"></i> Filter Menu</a>
                </div>
            </div>

            <div className="top-filter-menu">
                <div className="category-dropdown">
                    <h5 className="text-content">Sort By :</h5>
                    <div className="dropdown">
                        <button className="dropdown-toggle" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown">
                            <span>Most Popular</span> <i className="fa-solid fa-angle-down"></i>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <a className="dropdown-item" id="pop" href="#">Popularity</a>
                            </li>
                            <li>
                                <a className="dropdown-item" id="low" href="#">Low - High
                                    Price</a>
                            </li>
                            <li>
                                <a className="dropdown-item" id="high" href="#">High - Low
                                    Price</a>
                            </li>
                            <li>
                                <a className="dropdown-item" id="rating" href="#">Average
                                    Rating</a>
                            </li>
                            <li>
                                <a className="dropdown-item" id="aToz" href="#">A - Z Order</a>
                            </li>
                            <li>
                                <a className="dropdown-item" id="zToa" href="#">Z - A Order</a>
                            </li>
                            <li>
                                <a className="dropdown-item" id="off" href="#">% Off - Hight To
                                    Low</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="grid-option d-none d-md-block">
                    <ul>
                        <li className="three-grid">
                            <a href="#">
                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/grid-3.svg" className="blur-up lazyload" alt="" />
                            </a>
                        </li>
                        <li className="grid-btn d-xxl-inline-block d-none active">
                            <a href="#">
                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/grid-4.svg"
                                    className="blur-up lazyload d-lg-inline-block d-none" alt="" />
                                    <img src="https://themes.pixelstrap.com/fastkart/assets/svg/grid.svg"
                                        className="blur-up lazyload img-fluid d-lg-none d-inline-block" alt="" />
                            </a>
                        </li>
                        <li className="list-btn">
                            <a href="#">
                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/list.svg" className="blur-up lazyload" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FilterMenu;