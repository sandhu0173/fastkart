import { Categories } from "./Categories";
import { CustomerComment } from "./CustomerComment";
import { TrendingProducts } from "./TrendingProducts";

const ProductSectionSidebar = () => {
  return (
    <>
      <div className="p-sticky">
        <div className="category-menu">
          <h3>Category</h3>
          <Categories/>
        </div>

        <div className="ratio_156 section-t-space">
          <div className="home-contain hover-effect">
            <img
              src="./assets/images/vegetable/banner/8.jpg"
              className="bg-img blur-up lazyload"
              alt=""
            />
            <div className="home-detail p-top-left home-p-medium">
              <div>
                <h6 className="text-yellow home-banner">Seafood</h6>
                <h3 className="text-uppercase fw-normal">
                  <span className="theme-color fw-bold">Freshes</span> Products
                </h3>
                <h3 className="fw-light">every hour</h3>
                {/* <button onclick="location.href = 'shop-left-sidebar.html';" className="btn btn-animation btn-md mend-auto"> */}
                <button className="btn btn-animation btn-md mend-auto">
                  Shop Now <i className="fa-solid fa-arrow-right icon"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="ratio_medium section-t-space">
          <div className="home-contain hover-effect">
            <img
              src="./assets/images/vegetable/banner/11.jpg"
              className="img-fluid blur-up lazyload"
              alt=""
            />
            <div className="home-detail p-top-left home-p-medium">
              <div>
                <h4 className="text-yellow text-exo home-banner">Organic</h4>
                <h2 className="text-uppercase fw-normal mb-0 text-russo theme-color">
                  fresh
                </h2>
                <h2 className="text-uppercase fw-normal text-title">
                  Vegetables
                </h2>
                <p className="mb-3">Super Offer to 50% Off</p>
                {/* <button onclick="location.href = 'shop-left-sidebar.html';" className="btn btn-animation btn-md mend-auto"> */}
                <button className="btn btn-animation btn-md mend-auto">
                  Shop Now <i className="fa-solid fa-arrow-right icon"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

       <TrendingProducts/>

        <CustomerComment/>
      </div>
    </>
  );
};
export default ProductSectionSidebar;
