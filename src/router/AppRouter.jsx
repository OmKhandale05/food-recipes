import { Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import RecipeDetails from "../pages/RecipeDetails";
import Recipes from "../pages/Recipes";

const AppRouter = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/recipes" element={<Recipes/>}/>

            <Route path="/recipes/:id" element={<RecipeDetails/>}/>

            <Route path="/contact" element={<Contact/>}/>
        </Routes>
     );
}
 
export default AppRouter;