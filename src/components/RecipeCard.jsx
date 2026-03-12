import { StarIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

const RecipeCard = ({ id, title, image, rating, time, favorites, toggleFavorite }) => {

  const isFavorite = favorites.includes(id);

  return (

    <div className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300">

      {/* Favorite Button */}

      <button
        onClick={() => toggleFavorite(id)}
        className="absolute top-3 right-3 z-10"
      >
        {isFavorite ? (
          <HeartSolid className="w-6 h-6 text-red-500" />
        ) : (
          <HeartIcon className="w-6 h-6 text-gray-400 hover:text-red-500" />
        )}
      </button>

      <Link to={`/recipes/${id}`}>

        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />

        <div className="p-4">

          <h3 className="text-lg font-semibold">{title}</h3>

          <div className="flex justify-between text-sm text-gray-600 mb-3">

            <span className="flex items-center gap-1">
              <StarIcon className="w-5 h-5 text-yellow-400" />
              {rating}
            </span>

            <span className="flex items-center gap-1">
              <ClockIcon className="w-5 h-5 text-gray-400" />
              {time}
            </span>

          </div>

          <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
            View Recipe
          </button>

        </div>

      </Link>

    </div>

  );
};

export default RecipeCard;