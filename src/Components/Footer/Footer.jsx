import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section company-info">
          <h3>VPVV Techno Construction Pvt. Ltd.</h3>
          <hr />
          <p className="cin">CIN: U45500MH2018PTC315532</p>
          <p className="footer-text">
            © All rights reserved. Any reproduction, distribution, or
            exploitation of this content without permission is strictly
            prohibited.
          </p>
        </div>

        {/* Addresses */}
        <div className="footer-section addresses">
          <h4>Our Offices</h4>
          <hr />
          <p>
            <FaMapMarkerAlt className="footer-icon" />{" "}
            <strong>Registered Address:</strong>
            <br />
            SHASHI APARTMENT, P.NO.13 F.NO.101, MAA BAMLESHWARI, Nagpur,
            Maharashtra, India, 440030
          </p>
          <p>
            <FaMapMarkerAlt className="footer-icon" />{" "}
            <strong>Headquarter Address:</strong>
            <br />
            VPVV Techno Construction Pvt Ltd, A Floor, Jaypee Vasant
            Continental, Vasant Vihar, New Delhi, 110057
          </p>
          <p>
            <FaMapMarkerAlt className="footer-icon" />{" "}
            <strong>Regional Address:</strong>
            <br />
            Hamdan Centre, NH 47 Bypass Road, S.N. Nagar, Kulathoor,
            Kazhakootam, Thiruvananthapuram, Kerala - 695583
          </p>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <hr />
          <p>
            <FaEnvelope className="footer-icon" /> queries@vpvvindia.com
          </p>
          <p>
            <FaPhoneAlt className="footer-icon" /> +91 82854 59458
          </p>
          <p>
            <FaPhoneAlt className="footer-icon" /> +91 99585 26926
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} VPVV Techno Construction Pvt. Ltd. | All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
