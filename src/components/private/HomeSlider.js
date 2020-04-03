import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./homeSlider.css"

export default function HomeSlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="all">
      <div className="sliderr">

        <Slider {...settings}>
          <div>
            <img src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" className="sliderImg" /> </div>
          <div>
            <img src="https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" className="sliderImg" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1567850174684-a9e79e49ee50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" className="sliderImg" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1558383409-ab7ef8db3e01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" className="sliderImg" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1513470939372-bd520e7d77db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" className="sliderImg" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1571577556441-cd4af9c209f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" className="sliderImg" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
