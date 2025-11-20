import React from "react";
import "./AdminNewsSidebar.css";
import { Link } from "react-router-dom";
const AdminNewsSidebar = () => {
  return (
    <>
      <div className="sidebar">
        {/* Header */}
        <div className="sidebar-header">
          <img
            style={{ width: "65px" }}
            alt="VPVV"
            src="https://res.cloudinary.com/dttqciolc/image/upload/v1762494318/logo-vpvv-enhance_deivee.png"
          />
          <div>
            <h2 className="sidebar-title">VPVV Portal</h2>
            <p className="sidebar-subtitle">News Management</p>
          </div>
        </div>

        <ul className="sidebar-menu">
          {/* Dashboard */}
          <li>
            <Link to="/admin-all-news">
              <span>All News</span>
            </Link>
          </li>
          <li>
            <Link to="/admin-key-highlights-news">
              <span>Key Highlights</span>
            </Link>
          </li>
          <li>
            <Link to="/admin-regular-news">
              <span>Regular News</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminNewsSidebar;
