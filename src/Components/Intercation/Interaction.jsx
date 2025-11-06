import React from "react";
import "./interact.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Interaction = () => {
  return (
    <>
      <Header />

      <section className="interaction-section">
        <div className="interaction-container">
          {/* LEFT SIDE: CONTACT INFO */}
          <div className="interaction-left">
            <h1>
              Connect With Our <span>Expert Team</span>
            </h1>

            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h3>Registered Office Address</h3>
                  <p>
                    Shashi Apartment, P.No.13 F.No.101, Maa Bamleshwari, Nagpur,
                    Maharashtra, India - 440030
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h3>Head Office Address</h3>
                  <p>
                    A Floor, Jaypee Vasant Continental Hotel, Vasant Vihar,
                    India - 110057
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h3>Regional Office Address</h3>
                  <p>
                    Hamdan Center,Block No.18, Attipra Village S.N. Nagar,
                    Poundkadavu Ward, Thiruvananthapuram, Kerala, India - 695583
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h3>Email Us</h3>
                  <p>queries@vpvvindia.com</p>
                </div>
              </div>

              <div className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <div>
                  <h3>Call Us</h3>
                  <p style={{ margin: "0", padding: "0" }}>+91 82854 59458</p>
                  <p style={{ margin: "0", padding: "0" }}>+91 99585 26926</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: GOOGLE MAP */}
          <div className="map-flex">
            <div className="interaction-right">
              <iframe
                title="VPVV India Head Office"
                src="https://www.google.com/maps?q=Jaypee+Vasant+Continental+Hotel,+Vasant+Vihar,+New+Delhi,+India&output=embed"
                style={{
                  border: "0",
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="interaction-right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.5681424192735!2d76.877625!3d8.541237299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05be8b862502bb%3A0x6c33531446cb600b!2sHAMDAN%20CENTRE!5e0!3m2!1sen!2sin!4v1762245317070!5m2!1sen!2sin"
                style={{
                  border: "0",
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Interaction;
