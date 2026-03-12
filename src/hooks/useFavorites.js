import { useEffect, useState } from "react";

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
        }else{
            updated = [...favorites, id];
        }

        setFavorites(updated);
        localStorage.setItem("favorites", JSON.stringify(updated));
    }
    return {
        favorites, toggleFavorite
    };
}
 
export default useFavorites;