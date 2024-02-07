import React, { useEffect, useState } from "react";

function UserDetails({ userData }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchUserRepos();
  }, [userData]);

  const fetchUserRepos = async () => {
    try {
      const response = await fetch(userData.repos_url);
      const data = await response.json();
      setRepos(data);
    } catch (error) {
      console.error("Error fetching user repos:", error);
    }
  };

  return (
    <div className="details">
      <h2>User Details</h2>
      <img src={userData.avatar_url} alt="User Avatar" />
      <p>Name: {userData.name}</p>
      <p>Location: {userData.location}</p>
      <p>Bio: {userData.bio}</p>
      <h3>Repositories</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserDetails;
