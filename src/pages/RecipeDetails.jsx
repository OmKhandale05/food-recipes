import { useParams } from "react-router-dom";
import recipes from "../data/recipes";
import { StarIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";


const RecipeDetails = () => {

    const { id } = useParams();

    const recipe = recipes.find((r) => r.id === Number(id));

    if(!recipe){
        return <h1 className="text-center text-2xl mt-20">Recipe not found</h1>;
    }
    return ( 
        <section className="max-w-4xl mx-auto py-16 px-6">

            <img 
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-80 object-cover rounded-xl mb-8"
            />
            <h1 className="text-4xl font-bold mb-6 ">{recipe.title}</h1>

            <div className="flex  gap-6 text-grey-600 mb-6">
                <span className="flex item-center gap-1"><StarIcon className="w-5 h-5 text-yellow-500"/>
                    {recipe.rating}
                </span>
                <span className="flex item-center gap-1"><ClockIcon className="w-5 h-5 text-yellow-500"/>{recipe.time}</span>
                <span className="bg-orange-500 text-white  rounded px-5 ">{recipe.category}</span>
            </div>

            <p className="text-grey-700 leading-relaxed">
                This is a delicious {recipe.title}. In a real application this page would include ingredients,
                cooking steps, and nutritional information.
            </p>
            
        </section>
     );
}
 
export default RecipeDetails;