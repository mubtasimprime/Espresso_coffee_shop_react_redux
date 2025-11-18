import React from "react";

const AboutUs = () => {
  return (
    <section className="max-w-9/12 mx-auto py-20 px-5 lg:px-0 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="relative">
          <img
            src="https://i.ibb.co.com/Qvst0jJK/about-main.png"
            alt="Coffee Woman"
            className="w-full rounded-lg object-cover"
          />

          <img
            src="https://i.ibb.co.com/67LSJBVm/about-coffee.png"
            alt="Coffee Cup"
            className="w-48 lg:w-64 absolute -bottom-20 -right-30 drop-shadow-xl"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-6">
          <p className="text-[#a27b5c] text-[44px] font-semibold tracking-widest flex items-center gap-2">
            <span className="text-[34px]">☕</span> ABOUT US
          </p>

          <h2 className="text-4xl lg:text-7xl font-bold leading-tight">
            Would You Like <br /> Delicious Coffee
          </h2>

          <p className="text-gray-600 leading-7 text-[20px]">
            At our coffee house, we believe every cup tells a story. From the
            careful selection of premium beans to the precise roasting process,
            we focus on crafting flavors that bring warmth and comfort. Our
            mission is to create a space where people can pause, relax, and
            enjoy a moment of pure satisfaction. We take pride in using
            high-quality, ethically sourced coffee beans that support
            sustainable farming communities across the world.
          </p>

          <p className="text-gray-600 leading-7 text-[20px]">
            Whether you're a casual coffee drinker or a passionate enthusiast,
            we aim to deliver an experience that feels both familiar and
            inspiring. Our team works tirelessly to perfect every detail—from
            aroma and texture to presentation and taste. With every sip, we want
            you to feel the care and craftsmanship that goes into our brews.
            Join us as we continue to celebrate the art of coffee, one cup at a
            time.
          </p>
          <div>
            <img
              src="https://i.ibb.co.com/N2rhqzL8/signature.png"
              className="w-32 mb-2"
              alt="signature"
            />
            <h4 className="font-semibold text-xl">Vincent Smith</h4>
          </div>

          <button className="bg-[#3b2416] text-white px-8 py-3 mt-3 rounded-md hover:bg-[#24150c] transition cursor-pointer">
            DISCOVER MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
