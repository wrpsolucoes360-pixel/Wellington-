
import React, { useState, useCallback } from 'react';

interface BioDisplayProps {
  bio: string;
}

const BioDisplay: React.FC<BioDisplayProps> = ({ bio }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(bio).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [bio]);

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-700 relative animate-fade-in">
      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
        aria-label="Copy to clipboard"
      >
        {copied ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      </button>
      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">Your AI-Generated Bio</h3>
      <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{bio}</p>
    </div>
  );
};

export default BioDisplay;
