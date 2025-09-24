// src/App.jsx
import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          GitHub User Search
        </h1>
        
        {/* Search form */}
        <Search />
      </div>
    </div>
  );
}

export default App;
