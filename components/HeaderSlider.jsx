import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Słuchawki premium — czysty dźwięk każdego dnia.",
      offer: "Do -30% na elektronikę",
      buttonText1: "Kup teraz",
      buttonText2: "Zobacz słuchawki",
      imgSrc: assets.header_headphone_image,
    },
    {
      id: 2,
      title: "Kazochka Shop — konsole, gry i akcesoria gamingowe.",
      offer: "Nowe dostawy • PS5, Xbox, kontrolery",
      buttonText1: "Sprawdź ofertę",
      buttonText2: "Zobacz konsole",
      imgSrc: assets.header_playstation_image,
    },
    {
      id: 3,
      title: "Laptopy do pracy, nauki i rozrywki — wybierz idealny model.",
      offer: "Najlepsze ceny • Limitowane promocje",
      buttonText1: "Zobacz laptopy",
      buttonText2: "Przeglądaj produkty",
      imgSrc: assets.header_macbook_image,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => setCurrentSlide(index);

  return (
    <div className="overflow-hidden relative w-full">
      {/* SLIDES */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="
              flex flex-col-reverse md:flex-row items-center justify-between
              py-10 md:px-16 px-6 mt-6 rounded-xl min-w-full
              bg-gradient-to-br from-orange-500/10 via-white to-orange-500/10
              shadow-[0_10px_35px_-5px_rgba(0,0,0,0.1)]
            "
          >
            {/* TEXT BLOCK */}
            <div className="md:pl-6 mt-10 md:mt-0 max-w-xl">
              <p className="md:text-base text-orange-600 font-semibold tracking-wide">
                {slide.offer}
              </p>
              <h1 className="
                max-w-xl md:text-[40px] md:leading-[48px] text-2xl font-semibold text-gray-900
              ">
                {slide.title}
              </h1>

              <div className="flex items-center mt-5 md:mt-7 gap-3">
                {/* MAIN BUTTON */}
                <button
                  className="
                    md:px-10 px-7 md:py-3 py-2 rounded-full text-white font-medium
                    bg-orange-600 shadow-[0_4px_15px_rgba(255,140,0,0.4)]
                    hover:bg-orange-700 transition
                  "
                >
                  {slide.buttonText1}
                </button>

                {/* SECONDARY BUTTON */}
                <button
                  className="
                    group flex items-center gap-2 px-6 py-2.5 font-medium text-gray-700
                    hover:text-orange-600 transition
                  "
                >
                  {slide.buttonText2}
                  <Image
                    className="group-hover:translate-x-1 transition"
                    src={assets.arrow_icon}
                    alt="arrow_icon"
                  />
                </button>
              </div>
            </div>

            {/* IMAGE BLOCK */}
            <div className="flex items-center flex-1 justify-center">
              <Image
                className="md:w-80 w-52 drop-shadow-xl"
                src={slide.imgSrc}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="flex items-center justify-center gap-2 mt-6 mb-2">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`
              h-2.5 w-2.5 rounded-full cursor-pointer transition
              ${currentSlide === index ? "bg-orange-600 shadow-md" : "bg-gray-400/30"}
            `}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;
