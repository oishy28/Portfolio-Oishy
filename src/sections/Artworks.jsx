import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/arts/1.jpeg",
  "/arts/2.jpg",
  "/arts/3.jpeg",
  "/arts/4.JPG",
  "/arts/5.jpg",
  "/arts/7.jpg",
  "/arts/8.jpg",
  "/arts/9.jpg",
];

const Artworks = () => {
  return (
    <section id="artworks" className="section-padding w-full px-5 md:px-20">
      <h2 className="text-3xl font-bold mb-6 text-center">My Artworks</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true} // ✅ Important: Make sure this is "true"
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
        }}
        className="my-8"
        >

        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Artwork ${index + 1}`}
              className="rounded-lg w-full max-h-72 object-contain shadow-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center mt-6">
        <p className="text-lg">
          Check more here 👉{" "}
          <a
            href="https://www.instagram.com/oishys_canvas_tales/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline hover:text-pink-400"
          >
            @oishys_canvas_tales
          </a>
        </p>
      </div>
    </section>
  );
};

export default Artworks;
