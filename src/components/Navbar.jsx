import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md px-8 py-4 ">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-500">Food Recipes</h1>

        <ul className="hidden md:flex gap-6 text-grey-500">
          <Link to="/">
            <li className="cursor-pointer hover:text-orange-500">Home</li>
          </Link>
          <Link to="/recipes">
            <li className="cursor-pointer hover:text-orange-500">Recipes</li>
          </Link>
          <Link to="/favorites">
            <li className="cursor-pointer hover:text-orange-500">Favorites</li>
          </Link>
          <Link to="/contact">
            <li className="cursor-pointer hover:text-orange-500">Contact</li>
          </Link>
        </ul>

        <button className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        >
            {menuOpen ? (
                <XMarkIcon className="w-6 h-6"/>
            ) :(
                <Bars3Icon className="w-6 h-6" />
            )}

        </button>
      </div>

      {menuOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden text-gray-500">
            <Link to="/" onClick={() => setMenuOpen(false)}>
                <li className="hover:text-orange-500">Home</li>
            </Link>
            <Link to="/recipes" onClick={() => setMenuOpen(false)}>
                <li className="hover:text-orange-500">Recipes</li>
            </Link>
            <Link to="/favorites" onClick={() => setMenuOpen(false)}>
                <li className="hover:text-orange-500">Favorites</li>
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
                <li className="hover:text-orange-500">Contact</li>
            </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
