import React from "react";
import "./HealthRevoations.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const HealthRevoations = () => {
  return (
    <>
      <Header />
      <section className="about-section HealthRevoations-section">
        <div className="about-content">
          <h1>THE HEALTHCARE REVOLUTION: TECHNOLOGY MEETS MEDICINE</h1>
          <hr />

          <div className="health-container">
            <img src="https://res.cloudinary.com/dttqciolc/image/upload/v1762247927/healthcareimg1_wc3rmn.png" alt="" />
            <div>
              <h5 className="linecard">Predictive Diagnostics </h5>
              <p>
                Advanced and Intelligent algorithms would analyze medical images
                with greater accuracy than human specialists, detecting subtle
                patterns invisible to the naked eye. Use of advanced algorithms
                would facilitate early detection of dreaded diseases like cancer
                through thermal imaging, making screening more accessible and
                comfortable.
              </p>
            </div>
          </div>
          <br />
         
          <div className="health-container healthSecond-container">
            <div>
              <h5 className="linecard">Personalized Treatment </h5>
               <p>
              VPVV has a vision to deploy Big data analytics to revolutionize
              treatment protocols by analyzing millions of patient records to
              identify the most effective approaches. This healthcare platform
              will use Advanced Technology to analyze patient data and provide
              personalized healthcare recommendations, improving outcomes across
              diverse populations.
            </p>
            </div>
           
            <img src="https://res.cloudinary.com/dttqciolc/image/upload/v1762247930/healthcareimg2_ykxoga.png" alt="" />
          </div>
          <br />
         
          <div className="health-container">
            <img src="https://res.cloudinary.com/dttqciolc/image/upload/v1762248111/healthcareimg3_tcgsdy.png" alt="" />
            <div>
              <h5 className="linecard">Tech -Assisted Surgery </h5>
              <p>
              Robotic surgical systems guided by a highly advanced Technology
              will perform complex procedures with unprecedented precision. It’s
              an endeavor to use advanced robotic surgery across several
              specialties, reducing complications and recovery time while
              expanding access to advanced surgical techniques.
            </p>
            </div>
            
          </div>
          <br />
         
          <div className="health-container healthSecond-container">
            <div>
               <h5 className="about-subline">
            Ship Hospitals: Healthcare That Navigates to Need
              </h5>
               <p className="healthcars-p-li">
              <ul>
                <li>
                  Fully equipped operating theatres capable of complex surgeries
                </li>
                <li>
                  ICU facilities with ventilator support and advanced monitoring
                </li>
                <li>Diagnostic laboratories for comprehensive testing</li>
                <li>Blood banks and pharmaceutical compounding capabilities</li>
                <li>
                  Telemedicine links to mainland specialists for consultation
                </li>
                <li>
                  Helicopter landing pads for emergency medical evacuations
                </li>
              </ul>
            </p>
            </div>
           
            <img src="https://res.cloudinary.com/dttqciolc/image/upload/v1762248116/healthcareimg4_srn43v.png" alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HealthRevoations;
