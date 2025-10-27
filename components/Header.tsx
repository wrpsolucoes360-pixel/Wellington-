
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center w-full">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          AI Profile Generator
        </span>
      </h1>
      <p className="mt-3 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
        Craft the perfect developer bio for your GitHub Pages portfolio.
      </p>
    </header>
  );
};

export default Header;
