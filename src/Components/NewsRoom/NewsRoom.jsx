import React, { useEffect, useState } from "react";
import "./NewsRoom.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { server } from "../../App.js";

const NewsRoom = () => {
  const [highlightData, setHighlightData] = useState([]);
  const [regularNews, setRegularNews] = useState([]);
  const [visibleNewsCount, setVisibleNewsCount] = useState(15); // SHOW 6 NEWS FIRST
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`${server}/getnews`);
        const allNews = res.data.news || [];

        // Highlight news
        const highlightNews = allNews.filter(
          (item) => item.Type === "highlight"
        );
        const grouped = [];
        for (let i = 0; i < highlightNews.length; i += 5) {
          const slice = highlightNews.slice(i, i + 5);
          grouped.push({
            large: slice[0],
            small: slice.slice(1),
          });
        }
        setHighlightData(grouped);

        // Regular news
        const regular = allNews.filter((item) => item.Type === "regular");
        setRegularNews(regular);
      } catch (err) {
        console.error("Error fetching news:", err);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    if (highlightData.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === highlightData.length - 1 ? 0 : prev + 1
      );
    }, 12000);
    return () => clearInterval(timer);
  }, [highlightData]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const truncateText = (text, wordLimit = 20) => {
    if (!text) return "";
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  const current = highlightData.length > 0 ? highlightData[currentSlide] : null;

  // LOAD MORE FUNCTION
  const handleLoadMore = () => {
    setVisibleNewsCount((prev) => prev + 15); // LOAD 6 MORE NEWS
  };

  return (
    <>
      <Header />
      <section className="news-section">
        <div className="news-container">
          <div className="news-section">
            <div className="recent-post-container">
              <h1>KEY INSIGHTS</h1>
            </div>

            {current ? (
              <div className="news-main fade-slide" key={currentSlide}>
                <div className="news-large">
                  <img src={current.large?.Image?.url} alt="Highlight" />
                  <div className="news-overlay">
                    <h2>{current.large?.Headline}</h2>
                    <div className="meta">
                      <p>{truncateText(current.large?.Paragraph, 40)}</p>
                    </div>
                    <div className="icons">
                      <Link target="_blank" to={current.large?.Link || "#"}>
                        READ MORE
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="news-small">
                  {current.small.map((item, i) => (
                    <div className="news-card" key={i}>
                      <img src={item.Image?.url} alt="News" />
                      <div className="news-card-overlay">
                        <h3>{item.Headline}</h3>
                        <p>{truncateText(item.Paragraph, 10)}</p>
                        <Link target="_blank" to={item.Link || "#"}>
                          READ MORE
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p>Loading.....</p>
            )}

            {highlightData.length > 1 && (
              <div className="carousel-dots">
                {highlightData.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${index === currentSlide ? "active" : ""}`}
                    onClick={() => handleDotClick(index)}
                  ></span>
                ))}
              </div>
            )}

            <hr />
            <div className="recent-post-container">
              <h1>RECENT NEWS</h1>
            </div>

            <div className="news-small news-recent-post">
              {regularNews.length > 0 ? (
                regularNews.slice(0, visibleNewsCount).map((item, i) => (
                  <div className="news-card" key={i}>
                    <img src={item.Image?.url} alt={item.Headline} />
                    <div className="news-card-overlay">
                      <h3>{item.Headline}</h3>
                      <p>{truncateText(item.Paragraph, 15)}</p>
                      <Link target="_blank" to={item.Link || "#"}>
                        READ MORE
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </div>

            {/* LOAD MORE BUTTON */}
            {visibleNewsCount < regularNews.length && (
              <div className="load-more-container">
                <button className="load-more-btn" onClick={handleLoadMore}>
                  LOAD MORE
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NewsRoom;
