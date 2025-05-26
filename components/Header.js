"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-orange-500">Logo</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-600 hover:text-orange-500 transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-orange-500 transition"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-orange-500 transition"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-orange-50 transition"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "top-[72px] opacity-100 visible"
              : "top-[-100%] opacity-0 invisible"
          }`}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-600 hover:text-orange-500 transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-orange-500 transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-orange-500 transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
