import React from "react";
import { useState, useRef, useEffect } from "react";
import { slider2Data } from "../data/slider2Data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Slider2() {
  const [index, setIndex] = useState(0);
  const slider2Ref = useRef(null);
  const slider3Ref = useRef(null);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slider2Data.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slider2Data.length - 1 : prev - 1));
  };

  const { image, image2, title, title2, desc, desc2, id } = slider2Data[index];

  useEffect(() => {
    const ctx1 = gsap.context(() => {
      gsap.fromTo(
        slider2Ref.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: slider2Ref.current,
            start: "top bottom",
            once: true,
          },
        }
      );
    });

    const ctx2 = gsap.context(() => {
      gsap.fromTo(
        slider3Ref.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: slider3Ref.current,
            start: "top bottom",
            once: true,
          },
        }
      );
    });

    return () => {
      ctx1.revert();
      ctx2.revert();
    };
  }, []);

  return (
    <div className="max-w-screen flex flex-col justify-center items-center">
      <div ref={slider2Ref} className="slide2 w-9/12 flex mt-20">
        <div className="img w-6/12">
          <img src={image} alt="Lion-img" className="w-full" />
        </div>
        <div className="description w-6/12 px-8 py-5 bg-[#71AC8B]">
          <p className="font-montserrat text-white text-[16px]">
            {id}- WildLife Trade
          </p>
          <h2 className="font-montserrat font-semibold text-2xl text-white mt-3">
            {title}
          </h2>
          <p className="font-montserrat mt-3 text-white text-[15px]">{desc}</p>
          <button
            className="w-2/12 p-2 mt-6 border border-white text-white rounded-xl"
            onClick={prevSlide}
          >
            Prev
          </button>
          <button
            className="w-2/12 p-2 mt-6 border border-white ml-5 text-white rounded-xl"
            onClick={nextSlide}
          >
            Next
          </button>
        </div>
      </div>

      <div ref={slider3Ref} className="slide3 w-9/12 mb-10">
        <div className="description w-6/12 px-8 py-5 bg-[#71AC8B]">
          <h2 className="font-montserrat font-semibold text-2xl text-white">
            {title2}
          </h2>
          <p className="font-montserrat mt-3 text-white text-[16px]">{desc2}</p>
          <button className="w-4/12 p-2 mt-5 border border-white text-white rounded-xl">
            Discover More
          </button>
        </div>

        <div className="img w-6/12">
          <img src={image2} alt="Lion-img" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Slider2;
