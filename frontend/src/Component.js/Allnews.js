import { Box, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import './style.css';
import axios from "axios";
import newsImage0 from "../Allimages/policecarousal.jpeg";
import newsImage1 from "../Allimages/policecarousal1.jpeg";
import newsImage2 from "../Allimages/policecarousal2.jpeg";
import newsImage3 from "../Allimages/policecarousal3.jpeg";
import newsImage4 from "../Allimages/policecarousal4.jpeg";
import newsImage5 from "../Allimages/eventimg1.jpg";
import newsImage6 from "../Allimages/eventimg2.png";
import newsImage7 from "../Allimages/eventimg4.jpg";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5800";
const newsImages = [
  newsImage0,
  newsImage1,
  newsImage2,
  newsImage3,
  newsImage4,
  newsImage5,
  newsImage6,
  newsImage7,
];
const getNewsImage = (news, index = 0) => news.image || newsImages[index % newsImages.length];
const fallbackNews = [
  {
    _id: "local-news-1",
    type: "Public Safety",
    date: "Today",
    heading: "Traffic awareness drive conducted in the city",
    description: "Police teams are running public awareness activities to encourage helmet use, safe driving, and responsible road behavior across busy city areas.",
    image: newsImage0,
  },
  {
    _id: "local-news-2",
    type: "Citizen Service",
    date: "Today",
    heading: "Online complaint services available for citizens",
    description: "Citizens can use PatrolHub to submit complaint information online and check their complaint status after logging in.",
    image: newsImage6,
  },
  {
    _id: "local-news-3",
    type: "Department Update",
    date: "Today",
    heading: "Police department continues community outreach",
    description: "Community outreach programs help citizens stay informed about safety services, local support, and public assistance channels.",
    image: newsImage7,
  },
];

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [selectedNews, setSelectedNews] = useState([]);
  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/news/live`);
        setNewsData(response.data?.length ? response.data : fallbackNews);
      } catch (error) {
        console.log(error);
        try {
          const savedNews = await axios.get(`${API_BASE_URL}/news/fullnews`);
          setNewsData(savedNews.data?.length ? savedNews.data : fallbackNews);
          setErrorMessage(savedNews.data?.length ? "" : "Live news could not be loaded. Showing latest local updates.");
        } catch (savedNewsError) {
          console.log(savedNewsError);
          setErrorMessage("Live news could not be loaded. Showing latest local updates.");
          setNewsData(fallbackNews);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchNewsData();
  }, []);
  const handleModelClick = (news) => {
    setModalShow(true);
    setSelectedNews(news);
  };
  return (
    <div>
      <Container className="d-flex justify-content-between">
      <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
          <Container className="mainbox mb-5 mt-5">
            <h2 className="mainheading">News</h2>
            {errorMessage && <p className="newsnotice">{errorMessage}</p>}
            <div className="newscontainer">
              {loading ? (
                <p className="newsnotice">Loading news...</p>
              ) : (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "16px",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 0,
                    width: "100%",
                    minHeight: 180,
                    justifyContent: "space-between",

                  },
                }}
              >
                {newsData.map((news, index) => (
                  <Paper
                    elevation={3}
                    className="newsbox"
                    onClick={() => {
                      handleModelClick(news);
                    }}
                    key={news._id}

                  >
                    <img src={getNewsImage(news, index)} alt="" />
                    <div className="describe">
                      <span>{news.heading}</span>
                      <p>{news.description}</p>
                      <div className="newsmeta">
                        <h6>{news.type}</h6>
                        <small>{news.date}</small>
                      </div>
                    </div>
                  </Paper>
                ))}
              </Box>
              )}
            </div>
          </Container>

        </Col>
        <Col lg={2}></Col>
      </Row>
      

      </Container>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        className="modeldata"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h6>{selectedNews.heading}</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={getNewsImage(selectedNews)} alt="" />
          <span>{selectedNews.date}</span>
          <p>{selectedNews.description}</p>
        </Modal.Body>
        <Modal.Footer>
          {selectedNews.sourceUrl && (
            <Button href={selectedNews.sourceUrl} target="_blank" rel="noreferrer">
              Open full story
            </Button>
          )}
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default News;
