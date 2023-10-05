import { Swiper, SwiperSlide } from "swiper/react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import "swiper/css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react"; // Import useState hook
import items from "./Items";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import ChevronLeft from "@/assets/icons/ChevronLeftIcon";
import ChevronRight from "@/assets/icons/ChevronRightIcon";

const Banner = ({ setActiveData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const swiperRef = useRef(null);

  const nextRef = useRef(null);
  const handleSlideChange = (swiper) => {
    setActiveData(items[swiper.activeIndex]);
    setActiveIndex(swiper.activeIndex);

    console.log(items[swiper.activeIndex]);
  };

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    console.log(swiperRef.current, swiperRef.current.swiper);
    // if (swiperRef.current) {
    //   swiperRef.current.swiper.slideNext();
    // }
    swiperRef.current.swiper.slideNext();
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Swiper
        ref={swiperRef}
        navigation={{
          prevEl: prevRef.current ? prevRef.current : undefined,
          nextEl: nextRef.current ? nextRef.current : undefined,
        }}
        onInit={(swiper) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.prevEl = prevRef.current;
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation?.update();
        }}
        spaceBetween={0}
        slidesPerView={3}
        onSlideChange={handleSlideChange} // Use the handleSlideChange callback
        onSwiper={(swiper) => console.log(swiper)}
        autoplay
      >
        {items.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Link to={`/nadaews/${index}`}>
                <Card
                  className={`rounded-2xl  overflow-hidden col-span-2  w-[250px] p-0 ${
                    activeIndex === index
                      ? " border-[#F9A51A] border-3"
                      : "border-none"
                  }`}
                >
                  <img
                    src={item?.image}
                    alt=""
                    className={`w-[250px] overflow-hidden h-[350px] object-cover`}
                  />
                </Card>
              </Link>
            </SwiperSlide>
          );
        })}
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        {/* <SwiperSlide className="hidden"></SwiperSlide> */}

        <div className="mt-20 flex text-black gap-3">
          <div
            ref={prevRef}
            onClick={handlePrevClick}
            className="cursor-pointer rounded-full bg-white p-1.5"
          >
            <ChevronLeft />
          </div>
          <div
            ref={nextRef}
            onClick={handleNextClick}
            className="cursor-pointer rounded-full bg-white p-1.5"
          >
            <ChevronRight />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
