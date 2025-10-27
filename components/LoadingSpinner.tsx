
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-12 h-12 border-4 border-t-transparent border-purple-400 rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-400">Crafting your professional bio...</p>
    </div>
  );
};

export default LoadingSpinner;
