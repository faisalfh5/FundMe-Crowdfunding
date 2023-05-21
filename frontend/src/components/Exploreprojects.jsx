import React from "react";
import Slider from "react-slick";
import "../cssfiles/responsivefront.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Projectscategory } from "../constants/index";
import "../App.css";

const Exploreprojects = () => {
  // const settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 4,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <section id="project">
      <div className="container">
        <div className="text-center">
          <h5 className="common-h5">Featured Projects</h5>
          <h2 className="common-h2">Explore Our Projects</h2>
        </div>
        <div className="">
          <div className="Appp">
            <Slider {...settings}>
              {Projectscategory.map((data) => (
                <div className="card">
                  <div className="card-top">
                    <img src={data.img} alt={data.title} />
                    <h1>{data.title}</h1>
                  </div>
                  <div className="card-bottom">
                    <p>Total Funding: {data.funding}</p>
                    <button className="common-btn">
                      <p className="categoryy">{data.category}</p>
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    </section>
  );
};

export default Exploreprojects;
