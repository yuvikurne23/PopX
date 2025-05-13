import React, { useEffect, useState } from "react";

const AccountSettings = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("loggedInUser"));
    setUser(u);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    onNavigate("login");
  };

  
  if (!user) return <p className="p-6">No user logged in.</p>;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center -mt-30 p-6 bg-gray-50 ">
      <div className="w-100 shadow-md">
        <div className="w-full p-5 flex justify-between items-center mb-4 bg-gray-500">
          <h2 className="text-xl font-semibold ">Account Settings</h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
          >
            Logout
          </button>
        </div>

        <div className="p-5">
          <div className="flex items-start space-x-4 mb-4">
            <div className="relative">
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.fullName)}`}
                alt="profile"
                className="w-20 h-20 rounded-full object-cover"
              />
              <span className="absolute bottom-0 right-0 bg-white border rounded-full p-1">
                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                  <path d="M2 16h16v2H2z" />
                </svg>
              </span>
            </div>
            <div>
              <h3 className="font-bold text-lg">{user.fullName}</h3>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            Phone: {user.phone}<br />
            Company: {user.company}<br />
            Agency: {user.isAgency}
          </p>
          <p className="w-full text-left mt-5"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, accusamus veritatis repellendus voluptates fugit, provident deleniti nulla enim nemo sunt commodi rerum, laborum aut accusantium debitis nobis exercitationem amet. Voluptas.</p>
        </div>

      </div>
    </div>
  );
};

export default AccountSettings;
