import React, { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';

function App() {
  const [currentColor, setCurrentColor] = useState('#3B82F6');

  // Function to generate random hexadecimal color
  const getRandomColor = (): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Handle color change
  const handleColorChange = () => {
    const newColor = getRandomColor();
    setCurrentColor(newColor);
  };

  // Handle keyboard accessibility
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === 'Space' || event.code === 'Enter') {
        event.preventDefault();
        handleColorChange();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="container max-w-md mx-auto text-center">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <Palette className="w-8 h-8 text-gray-700 mr-2" />
            <h1 className="text-4xl font-bold text-gray-800">Color Changer</h1>
          </div>
          <p className="text-gray-600 text-lg">Click the button to generate a random color</p>
        </div>

        {/* Color Box */}
        <div 
          id="color-box"
          className="w-80 h-80 mx-auto mb-8 rounded-2xl shadow-2xl border-4 border-white transform transition-all duration-500 ease-in-out hover:scale-105"
          style={{ backgroundColor: currentColor }}
        >
          <div className="h-full flex items-center justify-center">
            <div className="bg-white bg-opacity-90 px-6 py-3 rounded-full shadow-lg">
              <span className="text-gray-800 font-mono text-lg font-semibold">
                {currentColor}
              </span>
            </div>
          </div>
        </div>

        {/* Change Color Button */}
        <button
          id="change-color-btn"
          onClick={handleColorChange}
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          Change Color
        </button>

        {/* Instructions */}
        <div className="mt-8 text-sm text-gray-500">
          <p>Press Space or Enter to change colors with keyboard</p>
        </div>
      </div>
    </div>
  );
}

export default App;