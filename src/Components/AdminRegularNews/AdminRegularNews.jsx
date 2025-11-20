import React, { useState, useEffect } from "react";
import "./AdminRegularNews.css";
import AdminNewsSidebar from "../AdminNewsSidebar/AdminNewsSidebar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap-icons/font/bootstrap-icons";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { server } from "../../App"; // ✅ Make sure you have your backend URL here

const AdminRegularNews = () => {
  const [news, setNews] = useState([]); // store news from backend
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);

  // ✅ Fetch news from backend when component mounts
  useEffect(() => {
    const fetchNews = async () => {
      try {
        // ✅ Get token from localStorage
        let token = localStorage.getItem("token");

        // If not found, store a temporary token (for demo)
        if (!token) {
          token = "demo_token_123"; // replace with actual login token in real project
          localStorage.setItem("token", token);
        }

        // ✅ Fetch all news
        const { data } = await axios.get(`${server}/getnews`, {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in header
          },
        });

        if (data?.success) {
          setNews(data.news);
        } else {
          toast.error("Failed to fetch news!");
        }
      } catch (error) {
        console.error(error);
        toast.error("Error fetching news!");
      }
    };

    fetchNews();
  }, []);

  // ✅ Toggle selection mode
  const handleSelectClick = () => {
    setIsSelecting(!isSelecting);
    setSelectedCards([]); // clear previous selection
  };

  // ✅ Handle card click
  const handleCardClick = (id) => {
    if (!isSelecting) return;
    if (selectedCards.includes(id)) {
      setSelectedCards(selectedCards.filter((cardId) => cardId !== id));
    } else {
      setSelectedCards([...selectedCards, id]);
    }
  };

  // ✅ Handle delete (frontend only for now)
  const handleDeleteClick = () => {
    if (selectedCards.length === 0) {
      toast.warning("Please select at least one news to delete.");
      return;
    }

    if (window.confirm("Are you sure you want to delete selected news?")) {
      const updatedNews = news.filter(
        (item) => !selectedCards.includes(item._id)
      );
      setNews(updatedNews);
      setSelectedCards([]);
      setIsSelecting(false);
      toast.success("Selected news deleted successfully!");
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
      <div className="admin-news-main-container">
        <AdminNewsSidebar />

        <div className="admin-news-container">
          <div className="action-buttons">
            <Button
              variant={isSelecting ? "secondary" : "primary"}
              onClick={handleSelectClick}
            >
              {isSelecting ? "Cancel Selection" : "Select"}
            </Button>

            <Button
              variant="danger"
              onClick={handleDeleteClick}
              disabled={!isSelecting}
            >
              Delete
            </Button>

            <Button variant="primary">Move to Key Highlights</Button>
          </div>

          <div className="adminnews-card">
            {news.length > 0 ? (
              news.map((item) => (
                <Card
                  key={item._id}
                  style={{ width: "18rem" }}
                  className={`news-card ${
                    selectedCards.includes(item._id) ? "selected" : ""
                  }`}
                  onClick={() => handleCardClick(item._id)}
                >
                  <Card.Img variant="top" src={item.Image?.url} />
                  <Card.Body>
                    <Card.Title>{item.Headline}</Card.Title>
                    <Card.Text>{item.Paragraph}</Card.Text>
                    {item.Link && (
                      <Button
                        variant="primary"
                        href={item.Link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read More
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              ))
            ) : (
              <p>No news available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminRegularNews;
