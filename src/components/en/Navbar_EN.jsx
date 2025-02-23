import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar_EN = ({ re = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const toggleLanguage = () => {
    if (location.pathname.includes('/ja')) {
      navigate(location.pathname.replace('/ja', '/en'));
    } else if (location.pathname.includes('/en')) {
      navigate(location.pathname.replace('/en', '/ja'));
    } else {
      navigate('/ja');
    }
  };

  return (
    <nav className="w-full bg-white shadow-md py-4 px-6 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center">
        {/* Left: Title */}
        <div className="w-64">
          <Link to="/" className={`text-2xl font-bold relative h-8 block overflow-hidden min-w-[160px] ${re ? 'text-[#005555]' : 'text-[#009999]'}`}>
            <span className={`absolute top-0 left-0 w-full transition-transform duration-500 ${re ? '-translate-y-full' : 'translate-y-0'}`}>
              AizuHack
            </span>
            <span className={`absolute top-0 left-0 w-full transition-transform duration-500 ${re ? 'translate-y-0' : 'translate-y-full'}`}>
              Re:AizuHack
            </span>
          </Link>
        </div>
        {/* Center: Navigation Links */}
        <div className="flex-1 hidden md:flex justify-center space-x-6">
          <Link to="/en/aizu-hack-2025" className="text-[#009999] hover:text-gray-600 whitespace-nowrap">
            AizuHack (For Beginners)
          </Link>
          <Link to="/en/re-aizu-hack-2025" className="text-[#009999] hover:text-gray-600 whitespace-nowrap">
            Re:AizuHack (For Experienced)
          </Link>
          <Link to="/en/mentors" className="text-[#009999] hover:text-gray-600 whitespace-nowrap">
            Mentors
          </Link>
          <Link to="/en/faq" className="text-[#009999] hover:text-gray-600 whitespace-nowrap">
            FAQ
          </Link>
        </div>
        {/* Right: Globe Toggle and Mobile Menu */}
        <div className="w-64 flex justify-end items-center">
          <button onClick={toggleLanguage} className="mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#009999] hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 4.418-3.582 8-8 8M20 19c-4.418 0-8-3.582-8-8M4 11c0-4.418 3.582-8 8-8m0 0c4.418 0 8 3.582 8 8" />
            </svg>
          </button>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#009999]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar_EN;
