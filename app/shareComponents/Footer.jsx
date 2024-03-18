import React from "react";
import styles from "../../style/footer.module.css";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
const Footer = () => {
  return (
    <div className={`${styles.footerDiv}bg-[#04161a]`}>
      <div className={`${styles.logoDiv} flex justify-center items-center`}>
        <div className="">
          <span className={`${styles.logoFirstBracketstyleLeft} `}>
            &#123;
            <span className={`${styles.logoFirstBracketstyleRight}`}>
              &#125;
            </span>
          </span>
        </div>

        <div className={`${styles.logoTextStyleDiv}`}>
          <span className={`${styles.logoTextStyle}`}>Tech Blog</span>
        </div>
      </div>
      <div className="flex justify-center items-center text-center pb-20">
        <h3 className={`${styles.h3Style}`}>
          <span className={`${styles.spanStyle}`}>Feel</span> Free To <br />
          <span className={`${styles.spanStyle}`}>Contact</span> us, Anytime.
        </h3>
      </div>
      <div className={`${styles.footerLink}`}>
        <ul className={`${styles.footerLiListLink}`}>
          <li>link</li>
          <li>link</li>
          <li>link</li>
        </ul>
      </div>

      <div className={`${styles.copyrightArea}`}>
        <div className="">
          <p className={`${styles.copyrightP}`}>
            Developed by{" "}
            <span className={`${styles.copyrightPStyle}`}>
              <a href="https://shahariar-bhuiyan.vercel.app/" target="_blank">
                Shahariar Bhuiyan
              </a>
            </span>{" "}
          </p>
        </div>
        <div className="">
          <ul className={`${styles.footerSocialArea}`}>
            <li className={`${styles.liStyle}`}>
              <a href="https://github.com/shahariarraghib" target="_blank">
                <FaGithub className={`${styles.liImgTagStyle}`} />
              </a>
            </li>
            <li className={`${styles.liStyle}`}>
              <a
                href="https://www.linkedin.com/in/shahariar-bhuiyan/"
                target="_blank"
              >
                <IoLogoLinkedin className={`${styles.liImgTagStyle}`} />
              </a>
            </li>
            <li className={`${styles.liStyle}`}>
              <a href="https://github.com/shahariarraghib" target="_blank">
                <TfiEmail className={`${styles.liImgTagStyle}`} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
