import { useState } from "react";

const useCategoryFilter = (recipes) => {

    const [category, setCategory] = useState("All");

    const filteredByCategory = recipes.filter((recipe) =>
    category === "All" ? true : recipe.category === category);
    return {
        category,
        setCategory,
        filteredByCategory
    };
}
 
export default useCategoryFilter;