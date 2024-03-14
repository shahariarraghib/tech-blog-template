import React from "react";
import { useRef } from "react";
import styles from "../../style/banner.module.css";
import {
  motion,
  useScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";

const Banner = () => {
  const { scrollYProgress } = useViewportScroll();
  const options = {};

  // For the left-side div (move backward)
  const xLeft = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [500, -500, -440], // Change this line to start from -500 pixels
    options
  );

  // For the right-side div (move backward)
  const xRight = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [-500, 0, 0], // Change this line to start from -500 pixels
    options
  );

  const opacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.9, 1],
    [1, 1, 1, 0],
    options
  );
  return (
    <main className="bg-white dark:bg-[#020b0d] dark:text-white text-black ">
      <div style={{ height: "1000px" }}>
        <div className={`${styles.bannerMainDiv}`}>
          <div className={`${styles.container}`}>
            <div className={`${styles.right}`}>
              <motion.div
                style={{
                  x: xLeft, // Use xLeft for the first image
                  // y,
                  opacity,
                }}
              >
                <div className={`${styles.arrow2}`}>
                  <h1 className={`${styles.h1Tag}`}>
                    We will keep
                    <br />{" "}
                    <span className={`${styles.h1TagSpan1}`}>
                      you updated
                    </span>{" "}
                    <br />{" "}
                    <span className={`${styles.h1TagSpan2}`}>with Tech</span>
                  </h1>
                </div>
              </motion.div>
            </div>
            <div className={`${styles.right}`}>
              <motion.div
                style={{
                  x: xRight, // Use xRight for the second image
                  // y,
                  opacity,
                }}
              >
                <div className={`${styles.arrow}`}>
                  <div>
                    <hr className={`${styles.hrStyle}`} />
                  </div>
                  <p className="text-justify">
                    In the ever-evolving landscape of technology, staying
                    informed is not just an option but a necessity. TechTrends,
                    our dynamic tech blog, serves as your compass in navigating
                    the vast and rapidly changing digital frontier.
                  </p>
                  <div className={`${styles.bannerButton}`}>
                    <h4 className={`${styles.bannerH4}`}>Braking News</h4>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
