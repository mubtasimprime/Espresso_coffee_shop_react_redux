import Icon1 from "../assets/ad/1.png";
import Icon2 from "../assets/ad/2.png";
import Icon3 from "../assets/ad/3.png";
import Icon4 from "../assets/ad/4.png";

const data = [
  {
    icon: Icon1,
    title: "Awesome Aroma",
    desc: "You will definitely be a fan of the design & aroma of your coffee.",
  },
  {
    icon: Icon2,
    title: "High Quality",
    desc: "We serve the coffee to you maintaining the best quality.",
  },
  {
    icon: Icon3,
    title: "Pure Grades",
    desc: "The coffee is made of the green coffee beans which are grown purely.",
  },
  {
    icon: Icon4,
    title: "Proper Roasting",
    desc: "The coffee is brewed by proper roasting to bring the best taste.",
  },
];

const Ad = () => {
  return (
    <>
      <section className="bg-[#ECEAE3]">
        <div className="max-w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 py-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-18 h-18 mb-4"
              />
              <h1 className="text-4xl font-semibold text-[#331A15]">
                {item.title}
              </h1>
              <p className="mt-2 text-[18px] text-[#1B1A1A]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Ad;
