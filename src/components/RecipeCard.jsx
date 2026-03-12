const RecipeCard = ({ title, image}) => {
    return ( 
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img 
                src={image}
                alt={title} 
                className="w-full h-48 object-cover" 
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                    View Recipe
                </button>
            </div>
        </div>
     );
}
 
export default RecipeCard;