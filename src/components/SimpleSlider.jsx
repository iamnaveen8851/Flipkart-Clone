import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SimpleSlider() {
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "grey",
          marginLeft: "0%",
          position: "absolute",
          left: "0",
          top: "50%",
          transform: "translateY(-50%)",
          height: "80px",
          width: "3%",
          paddingTop: "30px",
          paddingLeft: "8px",
          zIndex: "999", // Add a higher z-index value
        }}
        onClick={onClick}
      >
        Previous
      </div>
    );
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "grey",
          position: "absolute",
          marginRight: "2%",
          height: "80px",
          width: "3%",
          paddingTop: "30px",
          paddingLeft: "8px",
        }}
        onClick={onClick}
      >
        Next
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const image = [
    {
      img: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/83e659da72ea4860.jpg?q=20",
    },

    {
      img: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/66e2e813dba880a7.jpg?q=20",
    },
    {
      img: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/4d279cfffa536c76.png?q=20",
    },
    {
      img: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1716f18fdf7edbbb.png?q=20",
    },
    {
      img: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ed4591126ff69acb.png?q=20",
    },
    {
      img: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/5a51a6ffa84d75a7.png?q=20",
    },
  ];

  return (
    <div style={{ width: "97%", margin: "auto" }} className="slider-container">
      <Slider {...settings}>
        {image.map((img, i) => (
          <div key={i}>
            <img src={img.img} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
