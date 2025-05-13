import React from "react";

const Welcome = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 items-center justify-center" >
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Welcome to PopX</h1>
        <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>
      <button
        className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold mb-3 cursor-pointer"
        onClick={() => onNavigate("register")}
      >
        Create Account
      </button>
      <button
        className="w-full bg-purple-200 text-black py-3 rounded-md font-semibold cursor-pointer"
        onClick={() => onNavigate("login")}
      >
        Already Registered? Login
      </button>
      </div>

    </div>
  );
};

export default Welcome;
