import React from "react";
import { useState } from "react";
import { slider1Data } from "../data/slider1Data";

function Slider1() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slider1Data.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slider1Data.length - 1 : prev - 1));
  };

   const { image, title, desc } = slider1Data[index];

  return (
    <div className="max-w-screen">
      <div className="w-10/12 flex mt-20 mb-10">
        <div className="img w-6/12">
          <img
            src= {image}
            alt="Lion-img"
            className="w-full"
          />
        </div>
        <div className="description w-6/12 p-7 bg-[#71AC8B]">
          <h2 className="font-montserrat font-semibold text-3xl text-white">
            {title}
          </h2>
          <p className="font-montserrat mt-3 text-white text-[16px]">
            {desc}
          </p>
          <button 
          onClick={prevSlide}
          className="w-2/12 p-2 mt-20 border border-white text-white rounded-xl">
            Prev
          </button>
          <button 
          onClick={nextSlide}
          className="w-2/12 p-2 mt-20 border border-white ml-5 text-white rounded-xl">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider1;
