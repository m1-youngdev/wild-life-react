import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Events() {
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top bottom", // triggers when first card enters viewport
            once: true, // reveal only once
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={cardsRef} className="event-container bg-[#71AC8b] bg-opacity-15">
      <div className="events w-10/12 pl-44 pt-8">
        <h2 className="font-montserrat font-semibold text-3xl mb-3">Events</h2>
      </div>
      <div className="max-w-screen flex justify-center items-center">
        <div className="cards grid grid-cols-3 w-9/12 gap-5 py-10">
          <div className="card rounded-lg shadow-[#71AC8b] shadow p-5 hover:scale-105 transition ease-in-out duration-700">
            <h2 className="font-montserrat font-semibold text-2xl mb-3">
              Saving the Endangered Rhino
            </h2>
            <p className="font-montserrat mb-3 text-[15px]">
              Explore the journey and challenges faced in protecting one of the
              most endangered species on Earth.
            </p>
            <a href="#" className="font-montserrat text-[16px]">
              Read more
            </a>
          </div>
          <div className="card rounded-lg shadow-[#71AC8b] shadow p-5 hover:scale-105 transition ease-in-out duration-700">
            <h2 className="font-montserrat font-semibold text-2xl mb-3">
              The Journey of Migrating Elephants
            </h2>
            <p className="font-montserrat mb-3 text-[15px]">
              Learn about the incredible migration of elephants across Africa.
            </p>
            <a href="#" className="font-montserrat text-[16px]">
              Read more
            </a>
          </div>
          <div className="card rounded-lg shadow-[#71AC8b] shadow p-5 hover:scale-105 transition ease-in-out duration-700">
            <h2 className="font-montserrat font-semibold text-2xl mb-3">
              The Secret Life of Tigers
            </h2>
            <p className="font-montserrat mb-3 text-[15px]">
              An in-depth look into the behaviors and habits of wild tigers
            </p>
            <a href="#" className="font-montserrat text-[16px]">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
