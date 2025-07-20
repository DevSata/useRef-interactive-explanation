import { useRef, useState } from 'react';

export default function UseRefExamples() {
  // Example 1: Focus on input (like pointing at something)
  const nameInputRef = useRef(null);
  
  // Example 2: Counting button clicks without re-rendering
  const clickCountRef = useRef(0);
  const [showCount, setShowCount] = useState(0);
  
  // Example 3: Storing the previous value
  const [color, setColor] = useState('red');
  const previousColorRef = useRef('');
  
  const focusOnInput = () => {
    // This is like pointing at the input box and saying "Hey, look here!"
    nameInputRef.current.focus();
  };
  
  const countClicks = () => {
    // This counts clicks but doesn't make the page refresh
    clickCountRef.current += 1;
    console.log('Secret click count:', clickCountRef.current);
  };
  
  const showSecretCount = () => {
    setShowCount(clickCountRef.current);
  };
  
  const changeColor = (newColor) => {
    previousColorRef.current = color; // Remember the old color
    setColor(newColor);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">
        🎯 useRef: Like Having Super Memory Powers! 🧠
      </h1>
      
      {/* Example 1: Focusing */}
      <div className="bg-white rounded-lg p-6 mb-6 shadow-lg border-2 border-yellow-300">
        <h2 className="text-2xl font-bold mb-4 text-yellow-700">
          📍 Example 1: Point and Focus (Like a Magic Wand!)
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            useRef is like having a magic wand that can point to things on your webpage!
          </p>
          <div className="flex gap-4 items-center">
            <input
              ref={nameInputRef}
              type="text"
              placeholder="Type your name here..."
              className="px-4 py-2 border-2 border-yellow-400 rounded-lg focus:border-yellow-600 focus:outline-none"
            />
            <button
              onClick={focusOnInput}
              className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 font-bold"
            >
              🎯 Focus Here!
            </button>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>How it works:</strong> The button uses useRef to point at the input box and make it active (focused), just like pointing with your finger!
            </p>
          </div>
        </div>
      </div>

      {/* Example 2: Secret Counter */}
      <div className="bg-white rounded-lg p-6 mb-6 shadow-lg border-2 border-green-300">
        <h2 className="text-2xl font-bold mb-4 text-green-700">
          🤫 Example 2: Secret Counter (Hidden Memory!)
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            useRef can remember things secretly without updating the page!
          </p>
          <div className="flex gap-4 items-center flex-wrap">
            <button
              onClick={countClicks}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 font-bold text-lg"
            >
              🔢 Secret Click Counter
            </button>
            <button
              onClick={showSecretCount}
              className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 font-bold"
            >
              👁️ Reveal Secret Count
            </button>
            <div className="text-2xl font-bold text-green-800">
              Revealed Count: {showCount}
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>How it works:</strong> Each click is secretly counted in useRef. Check your browser console to see the secret count! The page only updates when you click "Reveal".
            </p>
          </div>
        </div>
      </div>

      {/* Example 3: Remember Previous */}
      <div className="bg-white rounded-lg p-6 mb-6 shadow-lg border-2 border-red-300">
        <h2 className="text-2xl font-bold mb-4 text-red-700">
          🎨 Example 3: Remember the Past (Time Machine!)
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            useRef can remember what something was like before it changed!
          </p>
          <div className="flex gap-4 items-center flex-wrap">
            <div 
              className={`w-20 h-20 rounded-full border-4 border-gray-400`}
              style={{ backgroundColor: color }}
            ></div>
            <div className="space-x-2">
              <button
                onClick={() => changeColor('red')}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                🔴 Red
              </button>
              <button
                onClick={() => changeColor('blue')}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                🔵 Blue
              </button>
              <button
                onClick={() => changeColor('green')}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                🟢 Green
              </button>
            </div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-lg">
              <strong>Current color:</strong> {color}
            </p>
            <p className="text-lg">
              <strong>Previous color was:</strong> {previousColorRef.current || 'None yet'}
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>How it works:</strong> useRef remembers the old color before we change to a new one, like having a photo of how things used to look!
            </p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-purple-300">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">
          ✨ What is useRef? (Simple Explanation)
        </h2>
        <div className="space-y-3 text-gray-700">
          <p className="text-lg">
            Think of useRef like having special superpowers:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🎯</div>
              <strong>Pointing Power:</strong> Point at any element on the page
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🧠</div>
              <strong>Secret Memory:</strong> Remember things without updating the page
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">⏰</div>
              <strong>Time Machine:</strong> Remember what things were like before
            </div>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg mt-4">
            <p className="font-semibold text-purple-800">
              The cool thing: Unlike useState, useRef doesn't make your component re-render when it changes. It's like whispering instead of shouting!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
