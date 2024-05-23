import React from "react";

import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Welcome
        </h1>
        <div className="flex justify-center space-x-4">
          <Link to="/employee">
            {" "}
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Employee
            </button>
          </Link>
          <Link to="/department">
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Department
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
