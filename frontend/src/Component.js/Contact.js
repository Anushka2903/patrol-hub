import React, { useEffect, useState } from "react";
import { Alert, Badge, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "./style.css";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5800";

const defaultContacts = [
  {
    title: "Emergency Control Room",
    value: "112",
    detail: "Immediate police, fire, or medical emergency support.",
    icon: <PhoneInTalkIcon />,
  },
  {
    title: "Women Helpline",
    value: "1091",
    detail: "Support for women safety complaints and urgent assistance.",
    icon: <LocalPoliceIcon />,
  },
  {
    title: "Cyber Crime Helpline",
    value: "1930",
    detail: "Report online fraud, payment scams, and cyber complaints.",
    icon: <PhoneInTalkIcon />,
  },
];

const stationInfo = [
  { label: "Police Station", value: "BhawarKua Police Station", icon: <LocalPoliceIcon /> },
  { label: "Service Hours", value: "24 x 7 citizen assistance", icon: <AccessTimeIcon /> },
  { label: "Location", value: "BhawarKua, Indore, Madhya Pradesh", icon: <LocationOnIcon /> },
  { label: "Email", value: "support@patrolhub.local", icon: <MailOutlineIcon /> },
];

const Contact = () => {
  const [contactData, setContactData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const fetchOfficersData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/contact/officers`);
        setContactData(Array.isArray(response.data) ? response.data : []);
        setNotice("");
      } catch (error) {
        console.log(error);
        setNotice("Officer directory is currently unavailable. Use the helpline numbers below for urgent support.");
      } finally {
        setLoading(false);
      }
    };

    fetchOfficersData();
  }, []);

  return (
    <div className="contact-page">
      <Container>
        <section className="contact-header">
          <div>
            <Badge bg="primary" className="contact-badge">Citizen Support</Badge>
            <h1>Contact PatrolHub</h1>
            <p>
              Reach the right support desk for emergency help, online complaint follow-up,
              verification requests, and local police station assistance.
            </p>
          </div>
          <div className="contact-header-panel">
            <PhoneInTalkIcon />
            <span>Emergency</span>
            <strong>112</strong>
          </div>
        </section>

        {notice && <Alert variant="warning" className="contact-alert">{notice}</Alert>}

        <Row className="g-3 contact-cards">
          {defaultContacts.map((item) => (
            <Col lg={4} md={6} key={item.title}>
              <div className="contact-card">
                <div className="contact-card-icon">{item.icon}</div>
                <div>
                  <span>{item.title}</span>
                  <h2>{item.value}</h2>
                  <p>{item.detail}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="g-4 mt-1">
          <Col lg={4}>
            <section className="contact-section">
              <h3>Station Details</h3>
              <div className="station-list">
                {stationInfo.map((item) => (
                  <div className="station-item" key={item.label}>
                    <div className="station-icon">{item.icon}</div>
                    <div>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Col>

          <Col lg={8}>
            <section className="contact-section">
              <div className="contact-section-title">
                <div>
                  <h3>Officer Directory</h3>
                  <p>Available officers from the department records.</p>
                </div>
                <Badge bg="secondary">{contactData.length} listed</Badge>
              </div>

              {loading ? (
                <div className="contact-empty">Loading officer contacts...</div>
              ) : contactData.length > 0 ? (
                <div className="contact-table-wrap">
                  <table className="contact-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Rank</th>
                        <th>Badge Number</th>
                        <th>Phone No.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contactData.map((officer) => (
                        <tr key={officer._id}>
                          <td>{officer.name || "Not available"}</td>
                          <td>{officer.rank || "Not available"}</td>
                          <td>{officer.badgenumber || "Not available"}</td>
                          <td>{officer.number || "Not available"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="contact-empty">
                  No officers are listed yet. Add officers from the department panel, or use the helpline contacts above.
                </div>
              )}
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
