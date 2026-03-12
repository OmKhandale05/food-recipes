import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-orange-500">Food Recipes</h1>

        <ul className="flex gap-6 text-grey-500">
            <Link to="/">
                <li className="cursor-pointer hover:text-orange-500">Home</li>
            </Link>
            <Link to="/recipes">
                <li className="cursor-pointer hover:text-orange-500">Recipes</li>
            </Link>
            <Link to="/contact">
                <li className="cursor-pointer hover:text-orange-500">Contact</li>
            </Link>
        </ul>
        </nav>
     );
}
 
export default Navbar;