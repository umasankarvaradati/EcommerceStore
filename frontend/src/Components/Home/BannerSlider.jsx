import React, { useState, useEffect, memo, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Home.css";
import { BANNER_API } from "../../assets/fetchAPIS";  

const BannerSlider = () => {
  const [images, setImages] = useState([]);

  const fetchBanners = useCallback(async () => {
    try {
      const response = await fetch(BANNER_API);
      if (!response.ok) throw new Error("Failed to fetch data");
      const img = await response.json();
      const imgData = img.data.map((img) => img.image);
      setImages(imgData);
    } catch (error) {
      console.log("Error fetching banners:", error);
    }
  }, []);

  useEffect(() => {
    fetchBanners();
  }, [fetchBanners]);

  return (
    <div className="banner-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={images.length > 1} // ✅ Enable loop only if images.length > 1
        className="banner-swiper"
      >
        {images.length > 0 ? (
          images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Banner ${index + 1}`} className="banner-image" />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <p>Loading...</p>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default memo(BannerSlider);
