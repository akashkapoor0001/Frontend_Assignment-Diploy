import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import test1 from "../components/images/test1.png"
import test2 from "../components/images/test2.png"
import test3 from "../components/images/test3.png"
const Slick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      }
    ]
  };

  return (
    <div className="slick-div" style={{ backgroundColor: " #F7F7F7", paddingLeft: "150px", marginTop: "-150px", padding: "100px" }}>
      <Slider {...settings}>

        <div className="testimonial-card">
          <div style={{ display: "flex", justifyContent: "start", gap: "5%" }}>
            <div>
              <img src={test1} alt="Robert A. Voltaire" className="user-image" />
            </div>
            <div>
              <h2 className="slick-h2">Robert A. Voltaire</h2>
              <a href="#" className="store-link">Store link</a>
              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <p className="testimonial-text">
            Printify has been an incredible service for us musicians unable to keep large amounts of inventory. Now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks, Printify!
          </p>
        </div>

        <div className="testimonial-card">
          <div style={{ display: "flex", justifyContent: "start", gap: "5%" }}>
            <div>
              <img src={test2} alt="Quinten Barney" className="user-image" />
            </div>
            <div>
              <h2 className="slick-h2">Quinten Barney</h2>
              <a href="#" className="store-link">Etsy Merchant</a>
              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <p className="testimonial-text">
            We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top-notch, and their platform just keeps getting better and better.
          </p>
        </div>
        <div className="testimonial-card">
          <div style={{ display: "flex", justifyContent: "start", gap: "5%" }}>
            <div>
              <img src={test3} alt="Nikki" className="user-image" />
            </div>
            <div>
              <h2 className="slick-h2">Brandan Nikki</h2>
              <a href="#" className="store-link">Store link</a>
              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <p className="testimonial-text">
            Printify has been an amazing platform as we grow our business. From the custom designs we can make for our customers to the great customer service team, the whole process is a breeze!
          </p>
        </div>
        <div className="testimonial-card">
          <div style={{ display: "flex", justifyContent: "start", gap: "5%" }}>
            <div>
              <img src={test3} alt="Nikki" className="user-image" />
            </div>
            <div>
              <h2 className="slick-h2">Barney Nikki</h2>
              <a href="#" className="store-link">Store link</a>
              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <p className="testimonial-text">
            Printify has been an amazing platform as we grow our business. From the custom designs we can make for our customers to the great customer service team, the whole process is a breeze!
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default Slick;