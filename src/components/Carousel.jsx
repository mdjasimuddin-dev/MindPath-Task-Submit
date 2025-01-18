// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

// carousel image import
import img1 from "../assets/pic_1.jpg";
import img2 from "../assets/pic_2.jpg";
import img3 from "../assets/pic_3.jpg";

const Carousel = () => {
  return (
    <div className="w-full h-full">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        loop={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide>
          <img src={img1} className="h-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} className="h-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} className="h-full" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
