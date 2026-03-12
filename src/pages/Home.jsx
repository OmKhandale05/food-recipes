import RecipeCard from "../components/RecipeCard";
import useRecipeSearch from "../hooks/useRecipeSearch";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import useCategoryFilter from "../hooks/useCategoryFilter";
import { Link } from "react-router-dom";
import recipes from "../data/recipes";
import useFavorites from "../hooks/useFavorites";

const Home = () => {

const featuredRecipes = recipes.slice(0,5);
  const { category, setCategory, filteredByCategory } =
    useCategoryFilter(featuredRecipes);
  const { search, setSearch, filteredRecipes } =
    useRecipeSearch(filteredByCategory);
    const { favorites, toggleFavorite} = useFavorites();

  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold mb-4 text-center">
        Discover Delicious Recipes
      </h2>
      <p className=" text-lg text-grey-600 text-center mb-20">
        Find easy and tasty meals for everyday cooking.
      </p>

      <h2 className="text-3xl font-bold mb-8 text-center">Popular Recipes</h2>

      <div className="flex items-center border rounded-lg px-3 py-2 mb-10 max-w-md mx-auto">
        <MagnifyingGlassIcon className="w-5 h-5 text-grey-400" />
        <input
          type="text"
          placeholder="Search recipes.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="ml-2 w-full outline-none"
        />
      </div>

      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {["All", "Breakfast", "Lunch", "Dinner", "Dessert"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full border transition
                    ${
                      category === cat
                        ? "bg-orange-500 text-white border-orange-500"
                        : "bg-white text-grey-700 hover:bg-orange-100"
                    }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            image={recipe.image}
            rating={recipe.rating}
            time={recipe.time}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/recipes">
          <button className="mt-10 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition cursor-pointer">
            Explore All Recipes
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
