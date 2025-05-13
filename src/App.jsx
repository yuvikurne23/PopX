import React, { useState } from "react";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import AccountSettings from "./components/AccountSettings";

function App() {
  const [screen, setScreen] = useState("welcome");

  const renderScreen = () => {
    switch (screen) {
      case "login":
        return <Login onNavigate={setScreen} />;
      case "register":
        return <Register onNavigate={setScreen} />;
      case "settings":
        return <AccountSettings />;
      default:
        return <Welcome onNavigate={setScreen} />;
    }
  };
  <AccountSettings onNavigate={(page) => setCurrentPage(page)} />


  return <div>{renderScreen()}</div>;
}

export default App;
