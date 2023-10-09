export const FeaturedBlog = () => {
  return (
    <>
      <div className="title section-t-space">
        <h2>Featured Blog</h2>
        <span className="title-leaf">
          <svg className="icon-width">
            <use xlinkHref="./assets/svg/leaf.svg#leaf"></use>
          </svg>
        </span>
        <p>A virtual assistant collects the products from your list</p>
      </div>

      <div className="slider-3-blog ratio_65 no-arrow product-wrapper">
        <div>
          <div className="blog-box">
            <div className="blog-box-image">
              <a href="blog-detail.html" className="blog-image">
                <img
                  src="./assets/images/vegetable/blog/1.jpg"
                  className="bg-img blur-up lazyload"
                  alt=""
                />
              </a>
            </div>

            <a href="blog-detail.html" className="blog-detail">
              <h6>20 March, 2022</h6>
              <h5>Fresh Vegetable Online</h5>
            </a>
          </div>
        </div>

        <div>
          <div className="blog-box">
            <div className="blog-box-image">
              <a href="blog-detail.html" className="blog-image">
                <img
                  src="./assets/images/vegetable/blog/2.jpg"
                  className="bg-img blur-up lazyload"
                  alt=""
                />
              </a>
            </div>

            <a href="blog-detail.html" className="blog-detail">
              <h6>10 April, 2022</h6>
              <h5>Fresh Combo Fruit</h5>
            </a>
          </div>
        </div>

        <div>
          <div className="blog-box">
            <div className="blog-box-image">
              <a href="blog-detail.html" className="blog-image">
                <img
                  src="./assets/images/vegetable/blog/3.jpg"
                  className="bg-img blur-up lazyload"
                  alt=""
                />
              </a>
            </div>

            <a href="blog-detail.html" className="blog-detail">
              <h6>10 April, 2022</h6>
              <h5>Nuts to Eat for Better Health</h5>
            </a>
          </div>
        </div>

        <div>
          <div className="blog-box">
            <div className="blog-box-image">
              <a href="blog-detail.html" className="blog-image">
                <img
                  src="./assets/images/vegetable/blog/1.jpg"
                  className="bg-img blur-up lazyload"
                  alt=""
                />
              </a>
            </div>

            <a href="blog-detail.html" className="blog-detail">
              <h6>20 March, 2022</h6>
              <h5>Fresh Vegetable Online</h5>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
