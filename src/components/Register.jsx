import React, { useState } from "react";

const Register = ({ onNavigate }) => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(form));
    onNavigate("settings");
  };

  return (
    <div className="h-screen p-6 bg-gray-50 flex flex-col justify-center items-center"  >
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">Create your PopX account</h1>

        {[
          ["Full Name", "fullName"],
          ["Phone number", "phone"],
          ["Email address", "email"],
          ["Password", "password"],
          ["Company name", "company"],
        ].map(([label, name]) => (
          <div className="relative mb-6">
          <div key={name} className="mb-4">
            <label className="text-sm font-medium text-purple-600 absolute left-2 -top-1.5 bg-white" >{label}{["fullName", "phone", "email", "password"].includes(name)}</label>
            <input
              type={name === "password" ? "password" : "text"}
              name={name}
              value={form[name]}
              onChange={handleChange}
              placeholder={`Enter ${label}`}
              className="w-full border rounded-md p-2 mt-1"/>
          </div>
          </div>

        ))}

        <p className="text-sm font-medium text-gray-700 mb-2">Are you an Agency?*</p>
        <div className="flex gap-6 mb-6">
          {["yes", "no"].map((val) => (
            <label key={val} className="flex items-center gap-2">
              <input
                type="radio"
                name="isAgency"
                value={val}
                checked={form.isAgency === val}
                onChange={handleChange}
                className="accent-purple-600"
              />
              {val.charAt(0).toUpperCase() + val.slice(1)}
            </label>
          ))}
        </div>

        <button onClick={handleSubmit} className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold cursor-pointer">
          Create Account
        </button>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{' '}
          <button
            onClick={() => onNavigate("login")}
            className="mt-5 text-purple-600 font-medium none cursor-pointer"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
