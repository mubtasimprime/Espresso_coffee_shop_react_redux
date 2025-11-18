import ProductBG from "../assets/menu/1.png";
import MenuCard from "./MenuCard";

const Menu = () => {
  const showCoffee = [
    {
      name: "Americano Coffee",
      photo:
        "https://i.ibb.co.com/yBnhTGbM/aa36b3d3-taisiia-q0el09q06y00006j01o.jpg",
      cat: "Hot",
      price: "797",
    },
    {
      name: "Black Coffee",
      photo: "https://i.ibb.co.com/TNc82nG/flat-white-3402c4f.jpg",
      cat: "Hot",
      price: "979",
    },
    {
      name: "Cappuccino Coffee",
      photo: "https://i.ibb.co.com/qLLVzG5p/b98c237b-pablo-merchan-montes.jpg",
      cat: "Hot",
      price: "652",
    },
    {
      name: "Macchiato Coffee",
      photo:
        "https://i.ibb.co.com/Ng8Npvbh/3d79d961-martin-widenka-002a01o.jpg",
      cat: "Cold",
      price: "886",
    },
    {
      name: "Espresso Coffee",
      photo: "https://i.ibb.co.com/Y4ShxQMm/4cd48a88-anna.jpg",
      cat: "Hot",
      price: "575",
    },
    {
      name: "Decaf Coffee",
      photo: "https://i.ibb.co.com/TDVYYgxh/rishika.jpg",
      cat: "Hot",
      price: "431",
    },
    {
      name: "Mocha Coffee",
      photo: "https://i.ibb.co.com/9mq9XcbG/caleb.jpg",
      cat: "Cold",
      price: "910",
    },
    {
      name: "Latte Coffee",
      photo: "https://i.ibb.co.com/vCvLKmNL/864.jpg",
      cat: "Cold",
      price: "720",
    },
  ];
  return (
    <>
      <div className="text-center py-16">
        <div
          className="bg-no-repeat bg-contains"
          style={{ backgroundImage: `url(${ProductBG})` }}
        >
          <p> --- Sip & Savor ---</p>
          <h1 className="color-[#331A15] text-[55px]"> Our Popular Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[350px] md:max-w-[800px] lg:max-w-9/12 mx-auto pt-10 px-5 md:px-0">
            {showCoffee.map((coffee) => (
              <MenuCard key={coffee.id} coffee={coffee}></MenuCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
