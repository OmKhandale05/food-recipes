import { StarIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const RecipeCard = ({ id,title, image, rating, time }) => {
  return (
    <Link to={`/recipes/${id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>

          <div className="flex justify-between text-sm text-grey-600 mb-3">
            <span className="flex item-center gap-1">
              <StarIcon className="w-5 h-5 text-yellow-400" />
              {rating}
            </span>
            <span className="flex item-center gap-1">
              <ClockIcon className="w-5 h-5 text-grey-400" />
              {time}
            </span>
          </div>

          <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
            View Recipe
          </button>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
