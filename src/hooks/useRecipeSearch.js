import { useState } from "react";

const useRecipeSearch = (recipes) => {

    const [search, setSearch] = useState("");

    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(search.toLowerCase()));
    return {
        search,
        setSearch,
        filteredRecipes
    };
}
 
export default useRecipeSearch;