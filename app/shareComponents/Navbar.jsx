"use client";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

import styles from "../../style/navbar.module.css";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      // Code will only execute in a browser environment where localStorage is available
      const storedTheme = localStorage.getItem("theme");
      const preferredTheme = storedTheme
        ? storedTheme
        : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

      // console.log("Preferred theme:", preferredTheme);
    }
    // const storedTheme = localStorage.getItem("theme");
    // return storedTheme
    //   ? storedTheme
    //   : window.matchMedia("(prefers-color-scheme: dark)").matches
    //   ? "dark"
    //   : "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const handleLightMode = () => {
    handleThemeChange("light");
  };

  const handleDarkMode = () => {
    handleThemeChange("dark");
  };

  const handleRespectOSPreference = () => {
    localStorage.removeItem("theme");
    setTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
  };

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className={`App ${theme}`}>
      {/* fixed */}
      <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-white dark:bg-[#04161a] fixed nav z-10">
        <a href="#" className="link">
          <span className="mask">
            <div className="linkContainer">
              <span
                className={`${styles.logoFirstBracketstyleLeft} linktitle1 title`}
              >
                &#123;
                <span className={`${styles.logoFirstBracketstyleRight}`}>
                  &#125;
                </span>
              </span>
              <span className="linktitle2 title">Tech Blog</span>
            </div>
          </span>
          <div className="linkicon">
            <span
              className={`${styles.logoFirstBracketstyleRight} icon`}
            ></span>

            <span
              className={`${styles.logoFirstBracketstyleLeft} linktitle1 title icon`}
            >
              &#123;
              <span className={`${styles.logoFirstBracketstyleRight}`}>
                &#125;
              </span>
            </span>
          </div>
        </a>

        <ul className="hidden lg:flex">
          {links.map(({ id, link }) => (
            <>
              <div className={`${styles.parallelogramContainer}`}>
                <li
                  key={id}
                  className="nav-links px-4 cursor-pointer capitalize font-medium text-black dark:text-white duration-200 link-underline"
                >
                  <Link className="hover:text-[#008b5e]" href={link}>
                    {link}
                  </Link>
                </li>
              </div>
            </>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 lg:hidden "
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen  from-black to-gray-800 text-gray-500  bg-white  dark:bg-[#04161a]">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link onClick={() => setNav(!nav)} href={link}>
                  {link}
                </Link>
              </li>
            ))}

            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                onClick={handleLightMode}
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{ fill: "#008b5e", width: "30px", height: "30px" }}
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                onClick={handleDarkMode}
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{ fill: "#008b5e", width: "30px", height: "30px" }}
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </ul>
        )}
        <div className="hidden md:flex">
          <div class={`${styles.pagewrapper}`}>
            <div class={`${styles.circlewrapper}`}>
              <div class={`${styles.success} ${styles.circle}`}></div>
              <div class={`${styles.icon}`}>
                <label className="swap swap-rotate">
                  {/* this hidden checkbox controls the state */}
                  <input
                    type="checkbox"
                    className="theme-controller"
                    value="synthwave"
                  />

                  {/* sun icon */}
                  <svg
                    onClick={handleLightMode}
                    className="swap-on fill-current w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    style={{ fill: "#008b5e", width: "30px", height: "30px" }}
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    onClick={handleDarkMode}
                    className="swap-off fill-current w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    style={{ fill: "#008b5e", width: "30px", height: "30px" }}
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
