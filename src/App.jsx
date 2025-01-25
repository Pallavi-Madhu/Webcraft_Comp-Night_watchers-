import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';  // Ensure this import is present


function App() {
  

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-4xl font-bold">✅ Tailwind CSS is Working!</h1>
        <p className="mt-4 text-lg">
          If you see styles applied, Tailwind is configured correctly.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition">
          Test Button
        </button>
      </div>
    </>
  );
}

export default App
