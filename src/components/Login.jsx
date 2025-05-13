import React, { useState } from "react";

const Login = ({ onNavigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      onNavigate("settings");
    } else {
      alert("Invalid Email & Password!");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center p-6 bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2 text-gray-900">Sign in to your PopX account</h1>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        {/* Email Field */}
        <div className="relative mb-6">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-sm focus:outline-bold focus:border-purple-600"
          />
          <label
            htmlFor="email"
            className="absolute left-3 -top-3 text-l text-purple-600 bg-white "
          >
            Email Address
          </label>
        </div>

        {/* Password Field */}
        <div className="relative mb-6">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2  text-sm focus:outline-bold focus:border-purple-600"
          />
          <label
            htmlFor="password"
            className="absolute left-3 -top-3 text-l text-purple-600 bg-white"
          >
            Password
          </label>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold cursor-pointer"
        >
          Login
        </button>
        <p className="text-sm text-center text-gray-600">
          Already have an account? {' '}
          <button
            onClick={() => onNavigate("register")}
            className="mt-5 text-purple-600 font-medium none cursor-pointer">
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
