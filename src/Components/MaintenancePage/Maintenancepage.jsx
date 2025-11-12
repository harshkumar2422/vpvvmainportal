import React from "react";
import "./maintenance.css";
const Maintenancepage = () => {
  return (
    <div className="maintenance-container">
      <div className="maintenance-card">
        <div className="maintenance-logo">
          <h1 style={{ letterSpacing: "7px" }}>
            <b>VPVV</b>
          </h1>
        </div>
        <h3>We'll be back soon</h3>
        <p className="maintenance-text">
          The site is currently under maintenance.
          <br />
          We're sorry for the inconvenience - This is an intentional downtime to
          make improvements.
        </p>
        <div className="maintenance-actions">
          <button
            className="btn"
            style={{ color: "white", border: "2px solid white" }}
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
        <p className="maintenance-footer">
          Estimated return: <strong>within a few hours</strong>
        </p>
      </div>
    </div>
  );
};

export default Maintenancepage;
