import React from "react";
import "./css/profilepage.css";

const ProfilePage = () => {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    role: "Frontend Developer",
    avatar: "https://via.placeholder.com/120",
  };

  return (
    <div className="profilePage">
      <div className="profileCard">
        <img src={user.avatar} alt="avatar" className="profileAvatar" />

        <h2>{user.name}</h2>
        <p className="role">{user.role}</p>

        <div className="info">
          <p>
            <span>Email:</span> {user.email}
          </p>
        </div>

        <button className="editBtn">Edit Profile</button>
      </div>
    </div>
  );
};

export default ProfilePage;
