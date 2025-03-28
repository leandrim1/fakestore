import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full fixed h-45 flex items-center justify-between px-5 sm:px-10 md:px-20 select-none z-1">
      <div className="flex items-center">
        <img src="\atomic.svg" alt="Logo" className="w-30 h-15 " />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-2 lg:gap-10 md:gap-4">
        <div className="hidden md:flex items-center lg:gap-10 md:gap-4 border-1 border-neutral-700 bg-neutral-900 opacity-99  rounded-4xl p-4">
          <div>
            <strong className="text-neutral-400 hover:text-neutral-300">Features</strong>
          </div>
          <div>
            <strong className="text-neutral-400 hover:text-neutral-300">How it works</strong>
          </div>
          <div>
            <strong className="text-neutral-400 hover:text-neutral-300">Testimonials</strong>
          </div>
          <div>
            <strong className="text-neutral-400 hover:text-neutral-300">FAQs</strong>
          </div>
        </div>
      </nav>
      <button className="hidden md:flex items-center h-10 px-4 rounded-3xl text-neutral-100 hover:border-neutral-400 border-1 border-neutral-700 bg-neutral-800 p-6 font-semibold">
          Notify me
        </button>
      

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center bg-neutral-300 rounded-full">
        <button
          onClick={toggleMenu}
          className="text-gray-800 hover:text-gray-700"
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-40 left-0 w-full bg-neutral-900 opacity-99 shadow-lg z-10">
          <nav className="flex flex-col items-center py-4">
            <div className="py-2">
              <strong className="text-neutral-400 hover:text-neutral-300">
                Features
              </strong>
            </div>
            <div className="py-2">
              <strong className="text-neutral-400 hover:text-neutral-300">
                How it works
              </strong>
            </div>
            <div className="py-2">
              <strong className="text-neutral-400 hover:text-neutral-300">
                Testimonials
              </strong>
            </div>
            <div className="py-2">
              <strong className="text-neutral-400 hover:text-neutral-300">
                FAQs
              </strong>
            </div>
            <button className="flex items-center h-10 px-4 rounded-3xl text-neutral-100 hover:border-neutral-400 border-1 border-neutral-700 bg-neutral-800 p-6 font-semibold">
              Notify me
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
