import RecipeCard from "../components/RecipeCard";
import recipes from "../data/recipes";
import useRecipeSearch from "../hooks/useRecipeSearch";
import useCategoryFilter from "../hooks/useCategoryFilter";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import useFavorites from "../hooks/useFavorites";

const Recipes = () => {
  const { category, setCategory, filteredByCategory } =
    useCategoryFilter(recipes);
  const { search, setSearch, filteredRecipes } =
    useRecipeSearch(filteredByCategory);

    const {favorites, toggleFavorite} = useFavorites();

  return (
    <section className="max-w-6xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-4">All Recipes</h1>
      <p className="text-grey-600 text-lg mb-10">
        Browse our complete collection of delicious recipes.
      </p>

      <div className="flex item-center border rounded-lg px-3 py-2 mb-10 max-w ">
        <MagnifyingGlassIcon className="w-5 h-5 text-grey-400" />
        <input
          type="text"
          placeholder="Search recipes.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="ml-2 w-full outline-none"
        />
      </div>

      <div className="flex justify-left gap-4 mb-10 flex-wrap">
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
            <RecipeCard key={recipe.id} {...recipe} favorites={favorites}toggleFavorite={toggleFavorite}/>
        ))}
      </div>
    </section>
  );
};

export default Recipes;
