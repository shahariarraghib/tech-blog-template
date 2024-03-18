import React, { useState } from "react";
import styles from "../../style/trandingNews.module.css";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import "../../style/slick.css";
import "../../style/slick-theme.css";
import Slider from "react-slick";
import useFetch from "../hooks/useFetch";

const TrandingNews = () => {
  const [sliderRef, setSliderRef] = useState(null);
  // trandingNews api
  const BASE_URL =
    "https://newsdata.io/api/1/news?apikey=pub_38927a1cb696afa327ec6fa09f0de0c8a601f&q=tech&language=en&category=technology";
  const { data: data, loading, error } = useFetch(BASE_URL);
  if (loading) return <p>Loading...</p>;

  console.log(data);
  // dots
  const appendDots = (dots) => (
    <div
      className={`${styles.dotStyle}`}
      style={{
        textAlign: "right",
        padding: "50px",
      }}
    >
      <ul className="">{dots}</ul>
    </div>
  );

  const settings = {
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    appendDots: appendDots,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-[#020b0d]">
      <div>
        <div className="flex justify-center">
          <h1 className={`${styles.styleH1Tag} text-black dark:text-white`}>
            360 NEWS
          </h1>
        </div>
        <div className="flex justify-center">
          <h4
            className={`${styles.styleH4Tag} text-center text-black dark:text-white`}
          >
            Every day, we embrace change and create value for all our <br />
            users, in every part of the world.
          </h4>
        </div>
      </div>

      <div className="mt-20">
        <Slider ref={setSliderRef} {...settings}>
          {data?.results?.map((card, index) => (
            <div key={index} className={`${styles.mainDivStyle}`}>
              <div className={`${styles.imageContainer}`}>
                <img
                  className={`${styles.imageStyle}`}
                  alt={card.title}
                  src={card.image_url}
                />
              </div>
              <div
                className={`${styles.textContainer} flex justify-end items-end ml-auto`}
              >
                <div>
                  <h2
                    className={`${styles.cartTitleStyle} text-black dark:text-white`}
                  >
                    {card.title}
                  </h2>
                  <p className="text-justify text-black dark:text-white">
                    {card?.description?.slice(0, 200)}...
                  </p>
                  <div
                    className={`${styles.bannerButton} text-black dark:text-white`}
                  >
                    <h4
                      className={`${styles.bannerH4} text-black dark:text-white`}
                    >
                      Read more
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className={`${styles.arrowDiv}`}>
          <button onClick={() => sliderRef?.slickPrev()} className="mr-20">
            <BsArrowLeft
              className={`${styles.arrow} h-25 w-25`}
              aria-hidden="true"
              style={{ color: "#008b5e", fontSize: "40px" }}
            />
          </button>
          <button onClick={() => sliderRef?.slickNext()}>
            <BsArrowRight
              className={`${styles.arrow} h-25 w-25`}
              aria-hidden="true"
              style={{ color: "#008b5e", fontSize: "40px" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrandingNews;
