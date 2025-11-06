import React, { useEffect, useRef, useState } from "react";
import "./Construction.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const AnimatedNumber = ({ target, suffix }) => {
  const [value, setValue] = useState(0);
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
  }, []);

  useEffect(() => {
    if (visible) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const stepTime = 20;
      const increment = target / (duration / stepTime);

      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          setValue(target);
          clearInterval(counter);
        } else {
          setValue(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(counter);
    }
  }, [visible, target]);

  return (
    <h2 ref={ref}>
      {value}
      {suffix}
    </h2>
  );
};

const Construction = () => {
  return (
    <>
      <Header />
      <section className="about-section construction-section">
        <div className="about-content construction-heading">
          <h1>
            FUTURISTIC CONSTRUCTION: SUPER ADVANCED TECHNOLOGY, AUTOMATION &
            SMART MATERIALS
          </h1>
          <hr />
          <p>
            VPVV endeavors in exploration of emerging technologies that are set
            to revolutionize the construction industry. The super advanced
            technology, automation, and innovative materials would create
            unprecedented opportunities for efficiency, sustainability, and
            design possibilities.
          </p>
          <br />
          <p>
            The autonomous systems operate 24/7 with unmatched precision,
            reducing human labor costs by up to 70% while dramatically improving
            site safety metrics.
          </p>
          <br />

          <div className="health-container">
            <img
              src="https://res.cloudinary.com/dttqciolc/image/upload/v1762246381/constructionimg1_dxosze.png"
              alt=""
            />
            <div className="">
              <h5
                style={{
                  textAlign: "left",
                  fontSize: "35px",
                  fontWeight: "700",
                }}
              >
                Bricklaying Robots
              </h5>
              <p>
                The SAM (Semi-Automated Mason) can lay up to 3,000 bricks per
                day, far exceeding human capacity while maintaining perfect
                precision.
              </p>
            </div>
          </div>
          <br />

          <div className="health-container healthSecond-container">
            <div>
              <h5 className="linecard">Welding Robots</h5>
              <p>
                Automated welders can work in hazardous conditions and confined
                spaces, performing consistent welds with millimeter precision.
              </p>
            </div>

            <img
              src="https://res.cloudinary.com/dttqciolc/image/upload/v1762246427/constructionimg2_yrzeyo.png"
              alt=""
            />
          </div>
          <br />

          <div className="health-container">
            <img
              src="https://res.cloudinary.com/dttqciolc/image/upload/v1762246457/constructionimg3_vegnwq.png"
              alt=""
            />
            <div>
              <h5 className="linecard">3D Printing Arms</h5>
              <p>
                These machines can operate continuously, creating complex
                structures with minimal human intervention and reducing material
                waste significantly.
              </p>
            </div>
          </div>
          <br />

          <div className="health-container healthSecond-container">
            <div>
              <h5 className="linecard">
                IoT-Integrated Smart Construction Sites Connected Equipment
              </h5>
              <p>
                Every vehicle, tool, and piece of machinery on site transmits
                real-time performance data, enabling predictive maintenance and
                usage optimization. Fuel consumption can be reduced by 20%
                through Futuristic Technology managed idle time reduction.
              </p>
            </div>

            <img
              src="https://res.cloudinary.com/dttqciolc/image/upload/v1762246458/constructionimg4_vvvwc7.png"
              alt=""
            />
          </div>
          <br />
          <h5 className="about-subline">
            Key Takeaways: The Future Of Construction
          </h5>

          {/* Key Takeaways Grid Section with Animated Numbers */}
          <div className="takeaways-grid">
            <div className="takeaway-item">
              <AnimatedNumber target={40} suffix="%" />
              <h4>Labor Reduction</h4>
              <p>
                Through automation and AI assistance, reducing costs while
                addressing skilled labor shortages
              </p>
            </div>
            <div className="takeaway-item">
              <AnimatedNumber target={70} suffix="%" />
              <h4>Faster Completion</h4>
              <p>
                Combining prefabrication, 3D printing, and AI-optimized
                scheduling dramatically accelerates projects
              </p>
            </div>
            <div className="takeaway-item">
              <AnimatedNumber target={60} suffix="%" />
              <h4>Waste Reduction</h4>
              <p>
                Smart materials, precise planning, and optimized resource use
                minimize environmental impact
              </p>
            </div>
            <div className="takeaway-item">
              <AnimatedNumber target={30} suffix="%" />
              <h4>Cost Savings</h4>
              <p>
                Overall reduction in project costs through efficiency, despite
                higher initial technology investment
              </p>
            </div>
          </div>

          <p className="takeaway-footer">
            The construction industry stands at the threshold of its greatest
            technological revolution. Companies that embrace these innovations
            will gain competitive advantages in efficiency, quality, and
            sustainability while solving critical workforce challenges.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Construction;
