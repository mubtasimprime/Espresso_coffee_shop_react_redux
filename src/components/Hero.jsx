import HeroBanner from "../assets/banner/Banner.png";

const Hero = () => {
  return (
    <>
      <section
        className="bg-no-repeat bg-cover h-[calc(100vh-80px)] flex items-center"
        style={{ backgroundImage: `url(${HeroBanner})` }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col relative">
            <div className="pl-4 lg:pl-170 -mt-60 lg:mt-0">
              <h1 className="text-white text-[28px] md:text-[40px] lg:text-[55px]">
                Would you like a Cup of Delicious Coffee?
              </h1>
              <p className="text-white mb-2 max-w-md md:max-w-xl lg:max-w-2xl md:text-[18px] lg:text-[20px]">
                It's coffee time - Sip & Savor - Relaxation in every sip! Get
                the nostalgia back!! Your companion of every moment!!! Enjoy the
                beautiful moments and make them memorable.
              </p>
              <div>
                <button className="btn-bg py-1.5 px-3 rounded-sm cursor-pointer hover: border hover:border-white transition duration-400">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
