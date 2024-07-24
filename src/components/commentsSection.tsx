"use client";
import WrapperContainer from "@/app/wrapperContainer";
import ArrowLeft from "@/assets/icons/arrowLeft";
import React, { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import img from "@/assets/images/comment.png";
import CommentCard from "./ui/commentCard";

const comments = [
  {
    img,
    name: "Василий Василиев",
    company: "“Pepsi Co”",
    comment:
      "Lorem ipsum что то такм просто спейс забить я че дурак тсоли писать это в ручную просто текст для вида",
  },
  {
    img,
    name: "Василий Василиев",
    company: "“The Game Zone”",
    comment:
      "Lorem ipsum что то такм просто спейс забить я че дурак тсоли писать это в ручную просто текст для вида",
  },
  {
    img,
    name: "Василий Василиев",
    company: "“Pepsi Co”",
    comment:
      "Lorem ipsum что то такм просто спейс забить я че дурак тсоли писать это в ручную просто текст для вида",
  },
  {
    img,
    name: "Василий Василиев",
    company: "“Pepsi Co”",
    comment:
      "Lorem ipsum что то такм просто спейс забить я че дурак тсоли писать это в ручную просто текст для вида",
  },
];

const CommentsSection = () => {
  const [swiper, setSwiper] = useState<SwiperClass>();
  return (
    <WrapperContainer>
      <div className="flex justify-between items-center mt-24">
        <p className="lg:text-[60px] md:text-[36px] text-[26px] max-w-[300px] lg:max-w-[700px] md:max-w-[400px]">
          Отзывы от наших клиентов
        </p>
        <div className="flex items-center gap-4">
          <div
            className="lg:w-20 md:w-16 md:h-16 w-10 h-10 lg:h-20 rounded-full border-2 grid place-items-center border-primaryGreen cursor-pointer"
            onClick={() => {
              swiper && swiper.slidePrev();
            }}
          >
            <ArrowLeft className="stroke-primaryGreen w-6 lg:w-10 md:w-8" />
          </div>
          <div
            className="lg:w-20 md:w-16 md:h-16 w-10 h-10 lg:h-20 rounded-full border-2 grid place-items-center rotate-180 border-primaryGreen cursor-pointer"
            onClick={() => swiper && swiper.slideNext()}
          >
            <ArrowLeft className="stroke-primaryGreen w-6 lg:w-10 md:w-8" />
          </div>
        </div>
      </div>
      <div className="pb-16 lg:pb-20">
        <Swiper
          wrapperClass="lg:pt-[80px] mt-10"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          loop
          onSwiper={(swiper) => setSwiper(swiper)}
          spaceBetween={30}
        >
          {comments.map((comment, i) => {
            return (
              <SwiperSlide key={i}>
                {({ isNext }) => (
                  <CommentCard
                    {...comment}
                    classname={
                      isNext
                        ? "lg:border-2 border-primaryGreen lg:-translate-y-20"
                        : ""
                    }
                  />
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </WrapperContainer>
  );
};

export default CommentsSection;
