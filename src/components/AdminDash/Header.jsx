import React from "react";
import Dropdown from "./Dropdown";
// This imports the react router dom
import { Link, useNavigate } from "react-router-dom"; 
import trailor from "../../assets/images/hero.jpg";
import "../../styles/AdminDash/panel.css";

// This component is used to display the header on the admin dashboard
const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate(); // initialize useNavigate hook

  const handleLogout = () => {
    // Clear the user's session or token from storage here
    // Remove the authentication status from localStorage
    localStorage.removeItem("isAuthenticated");
    // Redirect the user to the login page
    navigate("/admin");
  };

  // This is the return statement
  return (
    <div className="admin-header">
      <button className="toggle-sidebar-button" onClick={toggleSidebar} >
        <i className="bx bx-menu toggle-sidebar-icon"></i>
      </button>
      <Dropdown
        avatar={trailor}
        menu={
          <>
            <li className="dropdown-list">
              <Link to="/admin/dashboard" className="dropdown-link"> {/*  This is the link to the user's profile */}
                <i className="bx bx-user dropdown-link-icon"></i>
                Profile
              </Link>
            </li>
            <li className="dropdown-list">
              <button className="dropdown-link" onClick={handleLogout}> {/* This is the logout button */}
                <i className="bx bx-power-off dropdown-link-icon"></i>
                Logout
              </button>
            </li>
          </>
        }
      />
      
    </div>
  );
};

export default Header;
