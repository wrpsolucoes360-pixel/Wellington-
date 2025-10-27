
import React, { useState, useCallback } from 'react';
import { generateBio } from './services/geminiService';
import Header from './components/Header';
import KeywordInput from './components/KeywordInput';
import GenerateButton from './components/GenerateButton';
import LoadingSpinner from './components/LoadingSpinner';
import BioDisplay from './components/BioDisplay';
import Footer from './components/Footer';
import ErrorDisplay from './components/ErrorDisplay';

const App: React.FC = () => {
  const [keywords, setKeywords] = useState<string>('');
  const [generatedBio, setGeneratedBio] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateBio = useCallback(async () => {
    if (!keywords.trim()) {
      setError('Please enter some keywords to generate a bio.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedBio('');

    try {
      const bio = await generateBio(keywords);
      setGeneratedBio(bio);
    } catch (err) {
      setError('Failed to generate bio. Please check your connection or API key and try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [keywords]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="w-full max-w-3xl mx-auto flex flex-col flex-grow">
        <Header />
        <main className="flex-grow w-full mt-8 sm:mt-12">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-700">
            <p className="text-gray-300 mb-4 text-center">
              Enter some keywords about your skills, experience, and personality.
            </p>
            <KeywordInput value={keywords} onChange={(e) => setKeywords(e.target.value)} disabled={isLoading} />
            <div className="mt-6 flex justify-center">
              <GenerateButton onClick={handleGenerateBio} disabled={isLoading || !keywords.trim()} />
            </div>
          </div>
          <div className="mt-8">
            {isLoading && <LoadingSpinner />}
            {error && <ErrorDisplay message={error} />}
            {generatedBio && <BioDisplay bio={generatedBio} />}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
