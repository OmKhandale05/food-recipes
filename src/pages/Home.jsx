import RecipeCard from "../components/RecipeCard";
import useRecipeSearch from "../hooks/useRecipeSearch";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Home = () => {

    const recipes = [
        {
            title: "Cheese Burger",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
            rating: "4.6",
            time: "20 min",
            category: "Lunch"
        },
        {
            title: "Italian Pizza",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
            rating: "4.8",
            time: "40 min",
            category: "Dinner"
        },
        {
            title: "Healthy Salad",
            image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
            rating: "4.3",
            time: "10 min",
            category: "Breakfast"
        },
        {
            title: "Chocolate Cake",
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
            rating: "4.0",
            time: "60 min",
            category: "Dessert"
        }
    ];

    const { search, setSearch, filteredRecipes } = useRecipeSearch(recipes);

    return ( 
        <section className="max-w-6xl mx-auto py-16 px-6">
            <h2 className="text-4xl font-bold mb-4 text-center">
                Discover Delicious Recipes
            </h2>
            <p className=" text-lg text-grey-600 text-center mb-20">
                Find easy and tasty meals for everyday cooking.
            </p>

            <h2 className="text-3xl font-bold mb-8 text-center">Popular Recipes</h2>

            <div className="flex item-center border rounded-lg px-3 py-2 mb-10 max-w-md mx-auto">
                <MagnifyingGlassIcon className="w-5 h-5 text-grey-400"/>
                <input
                type="text"
                placeholder="Search recipes.."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="ml-2 w-full outline-none"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredRecipes.map((recipe, index)=>(
                    <RecipeCard
                        key={index}
                        title={recipe.title}
                        image={recipe.image}
                        rating={recipe.rating}
                        time={recipe.time}
                        
                        />
                ))}
            </div>
        </section>
     );
}
 
export default Home;