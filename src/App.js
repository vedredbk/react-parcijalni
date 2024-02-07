import logo from "./logo.svg";
import React, { useState } from "react";
import UserDetails from "./UserDetails";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchUserData();
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <input
          className="search"
          type="text"
          value={username}
          onChange={handleChange}
          placeholder="Unesite GitHub korisničko ime"
        />
        <button className="submit" type="submit">
          Pretraži
        </button>
      </form>
      {userData && <UserDetails userData={userData} />}
    </div>
  );
}

export default App;
