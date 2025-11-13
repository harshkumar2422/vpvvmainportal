import React, { useState } from "react";
import axios from "axios"; // ✅ Added Axios
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import "./NewsUploadForm.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";
import { server } from "../../App";

const NewsUploadForm = () => {
  const [activeForm, setActiveForm] = useState("key");

  const [taglineKey, setTaglineKey] = useState("");
  const [descKey, setDescKey] = useState("");
  const [linkKey, setLinkKey] = useState("");
  const [fileKey, setFileKey] = useState(null);
  const [newsDateKey, setnewsDateKey] = useState("");

  const [taglineReg, setTaglineReg] = useState("");
  const [descReg, setDescReg] = useState("");
  const [linkReg, setLinkReg] = useState("");
  const [fileReg, setFileReg] = useState(null);
  const [newsDateReg, setnewsDateReg] = useState("");

  const [loading, setLoading] = useState(false);

  // ✅ Axios version of postNews
  const postNews = async ({
    headline,
    paragraph,
    link,
    file,
    type,
    newsDate,
  }) => {
    const url = `${server}/createnews`;
    const data = new FormData();
    data.append("headline", headline);
    data.append("paragraph", paragraph);
    data.append("link", link);
    data.append("type", type);
    data.append("newsDate", newsDate);
    if (file) data.append("file", file);

    const token = localStorage.getItem("token");

    setLoading(true);
    try {
      const res = await axios.post(url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      const json = res.data;
      console.log("C", res);

      if (res.status === 201 && json.success) {
        toast.success(json.messgae || `${type} News created Successfully`);
        return { ok: true, json };
      } else {
        const msg = (json && (json.message || json.messgae)) || "Upload failed";
        toast.error(msg);
        return { ok: false, json };
      }
    } catch (err) {
      console.error("Upload error:", err);
      toast.error("Error uploading news. Check console for details.");
      return { ok: false, error: err };
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitKey = async (e) => {
    e.preventDefault();
    if (!taglineKey || !descKey || !linkKey || !newsDateKey) {
      alert("Please Enter All details");
      return;
    }
    await postNews({
      headline: taglineKey,
      paragraph: descKey,
      link: linkKey,
      file: fileKey,
      newsDate: newsDateKey,
      type: "highlight",
    });
    setTaglineKey("");
    setDescKey("");
    setLinkKey("");
    setFileKey(null);
    setnewsDateKey("");
    const input = document.getElementById("key-file-input");
    if (input) input.value = "";
  };

  const handleSubmitRegular = async (e) => {
    e.preventDefault();
    if (!taglineReg || !descReg || !linkReg || !newsDateReg) {
      alert("Please Enter All details");
      return;
    }
    await postNews({
      headline: taglineReg,
      paragraph: descReg,
      link: linkReg,
      file: fileReg,
      newsDate: newsDateReg,
      type: "regular",
    });
    setTaglineReg("");
    setDescReg("");
    setLinkReg("");
    setFileReg(null);
    setnewsDateReg("");
    const input = document.getElementById("reg-file-input");
    if (input) input.value = "";
  };

  return (
    <>
      <Header />
      <section className="uploadNews-section">
        <div className="uploadNews-container">
          <button
            className={`uploalNewsinner-btn ${
              activeForm === "key" ? "active-btn" : ""
            }`}
            onClick={() => setActiveForm("key")}
          >
            KEY INSIGHTS
          </button>

          <button
            className={`uploalNewsinner-btn ${
              activeForm === "regular" ? "active-btn" : ""
            }`}
            onClick={() => setActiveForm("regular")}
          >
            REGULAR NEWS
          </button>
        </div>

        {activeForm === "key" && (
          <div className="form-container">
            <div className="form-left">
              <div className="logo-circle">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="upload"
                />
              </div>
              <h1>Turning information into inspiration</h1>
            </div>
            <div className="form-right">
              <h2>Key Insights Details</h2>
              <p className="desc">
                Add tagline, description, link and image below.
              </p>
              <hr />
              <Form onSubmit={handleSubmitKey}>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Enter Tagline</Form.Label>
                    <Form.Control
                      type="text"
                      value={taglineKey}
                      placeholder="Enter tagline"
                      onChange={(e) => setTaglineKey(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Enter Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter description"
                      value={descKey}
                      onChange={(e) => setDescKey(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Enter Link</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="https://www.news.com"
                      value={linkKey}
                      onChange={(e) => setLinkKey(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Image Upload</Form.Label>
                    <Form.Control
                      id="key-file-input"
                      type="file"
                      onChange={(e) => setFileKey(e.target.files[0])}
                      required
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>News Date</Form.Label>
                    <Form.Control
                      type="date"
                      value={newsDateKey}
                      onChange={(e) => setnewsDateKey(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Row>
                <Button variant="primary" type="submit" disabled={loading}>
                  {loading ? "Uploading..." : "Save & Upload"}
                </Button>
              </Form>
            </div>
          </div>
        )}

        {activeForm === "regular" && (
          <div className="form-container">
            <div className="form-left">
              <div className="logo-circle">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="upload"
                />
              </div>
              <h1>Turning information into inspiration</h1>
            </div>
            <div className="form-right">
              <h2>Regular News Details</h2>
              <p className="desc">
                Add tagline, description, link and image below.
              </p>
              <hr />
              <Form onSubmit={handleSubmitRegular}>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Enter Tagline</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter tagline"
                      value={taglineReg}
                      onChange={(e) => setTaglineReg(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Enter Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Enter description"
                      rows={3}
                      value={descReg}
                      onChange={(e) => setDescReg(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Enter Link</Form.Label>
                    <Form.Control
                      placeholder="https://www.news.com"
                      type="text"
                      value={linkReg}
                      onChange={(e) => setLinkReg(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Image Upload</Form.Label>
                    <Form.Control
                      id="reg-file-input"
                      type="file"
                      onChange={(e) => setFileReg(e.target.files[0])}
                      required
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>News Date</Form.Label>
                    <Form.Control
                      type="date"
                      value={newsDateReg}
                      onChange={(e) => setnewsDateReg(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Row>
                <Button variant="primary" type="submit" disabled={loading}>
                  {loading ? "Uploading..." : "Save & Upload"}
                </Button>
              </Form>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default NewsUploadForm;
