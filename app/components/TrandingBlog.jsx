import React, { useEffect, useState } from "react";
import styles from "../../style/trandingBlog.module.css";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";
import useFetch from "../hooks/useFetch";
const TrandingBlog = () => {
  // trandingBlog api
  const BASE_URL = "https://dev.to/api/articles";
  const { data: data, loading, error } = useFetch(BASE_URL);
  if (loading) return <p>Loading...</p>;

  return (
    <div className="bg-white dark:bg-[#04161a]">
      <div className="flex flex-wrap justify-around">
        <div>
          <h2 className={`${styles.styleH2Tag} mt-20`}>Trending Blogs</h2>
        </div>
        <div>
          <div className={`${styles.bannerButton} mt-20`}>
            <h4 className={`${styles.bannerH4}`}>View All Blogs</h4>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mt-20 pb-20">
        {data.slice(0, 6)?.map((singleData, index) => (
          <>
            <div
              key={index}
              className={`${styles.container} bannerButton`}
              style={{
                backgroundImage: `url("${singleData.cover_image}")`,
                width: 400,
                height: 600,
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                margin: "auto",
                backgroundColor: "black",
                backgroundSize: "cover",
                cursor: "pointer",
              }}
            >
              <h3 className={`${styles.trandingBlogtitle}`}>
                {singleData.title}
              </h3>

              <div className={`${styles.overlay}`}>
                <div className={`${styles.items}`}></div>
                <div className={`${styles.items} ${styles.head}`}>
                  <p>{singleData.description}</p>
                  <hr />
                </div>
                <div className={`${styles.items} ${styles.price}`}>
                  <div className="flex flex-wrap justify-between">
                    <div>
                      <p className={`${styles.old}`}>
                        {singleData.readable_publish_date}
                      </p>
                      <p className={`${styles.new}`}>
                        By {singleData.user?.username}
                      </p>
                    </div>
                    <div>
                      <Image
                        src={singleData.user?.profile_image}
                        width={50}
                        height={50}
                        alt={singleData.user?.username}
                        className={`${styles.profileImageStyle}`}
                      />
                    </div>
                  </div>
                </div>
                <div className={`${styles.items} ${styles.cart}`}>
                  <div
                    className={`${styles.expandDivStyle} flex items-center justify-end`}
                  >
                    <h4 className={`${styles.expandStyle} mr-5`}> Expand</h4>
                    <div>
                      <FaChevronRight style={{ color: "#008b5e" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default TrandingBlog;
