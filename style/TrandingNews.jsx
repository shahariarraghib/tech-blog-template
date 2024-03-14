import React, { useState } from "react";
import styles from "../../style/trandingNews.module.css";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const TrandingNews = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const hotelCards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      title: "Studio Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Deluxe Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 80/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
      title: "King Deluxe Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 150/Day",
      features: ["Free Wifi", "Free breakfast", "Discounted Meals"],
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "Royal Suite",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 299/Day",
      features: [
        "Free Wifi",
        "Free breakfast",
        "Discounted Meals",
        "MacBook for work use (hotel's property)",
      ],
    },
  ];
  // dots
  const appendDots = (dots) => (
    <div
      className={`${styles.dotStyle}`}
      style={{
        textAlign: "right", // Align dots to the right
      }}
    >
      <ul>{dots}</ul>
    </div>
  );

  const settings = {
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
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
          <h1 className={`${styles.styleH1Tag}`}>360 NEWS</h1>
        </div>
        <div className="flex justify-center">
          <h4 className={`${styles.styleH4Tag} text-center`}>
            Every day, we embrace change and create value for all our <br />
            users, in every part of the world.
          </h4>
        </div>
      </div>

      <div className="mt-20">
        <Slider ref={setSliderRef} {...settings}>
          {hotelCards.map((card, index) => (
            <div key={index} className={`${styles.mainDivStyle}`}>
              <div className={`${styles.imageContainer}`}>
                <img
                  className={`${styles.imageStyle}`}
                  alt={card.title}
                  src={card.imageSrc}
                />
              </div>
              <div>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <ul>
                  {card.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
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
