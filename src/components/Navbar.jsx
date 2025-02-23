import { Link } from "react-router-dom";

const Navbar = ({ re = false }) => {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-6 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className={`text-2xl font-bold relative overflow-hidden min-w-[160px] ${re ? 'text-[#005555]' : 'text-[#009999]'}`}>
          <span className={`inline 
          block transition-transform duration-500 absolute top-0 left-0 w-full text-left ${re ? '-translate-y-full' : 'translate-y-0'}`}>
            AizuHack
          </span>
          <span className={`inline-block transition-transform duration-500 absolute top-0 left-0 w-full text-left ${re ? 'translate-y-0' : 'translate-y-full'}`}>
            Re:AizuHack
          </span>
          <span className="opacity-0">Re:AizuHack</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/aizu-hack-2025" className="text-[#009999] hover:text-gray-600">AizuHack(初心者向け)</Link>
          <Link to="/re-aizu-hack-2025" className="text-[#009999] hover:text-gray-600">Re:AizuHack(経験者向け)</Link>
          <Link to="/mentors" className="text-[#009999] hover:text-gray-600">メンター</Link>
          <Link to="/faq" className="text-[#009999] hover:text-gray-600">FAQ</Link>
        </div>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#009999]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;