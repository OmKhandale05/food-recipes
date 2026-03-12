import RecipeCard from "../components/RecipeCard";

const Home = () => {

    const recipes = [
        {
            title: "Cheese Burger",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
        },
        {
            title: "Italian Pizza",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
        },
        {
            title: "Healthy Salad",
            image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
        },
        {
            title: "Chocolate Cake",
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
        }
    ];
    return ( 
        <section className="text-center py-16">
            <h2 className="text-4xl font-bold mb-4">
                Discover Delicious Recipes
            </h2>
            <p className=" text-lg text-grey-600">
                Find easy and tasty meals for everyday cooking.
            </p>

            <h2>Popular Recipes</h2>
            <div>
                {recipes.map((recipe, index)=>(
                    <RecipeCard
                        key={index}
                        title={recipe.title}
                        image={recipe.image}/>
                ))}
            </div>
        </section>
     );
}
 
export default Home;