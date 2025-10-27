
import React from 'react';

interface KeywordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled: boolean;
}

const KeywordInput: React.FC<KeywordInputProps> = ({ value, onChange, disabled }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder="e.g., React, TypeScript, Node.js, Next.js, creative problem-solver, loves hiking and chess..."
      className="w-full h-32 p-4 bg-gray-900 border-2 border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-300 text-gray-200 resize-none placeholder-gray-500 disabled:opacity-50"
    />
  );
};

export default KeywordInput;
