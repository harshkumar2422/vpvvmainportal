import React from "react";
import "./ManagementTeam.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const ManagementTeam = () => {
  return (
    <>
      <Header />
      <section className="management-section">
        <div className="management-content">
          <h1>CHANGE IS THE ONLY CONSTANT</h1>
          <h5 className="management-subline">
            Empowering progress for a stronger India.
          </h5>
          <hr />
        </div>
      </section>
      {/* 1 */}
      <div className="management-fixes-section">
        <div className="management-card-content">
          <div className="management-card">
            <img
              src="https://res.cloudinary.com/dttqciolc/image/upload/v1762246790/chairman2_quev2s.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="management-content-container">
          <h3 className="mb-2">Chairman</h3>
          <p className="textalign">
            <b>Mr. Venkita Venkat, </b>Chairman of VPVV Techno Construction Pvt
            Ltd., is a seasoned leader with over 34 years of multi-sector
            experience spanning IT, energy, and defence. From his early days at
            HCL Technologies and global programme management roles, to senior
            leadership at Reliance Industries and his pivotal contribution as
            India’s liaison for the Rafale fighter acquisition, Mr. Venkat has
            consistently driven high-value, high-sensitivity initiatives. At
            VPVV, he now directs one of India’s most complex nation-building
            programmes, integrating civil works, advanced technology, and
            airtight security protocols. Recognised for his strategic
            leadership, crisis management, and ability to align stakeholders
            across government and industry, he combines visionary thinking with
            disciplined execution. A lifelong learner and mentor, Mr. Venkat is
            admired for his calm resolve, zero-defect delivery mindset, and
            ability to bridge technical teams with policymakers—qualities that
            have earned him enduring respect in both corporate and national
            circles
          </p>
        </div>
      </div>
      {/* 2 */}
      <div className="management-fixes-section director-two">
        <div className="management-content-container">
          <h3 className="mb-2">Director</h3>
          <p className="textalign">
            <b> Mr. Rahul Rajeev Nair </b>(b. 1995), Director – Strategy &
            Transformation at VPVV Techno Construction Pvt Ltd., represents the
            new generation of leaders—analytical, adaptive, and outcome-driven.
            After founding early-stage ventures and serving six years as VPVV’s
            external adviser, where he introduced decision-support dashboards,
            war-room protocols, and risk frameworks that accelerated approvals
            by 30%, he joined the Board in 2021. Since then, he has chaired the
            Executive Operations Council, spearheaded digital-twin adoption, and
            overseen the ahead-of-schedule commissioning of VPVV’s first
            high-security pilot facility. Recognised for his ability to
            translate complexity into decisive action, Mr. Nair has restructured
            governance policies, built real-time analytics frameworks, and
            negotiated fiscal resilience programmes that saved over ₹1,000
            crore. He champions next-generation leadership through Project
            Ignite, embedding micro-learning and reverse-mentoring to uplift
            decision velocity and collaboration across VPVV. Valued as an
            architect of “smart execution,” he is admired for his clarity,
            data-driven foresight, and commitment to building resilient systems
            and future-ready talent.
          </p>
        </div>
        <div className="management-card-content">
          <div className="management-card">
            <img
              src="https://res.cloudinary.com/dttqciolc/image/upload/v1762246801/DirectorSecond_xamgib.jpg"
              alt="Rahul Rajeev Nair"
            />
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="management-fixes-section">
        <div className="management-card-content">
          <div className="management-card">
            <img
              src="https://res.cloudinary.com/dttqciolc/image/upload/v1762246800/Director3_zdrogn.jpg"
              alt="Hitesh Kumar"
            />
          </div>
        </div>
        <div className="management-content-container">
          <h3 className="mb-2">Director</h3>
          <p className="textalign">
            <b> Mr. Hitesh Kumar</b> (b. 1994), Director – Operations & Partner
            Ecosystems at VPVV Techno Construction Pvt Ltd., is a dynamic
            operations architect whose career blends deep technology expertise
            with entrepreneurial agility. Starting at HCL and global IT-Telecom
            providers, he quickly advanced into leadership roles, introducing
            predictive fault-analysis and managing Tier-1 network upgrades
            across geographies. Joining VPVV as an external consultant in 2016,
            he designed the company’s first integrated control-tower dashboard
            and piloted commissioning drills that became SOP across all sites.
            Elevated to the Board in 2019, he now oversees the operational
            backbone of VPVV’s nation-building programme—driving vendor
            governance, logistics synchronisation, and performance engineering
            through innovations like the Unified Operations Command hub and
            Partner-Excellence Framework. Recognised as “the operations
            accelerator,” Mr. Kumar is valued for turning complexity into
            streamlined execution, embedding lean audits that stabilise costs,
            and fostering a culture of agility, transparency, and measurable
            wins across VPVV’s multi-sector mission.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ManagementTeam;
