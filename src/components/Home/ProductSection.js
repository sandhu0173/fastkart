import React from "react";
import ProductSectionSidebar from "./ProductSectionSidebar";
import { TopSaveToday } from "./TopSaveToday";
import { BrowseByCategory } from "./BrowseByCategory";
import { FoodCupboard } from "./FoodCupboard";
import { OurBestSeller } from "./OurBestSeller";
import { FeaturedBlog } from "./FeaturedBlog";

const ProductSection = () => {
    function handleEmptyClick(e){
        e.preventDefault();
    }
    return (
        <>
            {/* < !--Product Section Start-- > */}
            <section className="product-section">
                <div className="container-fluid-lg">
                    <div className="row g-sm-4 g-3">
                        <div className="col-xxl-3 col-xl-4 d-none d-xl-block">
                            
                                    <ProductSectionSidebar/>
                                
                        </div>

                        <div className="col-xxl-9 col-xl-8">

                            <TopSaveToday/>
                            <BrowseByCategory/>
                            
                            <FoodCupboard/>
                            <OurBestSeller/>
                            <FeaturedBlog/>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Product Section End-- > */}
        </>
    );
} 

export default ProductSection;