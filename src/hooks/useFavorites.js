import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useFavorites = () => {

    const [favorites, setFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem("favorites")) || [];
    });

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    },[] );

    const toggleFavorite = (id) => {
        let updated;

        if(favorites.includes(id)){
            updated = favorites.filter((fav) => fav !== id);
            toast.info("Removed from favorites");
        }else{
            updated = [...favorites, id];
            toast.success("Added to favorites");
        }

        setFavorites(updated);
        localStorage.setItem("favorites", JSON.stringify(updated));
    }
    return {
        favorites, toggleFavorite
    };
}
 
export default useFavorites;