"use client";
import { useState } from 'react';

export default function Search({ title = "", onValue }) {
  const [userText, setUserText] = useState('');

  const handleValueChange = (e) => {
    const text = e.target.value;
    setUserText(text);
  };

  const handleSearch = () => {
    onValue(userText);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-lg font-semibold mb-2 dark:text-red-300">{title}</h1>
      <div className="flex items-center">
        <input
          type="text"
          className="flex-grow bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white h-10 pl-4 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
          value={userText}
          onChange={handleValueChange}
          placeholder="Buscar usuario..."
        />
        <button
          className="px-4 h-10 rounded-r-lg bg-indigo-500 hover:bg-indigo-600 text-white transition duration-200"
          onClick={handleSearch}
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
