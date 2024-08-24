import React from 'react';
import TranscriptEditor from "./components/Editor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { initialTranscript } from "./data";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Transcript Editor</h1>
        
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="p-6">
            <TranscriptEditor initialTranscript={initialTranscript} />
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">How to Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-20 rounded-lg shadow-md p-6 transform transition duration-500 hover:scale-105">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 className="text-xl font-semibold text-white">Start Playback</h3>
              </div>
              <p className="text-gray-100">Click the play button to begin the audio playback and see the words highlighted in real-time.</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg shadow-md p-6 transform transition duration-500 hover:scale-105">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                <h3 className="text-xl font-semibold text-white">Edit Words</h3>
              </div>
              <p className="text-gray-100">Simply click on any word in the transcript to open the editing dialog and make changes.</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg shadow-md p-6 transform transition duration-500 hover:scale-105">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <h3 className="text-xl font-semibold text-white">Apply Changes</h3>
              </div>
              <p className="text-gray-100">Use the "Correct" button to apply changes to a single instance of the word in the transcript.</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg shadow-md p-6 transform transition duration-500 hover:scale-105">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                <h3 className="text-xl font-semibold text-white">Correct All</h3>
              </div>
              <p className="text-gray-100">Use "Correct All" to apply your changes to every instance of the selected word throughout the entire transcript.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
