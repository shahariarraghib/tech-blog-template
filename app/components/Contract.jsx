import React from "react";
import styles from "../../style/contract.module.css";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const Contract = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={`${styles.bannerButton1} bg-white dark:bg-[#04161a]`}>
      <div className="lg:flex align-items-center justify-evenly g-4">
        <div className="">
          <span className={`${styles.suscribeStyle}`}>Subscribe</span>
          <div className={`${styles.NewsletterDivStyle}`}>
            <h2 className={`${styles.NewsletterStyle}`}>Our Newsletter</h2>
            <p className={`${styles.pTagStyle} text-justify`}>
              Suspendisse bibendum efficitur orci, a pretium eratoin one{" "}
              <br className="hidden lg:block" />
              mattis nec. Vestibulum ante ipsum primis in.
            </p>
          </div>
        </div>
        <div className="flex lg:justify-center lg:items-center max-w-md gap-x-4">
          <label for="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            required
            className={`${styles.inputStyle} focus:outline-none`}
            placeholder="Enter your email"
          />
          <button type="submit" className={`${styles.bannerButton}`}>
            Subscribe
          </button>
        </div>
      </div>
      <div className={`${styles.sliderDiv} slider-container`}>
        <Slider {...settings}>
          <div>
            <h3 className={`${styles.sliderTextStyle1}`}>Get In Touch</h3>
          </div>
          <div>
            <h3 className={`${styles.sliderTextStyle2}`}>Get In Touch</h3>
          </div>
          <div>
            <h3 className={`${styles.sliderTextStyle1}`}>Get In Touch</h3>
          </div>
          <div>
            <h3 className={`${styles.sliderTextStyle2}`}>Get In Touch</h3>
          </div>
          <div>
            <h3 className={`${styles.sliderTextStyle1}`}>Get In Touch</h3>
          </div>
          <div>
            <h3 className={`${styles.sliderTextStyle2}`}>Get In Touch</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Contract;
