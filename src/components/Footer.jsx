import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-2xl font-bold text-white">Food Recipes</h2>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-orange-400 transition">Home</Link>
            <Link to="/recipes" className="hover:text-orange-400 transition">Recipes</Link>
            <Link to="/contact" className="hover:text-orange-400 transition">Contact</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 my-6 ">
        <p className="text-center text-gray-400 text-sm mt-2">©2026 Food Recipes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
