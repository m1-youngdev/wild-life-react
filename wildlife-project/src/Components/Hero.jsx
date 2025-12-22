import React from "react";

function Hero() {
  return (
    <div className="max-w-screen">
      <div className="hero bg-[url('https://res.cloudinary.com/dwmgepoeg/image/upload/v1764934213/photo-1545063914-a1a6ec821c88_pwmao5.jpg')] bg-cover bg-center h-screen max-w-screen">
       <div className="opacity-div z-30 max-w-screen h-screen bg-[#242A26] bg-opacity-40 ">
         <div className="hero-content bg-transparent pt-[200px] px-[70px] w-6/12">
          <h2 className="font-montserrat text-6xl font-bold">Wildlife Reserve</h2>
          <h3 className="font-montserrat text-2xl font-semibold">
            <span className="text-[#71AC8BE6]">Keep Saving</span> All Animals
          </h3>
          <p className="font-montserrat text-xl">
            Protect animals from poaching, protect the future of animal as
            living things on earth.
          </p>
        </div>
       </div>
      </div>
    </div>
  );
}

export default Hero;
