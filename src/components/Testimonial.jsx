import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const feedbacks = [
    {
      _id: 1,
      readerImg: "https://i.ibb.co.com/cSQky5Vf/Screenshot-10.png",
      readerName: "Sajid Rahman",
      readerEmail: "sajid@gmail.com",
      rating: 5,
      description:
        "The cappuccino was incredibly smooth and flavorful. Easily one of the best coffee experiences I've had!",
    },
    {
      _id: 2,
      readerImg: "https://i.ibb.co.com/fzhzd1cX/Screenshot-12.png",
      readerName: "Sumon Sheikh",
      readerEmail: "sumon@gmail.com",
      rating: 4,
      description:
        "I loved the latte! The aroma was rich and the foam was perfect. Could use a bit more sweetness, though.",
    },
    {
      _id: 3,
      readerImg: "https://i.ibb.co.com/6Rgp6qhC/Screenshot-11.png",
      readerName: "Mashiur Rahman",
      readerEmail: "mashiur@gmail.com",
      rating: 5,
      description:
        "The espresso shot was bold and smooth. Perfect balance of bitterness — highly recommended!",
    },
    {
      _id: 4,
      readerImg:
        "https://i.ibb.co.com/HpfrPZ5r/Gemini-Generated-Image-dre35wdre35wdre3.png",
      readerName: "Md. Mubtasim Fuad",
      readerEmail: "fuad@gmail.com",
      rating: 3,
      description:
        "Good coffee overall, but the mocha could use a slightly stronger chocolate flavor.",
    },
    {
      _id: 5,
      readerImg: "https://i.ibb.co.com/4bjD5Wj/Anis.png",
      readerName: "Anisur Rahman",
      readerEmail: "anisur@gmail.com",
      rating: 5,
      description:
        "Absolutely amazing! The caramel macchiato was rich, creamy, and perfectly balanced. Will visit again!",
    },
  ];

  return (
    <section className="max-w-9/12 mx-auto px-4 py-12 relative">
      <div className="text-center flex flex-col gap-4 mb-4 lg:mb-10">
        <h1 className="text-[38px] leading-12 lg:text-[40px] font-extrabold">
          What Readers Are Saying
        </h1>
        <p className="text-gray-700 max-w-[600px] mx-auto">
          Users appreciate seeing the platform’s growth and how normal and
          premium subscribers are distributed, giving insight into engagement
          and community trends.
        </p>
      </div>
      <div className="relative">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
        >
          {feedbacks.map((feedback, index) => (
            <SwiperSlide key={feedback._id}>
              <div
                className={`transition-all duration-300 ease-in-out 
                p-6 rounded-lg shadow-lg text-center 
                bg-[#3b2416]
                border-2 border-amber-700
                ${
                  index === activeIndex
                    ? "scale-105 shadow-xl"
                    : "blur-sm opacity-50 scale-90"
                }`}
              >
                <img
                  src={feedback.readerImg}
                  alt={feedback.readerName}
                  className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-amber-500"
                />

                <Rating
                  value={feedback.rating}
                  readOnly
                  style={{ maxWidth: 150, margin: "0 auto" }}
                />

                <p className="text-amber-50 mt-4 text-lg italic">
                  "{feedback.description}"
                </p>

                <p className="text-sm text-amber-200 mt-2">
                  — {feedback.readerName} <br />
                  <span className="text-amber-300">{feedback.readerEmail}</span>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-amber-800 hover:bg-amber-700 rounded-full p-3 shadow-lg transition-all duration-300 group -ml-4">
          <svg
            className="w-6 h-6 text-amber-100 group-hover:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-amber-800 hover:bg-amber-700 rounded-full p-3 shadow-lg transition-all duration-300 group -mr-4">
          <svg
            className="w-6 h-6 text-amber-100 group-hover:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {feedbacks.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-amber-600 w-8" : "bg-amber-300"
            }`}
            onClick={() => {
              const swiper = document.querySelector(".swiper").swiper;
              swiper.slideTo(index);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
