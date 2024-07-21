"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import img1 from "@/assets/images/client1.png";
import img2 from "@/assets/images/client2.png";
import img3 from "@/assets/images/client3.png";
import img4 from "@/assets/images/client4.png";
import img5 from "@/assets/images/client5.png";
import img6 from "@/assets/images/client6.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

const LogosCarousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      breakpoints={{
        0: { slidesPerView: 3,},
        768: { slidesPerView: 4,},
        992: { slidesPerView: 5,}
      }}
      loop
      modules={[Autoplay]}
      autoplay={{ delay: 4000 }}
    >
      <SwiperSlide>
        <Image src={img1} alt="client" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img2} alt="client" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img3} alt="client" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img4} alt="client" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img5} alt="client" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img6} alt="client" />
      </SwiperSlide>
    </Swiper>
  );
};

export default LogosCarousel;
