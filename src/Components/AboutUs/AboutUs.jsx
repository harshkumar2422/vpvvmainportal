import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <>
      <Header />
      <section className="about-section">
        <div className="about-content">
          <h1>CHANGE IS THE ONLY CONSTANT</h1>
          <h5 className="about-subline">
            Empowering progress for a stronger India.
          </h5>
          <hr />
          <p>
            <b>The VPVV</b> is a Special Purpose Vehicle, which has secured a
            Work Order from the <b>United States of America</b>, to perform &nbsp;
            <b>
            
              Land Acquisition, Land Clearance, Infrastructure Development and
              Maintenance of Infrastructure
            </b>
             &nbsp; during the Operational phase. The project is <b>“CLASSIFIED”</b> in
            nature.
          </p>
          <br />
          <p>
            The VPVV is the bridging partner between the Corporations of India
            and the Corporations of the USA. Some of the sectors we will be
            involved are: Defense, Energy, Space, Healthcare, Education,
            Maritime Security etc.
          </p>
          <br />
          <p>
            Some of the Core Scope of Work available at VPVV: Construction,
            Tunneling, Logistics, Information Technology, Facility Management,
            Manpower supply, Catering facilities, Procurement, Waste
            Treatment/Disposal etc.
          </p>
          <br />
          <p>
            {" "}
            There are 14 projects that need to be constructed across India by
            2030, averaging 1500 Acres each. Some of the states where work is
            going to take place are: Tamil Nadu, Uttar Pradesh, Maharashtra,
            Madhya Pradesh etc. The Work Order designates us as “The Principal
            Developer”.
          </p>
          <br />
          <p>
            {" "}
            India is the most populous country on the planet, with over 65% of
            its population between the age of 15 and 59, which gives the country
            a significant edge when it comes to skill development and workforce
            deployment in critical manufacturing sector.
          </p>
          <br />
          <p>
            {" "}
            India, ahead of the centenary year, 2047, believes it can be a $ 40
            Trillion economy, thus boosting the infrastructure setup in the
            country as well as providing quality jobs to the massive workable
            population (#1 in the world) is the primary goal of the nation for
            the next 3 decades.
          </p>
          <br />
          <p>
            VPVV Techno Construction is recognized as the “Principal Developer”
            by the Federal Government of United States of America and the
            Department of Defense (DOD), spanning Indian territory, as well as
            upto the Asian continent.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
