import RecipeCard from "../components/RecipeCard";
import recipes from "../data/recipes";
import useFavorites from "../hooks/useFavorites";

const Favorites = () => {
    const { favorites, toggleFavorite } = useFavorites();

    const favoriteRecipes = recipes.filter((recipe) => favorites.includes(recipe.id));
    return ( 
        <section className="max-w-6xl mx-auto py-16 px-6">
            <h1 className="text-4xl font-bold text-center mb-10">Favorite Recipes ❤️</h1>
            {favoriteRecipes.length === 0 ? (
                <p className="text-center text-gray-500">
                    You haven't added any favorite recipes yet.
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {favoriteRecipes.map((recipe) => (
                        <RecipeCard
                        key={recipe.id}
                        {...recipe}
                        favorites={favorites}
                        toggleFavorite={toggleFavorite}
                        />
                    ))}
                </div>
            )}
        </section>
     );
};
 
export default Favorites;