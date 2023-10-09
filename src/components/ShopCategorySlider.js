import React, { useEffect } from "react";
import MobileMenu from "./MobileMenu";
import BreadscrumbSection from "./ShopCategorySlider/BreadscrumbSection";
import CategorySection from "./ShopCategorySlider/CategorySection";
import LeftSidebar from "./ShopCategorySlider/LeftSidebar";
import FilterMenu from "./ShopCategorySlider/FilterMenu";
import ProductSection from "./ShopCategorySlider/ProductSection";

// import customSlick from "../assets/js/slick/custom_slick";

const ShopCategorySlider = () => {
    useEffect(() => {
        // customSlick();
    }, [])
    return (
        <div>
            <MobileMenu />
            <BreadscrumbSection />
            <CategorySection />
            <section class="section-b-space shop-section">
                <div class="container-fluid-lg">
                    <div class="row">
                        <div class="col-custome-3 wow fadeInUp">
                            <LeftSidebar />
                        </div> 
                        <div class="col-custome-9 wow fadeInUp">
                            <FilterMenu />
                            <ProductSection />
                        </div>   
                    </div>    
                </div>  
            </section>  
        </div>
    );
};
export default ShopCategorySlider;
