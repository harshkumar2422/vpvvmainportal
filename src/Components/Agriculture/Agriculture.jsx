import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import agricultureimg from "../HomeImg/agricultureimg.png";
import "./Agriculture.css";

const Agriculture = () => {
  return (
    <>
      <Header />
      <section className="about-section agri-section">
        <div className="about-content agricluture-heading">
          <h1>
            ADVANCED AGRICULTURE TECHNIQUES: TRANSFORMING THE FUTURE OF FOOD
            PRODUCTION{" "}
          </h1>
          <hr />

          <p>
            Innovative farming methods are revolutionizing food production by
            dramatically reducing resource consumption, increasing yields, and
            enabling agriculture in non-traditional environments. These
            techniques represent the cutting edge of sustainable food systems
            that will help feed our growing global population.
          </p>
          <br />
          <div className="agri-container">
            <div>
              <h5 className="about-subline agri-heading-5" >
                Hydroponic Farming: Growing Without Soil
              </h5>
              <p>
                Hydroponics is a soilless cultivation method using nutrient-
                rich water solutions. Plants grow in inert mediums like coco
                coir, perlite, or clay pellets that provide support but no
                nutrients.
              </p>
              <br />
              <p>
                <ul>
                  <li>90% less water usage than traditional farming</li>
                  <li>30-50% faster growth rates</li>
                  <li>No weeds or soil-borne diseases</li>
                  <li>Perfect for urban environments</li>
                </ul>
              </p>
            </div>
            <img src={agricultureimg} alt="" className="agricultureimg" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Agriculture;
