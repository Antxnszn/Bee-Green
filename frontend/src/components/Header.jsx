import { useState } from 'react';
import { Link } from 'react-router-dom';
import BeeIcon from '../icons/BeeIcon';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-[#D5B444] w-full z-20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <BeeIcon />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#453B1E]">Bee-Green</span>
        </Link>

        {/* Right Section: Image and Toggle Button */}
        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
          <img src="/hive.png" alt="Hive logo" className="h-[45pt]" />
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-sticky"
            type="button"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#E6E0CE] rounded-lg md:hidden hover:bg-gray-100 focus:outline-none hover:bg-[#ECD99C]"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Menu Section */}
        <div
          className={`items-center justify-between ${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link
                to="/Funcionamiento"
                className="block py-2 px-3 text-[#453B1E] rounded hover:bg-[#ECD99C] md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-[#705600]"
              >
                ¿Cómo funciona?
              </Link>
            </li>
            <li>
              <Link
                to="/AboutUs"
                className="block py-2 px-3 text-[#453B1E] rounded hover:bg-[#ECD99C] md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-[#705600]"
              >
                Nosotros
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
