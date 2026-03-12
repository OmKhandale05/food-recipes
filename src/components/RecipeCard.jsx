const RecipeCard = ({ title, image}) => {
    return ( 
        <div>
            <img 
                src={image}
                alt={title} 
                className="" 
            />
            <div>
                <h3>{title}</h3>
                <button>View Recipe</button>
            </div>
        </div>
     );
}
 
export default RecipeCard;