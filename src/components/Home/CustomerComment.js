export const CustomerComment = () => {
    return (
        <>
        <div className="section-t-space">
          <div className="category-menu">
            <h3>Customer Comment</h3>

            <div className="review-box">
              <div className="review-contain">
                <h5 className="w-75">We Care About Our Customer Experience</h5>
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                </p>
              </div>

              <div className="review-profile">
                <div className="review-image">
                  <img
                    src="./assets/images/vegetable/review/1.jpg"
                    className="img-fluid blur-up lazyload"
                    alt=""
                  />
                </div>
                <div className="review-detail">
                  <h5>Tina Mcdonnale</h5>
                  <h6>Sale Manager</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    );
}