import { Heart } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../redux/favoritesSlice";

const MenuCard = ({ coffee }) => {
  const { photo, name, price, cat } = coffee;
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.favorites);

  const isLiked = items.some((item) => item.name === name);

  const handleLikeClick = () => {
    if (isLiked) {
      dispatch(removeFromFavorites(name));
    } else {
      dispatch(
        addToFavorites({
          name,
          photo,
          price,
          cat,
          id: Date.now(),
        })
      );
    }
  };

  return (
    <div className="bg-[#f9f8f6] p-5 rounded-xl shadow hover:shadow-lg transition relative">
      {/* Image */}
      <div className="relative">
        <img
          src={photo}
          alt={name}
          className="w-full h-62 object-cover rounded-xl"
        />

        {/* Heart Button */}
        <button
          onClick={handleLikeClick}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow cursor-pointer hover:bg-amber-50 transition-colors"
        >
          <Heart
            size={22}
            className={isLiked ? "text-red-500" : "text-gray-400"}
            strokeWidth={2}
            fill={isLiked ? "red" : "none"}
          />
        </button>
      </div>

      {/* Text Content */}
      <div className="pt-4 text-center">
        <h3 className="text-[22px] font-semibold text-[#4b2e21]">
          Coffee Name: {name}
        </h3>
        <p className="font-medium text-[#4b2e21] mt-0 text-[20px]">
          Category: {cat}
        </p>
        <p className="font-bold text-[#4b2e21] mt-1 text-[20px]">
          Price: {price} Taka
        </p>
      </div>
    </div>
  );
};

export default MenuCard;
