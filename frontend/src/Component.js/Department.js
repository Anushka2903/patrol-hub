import { Button, Card, CardActions, CardMedia, Icon, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import '../App.css';
import { Carousel, CarouselItem, Col, Container, Form, Modal, Row } from "react-bootstrap";
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { getDepartementData } from "./ApiServices";
import {  useNavigate } from "react-router-dom";
import eventimg from "../Allimages/eventimg1.jpg";
import eventimg2 from "../Allimages/eventimg2.png";
import eventimg3 from "../Allimages/eventimg3.jpg";
import eventimg4 from "../Allimages/eventimg4.jpg";
import eventimg5 from "../Allimages/eventimg5.png";
import ias from "../Allimages/iasindore.jpg";

const fallbackDistricts = {
  Indore: {
    name: "Indore",
    dis: "Indore is a major city of Madhya Pradesh and an important administrative, education, business, and public service center.",
    area: "3,898 sq km",
    language: "Hindi",
    totalMale: "1,805,658",
    totalfemale: "1,470,039",
    population: "3,276,697",
    totalvillages: "649",
    totalblocks: "4",
    totaltehsil: "9",
    totalnagarparisad: "8",
    muncipalco: "1"
  },
  Bhopal: {
    name: "Bhopal",
    dis: "Bhopal is the capital city of Madhya Pradesh and a major administrative center with important public safety, education, and government services.",
    area: "2,772 sq km",
    language: "Hindi",
    totalMale: "1,236,130",
    totalfemale: "1,135,931",
    population: "2,372,061",
    totalvillages: "512",
    totalblocks: "2",
    totaltehsil: "8",
    totalnagarparisad: "5",
    muncipalco: "1"
  },
  Jabalpur: {
    name: "Jabalpur",
    dis: "Jabalpur is an important city in eastern Madhya Pradesh known for administration, education, defense establishments, and regional connectivity.",
    area: "5,211 sq km",
    language: "Hindi",
    totalMale: "1,277,278",
    totalfemale: "1,185,360",
    population: "2,462,638",
    totalvillages: "1,400",
    totalblocks: "7",
    totaltehsil: "10",
    totalnagarparisad: "7",
    muncipalco: "1"
  },
  Gwalior: {
    name: "Gwalior",
    dis: "Gwalior is a major city in northern Madhya Pradesh with strong cultural, administrative, educational, and transport importance.",
    area: "4,560 sq km",
    language: "Hindi",
    totalMale: "1,090,327",
    totalfemale: "941,709",
    population: "2,032,036",
    totalvillages: "655",
    totalblocks: "4",
    totaltehsil: "6",
    totalnagarparisad: "6",
    muncipalco: "1"
  }
};

const fallbackDistrict = fallbackDistricts.Indore;

export function Department() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(fallbackDistrict);
  const [selectedDistrict, setSelectedDistrict] = useState("Indore");
  const [hasBackendDistrict, setHasBackendDistrict] = useState(false);
  const [noticedata, setnoticeData] = useState([]);
  const [showDistrictDetails, setShowDistrictDetails] = useState(false);
  const navigate = useNavigate();
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const handleData = async () => {
    try {
      const res = await getDepartementData();
      const backendDistrict = res.data?.[0]?.district;
      setHasBackendDistrict(Boolean(backendDistrict));
      setData(backendDistrict || fallbackDistrict);
      setnoticeData(res.data?.[0]?.notices || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      setHasBackendDistrict(false);
      setData(fallbackDistrict);
      setnoticeData([]);
    }
  };
  useEffect(() => {
    handleData();
  }, []);
  const handleProfile = () => {

    navigate("/iasprofile")
  }
  const handleNotice = (data) => {
    navigate("/notice",{ state:{ data:data} })
    console.log(data);

  }
  const handleDistrictChange = (event) => {
    const districtName = event.target.value;
    setSelectedDistrict(districtName);
    setHasBackendDistrict(false);
    setData(fallbackDistricts[districtName]);
  }
  return (
    <>
      <div className="homeDiv" style={{ width: "100%", backgroundColor: "white" }}>
        <div>
          <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
            <CarouselItem>
              <img src={eventimg}
                className="d-block w-100"
                height="350"
                alt="#"
              />
            </CarouselItem>
            <CarouselItem>
              <img src={eventimg2}
                className="d-block w-100"
                height="350"
                alt="#"
              />
            </CarouselItem>
            <CarouselItem>
              <img src={eventimg3}
                className="d-block w-100"
                height="350"
                alt="#"
              />
            </CarouselItem>
            <CarouselItem>
              <img src={eventimg4}
                className="d-block w-100"
                height="350"
                alt="#"
              />
            </CarouselItem>
            <CarouselItem>
              <img src={eventimg5}
                className="d-block w-100"
                height="350"
                alt="#"
              />
            </CarouselItem>

          </Carousel>
        </div>

        <Container className="mt-5">
          <Row>

            <Col lg={5} className="ms-5 m-2">
              <div>
                <div className="d-flex justify-content-between align-items-center mt-4">
                  <h1 className="m-0">About District</h1>
                  <Form.Select
                    value={hasBackendDistrict ? "backend" : selectedDistrict}
                    onChange={handleDistrictChange}
                    style={{ maxWidth: "190px" }}
                  >
                    {hasBackendDistrict && <option value="backend">Department District</option>}
                    {Object.keys(fallbackDistricts).map((districtName) => (
                      <option key={districtName} value={districtName}>{districtName}</option>
                    ))}
                  </Form.Select>
                </div>
                <div style={{ border: "1px solid grey" }} className="p-3">
                  <p style={{ fontSize: "14px", color: "black" }}>{data.dis}</p>
                  <Button className="pe-4 pb-4" onClick={() => setShowDistrictDetails(true)}>View More About District</Button>
                </div>
                <h1 className="mt-4">AT A GLANCE</h1>
                <div className="p-3">
                  <Row>
                    <Col lg={6}>
                      <div className="d-flex">
                        <h4>Area :</h4>
                        <p className="ms-3" style={{ color: 'black', fontSize: "14px" }}>{data.area}</p>
                      </div>
                      <div className="d-flex">
                        <h4>Language :</h4>
                        <p className="ms-3" style={{ color: 'black', fontSize: "14px" }}>{data.language}</p>
                      </div>
                      <div className="d-flex">
                        <h4>Male :</h4>
                        <p className="ms-3" style={{ color: 'black', fontSize: "14px" }}>{data.totalMale}</p>
                      </div>
                      <div className="d-flex">
                        <h4>Muncipal Corporation -</h4>
                        <p className="ms-3" style={{ color: 'black', fontSize: "14px" }}>{data.muncipalco}</p>
                      </div>
                      <div className="d-flex">
                        <h4>Tehsil -</h4>
                        <p className="ms-3" style={{ color: 'black', fontSize: "14px" }}>{data.totaltehsil}</p>
                      </div>
                      <div className="d-flex">
                        <h4>Police Stations -</h4>
                        <p className="ms-3" style={{ color: 'black', fontSize: "14px" }}>{49}</p>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="d-flex">
                        <h4>Population :</h4>
                        <p className="ms-3" style={{ color: 'black', fontSize: "14px" }}>{data.population}</p>
                      </div>
                      <div className="d-flex">
                        <h4>Villages :</h4>
                        <p className="ms-3" style={{ color: 'black', fontSize: "14px" }}>{data.totalvillages}</p>
                      </div>
                      <div className="d-flex">
                        <h4>Female :</h4>
                        <p className="ms-3" style={{ color: 'black', fontSize: "14px" }}>{data.totalfemale}</p>
                      </div>
                      <div className="d-flex">
                        <h4>Nagar Parisad -</h4>
                        <p className="ms-3" style={{ color: 'black', fontSize: "14px" }}>{data.totalnagarparisad}</p>
                      </div>
                      <div className="d-flex">
                        <h4>Blocks -</h4>
                        <p className="ms-3" style={{ color: 'black', fontSize: "14px" }}>{data.totalblocks}</p>
                      </div>
                    </Col>
                  </Row>

                </div>
              </div>

            </Col>
            <Col lg={3} className="m-2">
              <div>
                <h1 className="mt-4">Events</h1>
                <Paper elevation={2} className="p-3">
                  <h6 className="text-center mt-2" >There is No event</h6>
                </Paper>
                <Paper className="p-3 mt-2">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.90924712364!2d75.7237618214095!3d22.72422842990438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
                            1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1595490364420!5m2!1sen!2sin"
                    height="350" sandbox title="Distict Map"
                    allowFullScreen aria-hidden="false" tabIndex="0"
                  ></iframe>
                </Paper>

              </div>



            </Col>
            <Col lg={3} className="m-2">
              <div>
                <h1 className="text-center mt-4">Find Services</h1>
                <div className="ps-3">
                  <h6 style={{ fontSize: "15px" }} className="p-1">
                    <CoronavirusIcon style={{ fontSize: '30px', color: "#0972a8", margin: "5px" }} />
                    Social Security Pension

                  </h6>
                  <h6 style={{ fontSize: "15px" }} className="p-1">
                    <WorkspacePremiumIcon style={{ fontSize: '30px', color: "#0972a8", margin: "5px" }} />
                    Certificates
                  </h6>
                  <h6 style={{ fontSize: "15px" }} className="p-1">
                    <CurrencyRupeeIcon style={{ fontSize: '30px', color: "#0972a8", margin: "5px" }} />
                    Bills
                  </h6>
                  <h6 style={{ fontSize: "15px" }} className="p-1">
                    <AddLocationAltIcon style={{ fontSize: '30px', color: "#0972a8", margin: "5px" }} />
                    LICENCE
                  </h6>
                  <h6 style={{ fontSize: "15px" }} className="p-1">
                    <LocalHospitalIcon style={{ fontSize: '30px', color: "#0972a8", margin: "5px" }} />
                    Hospital Online Services
                  </h6>
                </div>

              </div>

            </Col>

          </Row>

        </Container>
        <div style={{ backgroundColor: '#f2f2f2' }} className="mt-4 p-3">
          <Container>
            <Row>
              <Col lg={4}>
                <Paper elevation={2} style={{ backgroundColor: "#f2f2f2" }} className="p-4">
                  <h3>Notice</h3>
                  <ul style={{ display: "inline-block", listStyleType: "disc", paddingLeft: "10px" }}>
                    {noticedata.map((data) => (
                      <li
                        key={data.id} // Add a unique key for each list item
                        style={{
                          fontSize: '13px',
                          color: 'black',
                          padding: '5px 10px',
                          cursor: 'pointer',
                          transition: 'background-color 0.3s ease', // Apply a smooth transition
                          backgroundColor: 'f2f2f2', // Initial background color
                        }}
                        onClick={() => handleNotice(data)}
                        onMouseEnter={(e) => { e.target.style.backgroundColor = 'skyblue'; }} // Change background on hover
                        onMouseLeave={(e) => { e.target.style.backgroundColor = '#f2f2f2'; }} // Restore background on hover out
                      >
                        <ArrowForwardIosIcon style={{ fontSize: '15px', color: 'black', margin: '5px' }} /> {data.title}
                      </li>
                    ))}
                  </ul>

                  <Button variant="outlined">More...</Button>

                </Paper>

              </Col>
              <Col lg={4}>
                <Paper elevation={2} style={{ backgroundColor: "#f2f2f2" }} className="p-4">
                  <h3>INFORMATION</h3>
                  <div>
                    <Button style={{ fontSize: '10px', color: "black" }}>Aadhaar Center operated by MPSEDC in Indore District</Button>
                    <Button style={{ fontSize: '10px', color: "black" }}>Public Relations Department Indore News</Button>
                    <Button style={{ fontSize: '10px', color: "black" }}>Directorate Of Employment</Button><br></br>
                    <Button style={{ fontSize: '10px', color: "black" }}>Helpline</Button><br></br>
                    <Button style={{ fontSize: '10px', color: "black" }}>Nic Service Desk</Button><br></br>
                    <Button style={{ fontSize: '10px', color: "black" }}>District Environmental Plan</Button><br></br>
                    <Button style={{ fontSize: '10px', color: "black" }}>Child Crime</Button><br></br>
                  </div>
                </Paper>

              </Col>
              <Col lg={4}>
                <Card style={{ backgroundColor: "#e9ecef52" }}>

                  <div className="d-flex justify-content-center">
                    <CardMedia
                      component="img"
                      style={{
                        borderRadius: '50%',
                        height: "172px",
                        width: "167px",
                      }}
                      className="img-fluid"
                      image={ias}
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <Button variant="outlined" style={{ backgroundColor: "bisque", width: "200px", color: "black", position: "relative", bottom: "25px" }}>Shri Asheesh Singh (IAS)</Button>
                  </div>
                  <hr />
                  <CardActions className="d-flex justify-content-center" style={{ position: "relative", bottom: '10px' }}>
                    <Button variant="outlined" style={{ borderColor: "#ee8406e8", width: "300px", color: "#ee8406e8" }} onClick={handleProfile}>
                      Profile
                      <Icon style={{ overflow: "visible" }}><SkipNextIcon style={{ position: "relative", bottom: "7px", left: "15px" }} /></Icon>
                    </Button>
                    <Button variant="outlined" style={{ borderColor: "#ee8406e8", width: "300px", color: "#ee8406e8" }}>
                      Contact
                      <Icon style={{ overflow: "visible" }}><SkipNextIcon style={{ position: "relative", bottom: "7px", left: "15px" }} /></Icon>
                    </Button>
                  </CardActions>

                </Card>
              </Col>
            </Row>
          </Container>

        </div>
        <Modal
          show={showDistrictDetails}
          onHide={() => setShowDistrictDetails(false)}
          centered
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>District Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p style={{ color: "black", fontSize: "15px", lineHeight: 1.7 }}>{data.dis}</p>
            <Row className="g-3">
              <Col md={6}>
                <Paper className="p-3">
                  <h6>Area</h6>
                  <p style={{ color: "black", margin: 0 }}>{data.area || "Not available"}</p>
                </Paper>
              </Col>
              <Col md={6}>
                <Paper className="p-3">
                  <h6>Population</h6>
                  <p style={{ color: "black", margin: 0 }}>{data.population || "Not available"}</p>
                </Paper>
              </Col>
              <Col md={6}>
                <Paper className="p-3">
                  <h6>Language</h6>
                  <p style={{ color: "black", margin: 0 }}>{data.language || "Not available"}</p>
                </Paper>
              </Col>
              <Col md={6}>
                <Paper className="p-3">
                  <h6>Villages</h6>
                  <p style={{ color: "black", margin: 0 }}>{data.totalvillages || "Not available"}</p>
                </Paper>
              </Col>
              <Col md={6}>
                <Paper className="p-3">
                  <h6>Tehsil</h6>
                  <p style={{ color: "black", margin: 0 }}>{data.totaltehsil || "Not available"}</p>
                </Paper>
              </Col>
              <Col md={6}>
                <Paper className="p-3">
                  <h6>Blocks</h6>
                  <p style={{ color: "black", margin: 0 }}>{data.totalblocks || "Not available"}</p>
                </Paper>
              </Col>
              <Col md={6}>
                <Paper className="p-3">
                  <h6>Male Population</h6>
                  <p style={{ color: "black", margin: 0 }}>{data.totalMale || "Not available"}</p>
                </Paper>
              </Col>
              <Col md={6}>
                <Paper className="p-3">
                  <h6>Female Population</h6>
                  <p style={{ color: "black", margin: 0 }}>{data.totalfemale || "Not available"}</p>
                </Paper>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outlined" onClick={() => setShowDistrictDetails(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
        <div style={{width:"100%", backgroundColor:"black"}} className="p-4"><h3 className="text-center" style={{color:"white"}}>@copyRight</h3></div>
      </div>
    </>
  )
}
