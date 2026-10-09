import { Button, Card, CardActions, CardMedia, Icon, Paper } from "@mui/material";
import { useState } from "react";
import '../App.css';
import { CardBody, Carousel, CarouselCaption, CarouselItem, Col, Container, Row } from "react-bootstrap";
import { SuccessStory } from "./SuccessStory";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import policecarousal from '../Allimages/p1.jpg';
import policecarousal2 from '../Allimages/policecarousal2.jpeg';
import policecarousal3 from '../Allimages/eventimg3.jpg';
import policecarousal4 from '../Allimages/policecarousal4.jpeg';
import policecarousal5 from '../Allimages/policecarousal5.jpeg';
import policecarousal6 from '../Allimages/policecarousal6.jpeg';
import mpdgp from '../Allimages/m.jpg';
const policecarousal1 = policecarousal;
export function Home() {
   const [index, setIndex] = useState(0);
   const navigate = useNavigate();
   const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
   };

   const handleReport = () => {
      navigate("/report")

   }
   const handleVerification = () => {
      navigate("/verification")
   }
   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
   };
   const setting = {
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      vertical: true, // Set to true to enable vertical scrolling
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      arrows: false, // Set to false to hide next/prev arrows
   };
   return (
      <>
         <div className="homeDiv" style={{ width: "100%", backgroundColor: "white" }}>
            <div style={{ width: "100%", backgroundColor: "burlywood" }}>
               <Carousel activeIndex={index} onSelect={handleSelect}>
                  <CarouselItem>
                     <img src={policecarousal1}
                        className="d-block w-100"
                        height="350"
                        alt="#"
                     >
                     </img>
                     <CarouselCaption style={{ backgroundColor: "#0000008f" }}>
                        <h1 style={{ fontSize: "25", fontFamily: "monospace", color: "white" }}>
                           मुख्यमंत्री के निर्देश पर पूरे प्रदेश में रातभर वरिष्ठ अधिकारियों ने एक साथ किया थानों का औचक निरीक्षण
                        </h1>
                     </CarouselCaption>
                  </CarouselItem>
                  <CarouselItem>
                     <img src={policecarousal2}
                        className="d-block w-100"
                        height="350"
                        alt="#"
                     >
                     </img>
                     <CarouselCaption style={{ backgroundColor: "#0000008f" }}>
                        <h1 style={{ fontSize: "25", fontFamily: "monospace", color: "white" }}>
                           अपराधों के रोकथाम में नवाचार के लिए मध्य प्रदेश पुलिस को देश में मिला प्रथम पुरस्कार
                        </h1>
                     </CarouselCaption>
                  </CarouselItem>
                  <CarouselItem>
                     <img src={policecarousal3}
                        className="d-block w-100"
                        height="350"
                        alt="#"
                     >
                     </img>
                     <CarouselCaption style={{ backgroundColor: "#0000008f" }}>
                        <h1 style={{ fontSize: "25", fontFamily: "monospace", color: "white" }}>
                           प्रदेश की फॉरसिक शाखा को संपूर्ण देश में द्वितिय स्थान प्राप्त हुआ
                        </h1>
                     </CarouselCaption>
                  </CarouselItem>
                  <CarouselItem>
                     <img src={policecarousal4}
                        className="d-block w-100"
                        height="350"
                        alt="#"
                     >
                     </img>
                     <CarouselCaption style={{ backgroundColor: "#0000008f" }}>
                        <h1 style={{ fontSize: "25", fontFamily: "monospace", color: "white" }}>
                           मुख्यमंत्री के निर्देश पर पूरे प्रदेश में रातभर वरिष्ठ अधिकारियों ने एक साथ किया थानों का औचक निरीक्षण
                        </h1>
                     </CarouselCaption>
                  </CarouselItem>
                  <CarouselItem>
                     <img src={policecarousal5}
                        className="d-block w-100"
                        height="350"
                        alt="#"
                     >
                     </img>
                     <CarouselCaption style={{ backgroundColor: "#0000008f" }}>
                        <h1 style={{ fontSize: "25", fontFamily: "monospace", color: "white" }}>
                           मुख्यमंत्री डॉ यादव को पुलिस मुख्यालय में पुलिस महानिदेशक श्री एस के सक्सेना ने स्मृति चिन्ह भेंट किया
                        </h1>
                     </CarouselCaption>
                  </CarouselItem>
                  <CarouselItem>
                     <img src={policecarousal6}
                        className="d-block w-100"
                        height="350"
                        alt="#"
                     >
                     </img>
                     <CarouselCaption style={{ backgroundColor: "#0000008f" }}>
                        <h1 style={{ fontSize: "25", fontFamily: "monospace", color: "white" }}>
                           प्रधानमंत्री जी की स्मार्ट पुलिसिंग की अवधारणा पर कार्य हो - मुख्यमंत्री डॉ. यादव
                        </h1>
                     </CarouselCaption>
                  </CarouselItem>
                  <CarouselItem>
                     <img src={policecarousal}
                        className="d-block w-100"
                        height="350"
                        alt="#"
                     >
                     </img>
                     <CarouselCaption style={{ backgroundColor: "#0000008f" }}>
                        <h1 style={{ fontSize: "25", fontFamily: "monospace", color: "white" }}>मध्यप्रदेश पुलिस महानिदेशक
                           श्री सुधीर कुमार सक्सेना ने अपराधों के रोकथाम में नवाचार के लिए मध्य प्रदेश पुलिस को देश में प्रथम पुरस्कार मिलने पर
                           रा.अ.आ.ब्यूरो टीम से सौजन्य भेंट की ।</h1>
                     </CarouselCaption>
                  </CarouselItem>
               </Carousel>
            </div>
            <div>
               <SuccessStory />
            </div>
            <div className="mt-2 p-3">
               <Container>
                  <h1 style={{ paddingInlineStart: "4px", paddingBottom: "8px" }} className="heading">CITIZEN SERVICES</h1>
                  <Row>
                     <Col lg={3}>
                        <Paper elevation={2} className="p-3 m-2 paperhome" style={{ display: 'flex', alignItems: 'center' }} onClick={handleReport}>
                           <h5 style={{ flex: 1, marginRight: 'auto' }}>E-FIR</h5>
                           <ArrowForwardIosOutlinedIcon style={{ color: "blue" }} />
                        </Paper>
                     </Col>
                     <Col lg={3}>
                        <Paper elevation={2} className="p-3 m-2 paperhome" style={{ display: 'flex', alignItems: 'center' }} onClick={handleVerification}>
                           <h5 style={{ flex: 1, marginRight: 'auto' }}>VERIFICATION</h5>
                           <ArrowForwardIosOutlinedIcon style={{ color: "blue" }} />
                        </Paper>
                     </Col>
                     <Col lg={3}>
                        <Paper elevation={2} className="p-3 m-2 paperhome" style={{ display: 'flex', alignItems: 'center' }}>
                           <h5 style={{ flex: 1, marginRight: 'auto' }} onClick={() => navigate('/citizen-information')}>CITIZEN INFORMATION</h5>
                           <ArrowForwardIosOutlinedIcon style={{ color: "blue" }} />
                        </Paper>
                     </Col>
                     <Col lg={3}>
                        <Paper elevation={2} className="p-3 m-2 paperhome" style={{ display: 'flex', alignItems: 'center' }}  onClick={() => navigate('/act')}>
                           <h5 style={{ flex: 1, marginRight: 'auto' }}>ACT AND RULES</h5>
                           <ArrowForwardIosOutlinedIcon style={{ color: "blue" }} />
                        </Paper>
                     </Col>
                  </Row>
                  <h1 style={{ paddingInlineStart: "4px", paddingBottom: "8px" }}>Press Releases</h1>
                  <Paper className="p-5" style={{ backgroundColor: "black" }}>
                     <Slider {...settings}>
                        <div>
                           <img
                              src={policecarousal}
                              alt="Description of the image"
                              style={{ maxWidth: '100%', height: '200px' }}
                              className="img-fluid"
                           />
                        </div>
                        <div>
                           <img
                              src={policecarousal1}
                              alt="Description of the image"
                              style={{ maxWidth: '100%', height: '200px' }}
                              className="img-fluid"
                           />
                        </div>
                        <div>
                           <img
                              src={policecarousal2}
                              alt="Description of the image"
                              style={{ maxWidth: '100%', height: '200px' }}
                              className="img-fluid"
                           />
                        </div>
                        <div>
                           <img
                              src={policecarousal3}
                              alt="Description of the image"
                              style={{ maxWidth: '100%', height: '200px' }}
                              className="img-fluid"
                           />
                        </div>
                        <div>
                           <img
                              src={policecarousal4}
                              alt="Description of the image"
                              style={{ maxWidth: '100%', height: '200px' }}
                              className="img-fluid"
                           />
                        </div>
                        <div>
                           <img
                              src={policecarousal}
                              alt="Description of the image"
                              style={{ maxWidth: '100%', height: '200px' }}
                              className="img-fluid"
                           />
                        </div>
                        <div>
                           <img
                              src={policecarousal3}
                              alt="Description of the image"
                              style={{ maxWidth: '100%', height: '200px' }}
                              className="img-fluid"
                           />
                        </div>
                        <div>
                           <img
                              src={policecarousal4}
                              alt="Description of the image"
                              style={{ maxWidth: '100%', height: '200px' }}
                              className="img-fluid"
                           />
                        </div>
                     </Slider>
                  </Paper>
                  <div className=" mt-3 ">
                     <h1 className="heading" style={{ paddingInlineStart: "4px", paddingBottom: "8px" }}>About Department</h1>
                     <Row className="d-flex justify-content-center p-4" style={{ backgroundColor: "#e9dccd70" }}>
                        <Col lg={3} className="m-2">
                           <Card className="p-3" style={{ backgroundColor: "#e9ecef52" }}>
                              <h4>DGP MP</h4>
                              <div className="d-flex justify-content-center">
                                 <CardMedia
                                    component="img"
                                    style={{
                                       borderRadius: '50%',
                                       height: "172px",
                                       width: "167px",
                                    }}
                                    className="img-fluid"
                                    image={mpdgp}
                                 />
                              </div>
                              <div className="d-flex justify-content-center">
                                 <Button variant="outlined" style={{ backgroundColor: "bisque", width: "200px", color: "black", position: "relative", bottom: "25px" }}>Shri Sudhir Kumar Saxena</Button>
                              </div>
                              <hr />
                              <CardActions className="d-flex justify-content-center" style={{ position: "relative", bottom: '10px' }}>
                                 <Button variant="outlined" style={{ borderColor: "#ee8406e8", width: "300px", color: "#ee8406e8" }}>
                                    View Message
                                    <Icon style={{ overflow: "visible" }}><SkipNextIcon style={{ position: "relative", bottom: "7px", left: "15px" }} /></Icon>
                                 </Button>
                                 <Button variant="outlined" style={{ borderColor: "#ee8406e8", width: "300px", color: "#ee8406e8" }}>
                                    DG Disk
                                    <Icon style={{ overflow: "visible" }}><SkipNextIcon style={{ position: "relative", bottom: "7px", left: "15px" }} /></Icon>
                                 </Button>
                              </CardActions>
                              <CardActions className="d-flex justify-content-center" style={{ position: "relative", bottom: '10px' }}>
                                 <Button variant="outlined" style={{ borderColor: "#ee8406e8", width: "300px", color: "#ee8406e8" }}>
                                    Police Chief
                                    <Icon style={{ overflow: "visible" }}><SkipNextIcon style={{ position: "relative", bottom: "7px", left: "15px" }} /></Icon>
                                 </Button>
                                 <Button variant="outlined" style={{ borderColor: "#ee8406e8", width: "300px", color: "#ee8406e8" }}>
                                    Lecture Series
                                    <Icon style={{ overflow: "visible" }}><SkipNextIcon style={{ position: "relative", bottom: "7px", left: "15px" }} /></Icon>
                                 </Button>
                              </CardActions>
                           </Card>
                        </Col>
                        <Col lg={3} className="m-2">
                           <Card style={{ backgroundColor: "#e9ecef52", height: "346px" }} className="p-3">
                              <h4 className="ms-2">Reach out to</h4>
                              <CardBody className="d-flex flex-column align-items-center justify-content-center">
                                 <Button variant="outlined" className="mt-2 buttonhome" style={{ height: "55px", width: "150px", borderRadius: "15px", fontSize: "12px", color: "#ee8406e8", borderColor: "#ee8406e8" }}>
                                    Crime/Traffic in Indore
                                 </Button>
                                 <Button variant="outlined" className="mt-4 buttonhome" style={{ height: "55px", width: "150px", borderRadius: "15px", fontSize: "12px", color: "#ee8406e8", borderColor: "#ee8406e8" }}>
                                    Martyrs Gallery
                                 </Button>
                                 <Button variant="outlined" className="mt-4 buttonhome" style={{ height: "55px", width: "150px", borderRadius: "15px", fontSize: "12px", color: "#ee8406e8", borderColor: "#ee8406e8" }}>
                                    Crime/Traffic in Indore
                                 </Button>
                                 <Button variant="outlined" className="mt-4 buttonhome" style={{ height: "55px", width: "150px", borderRadius: "15px", fontSize: "12px", color: "#ee8406e8", borderColor: "#ee8406e8" }}>
                                    Quick Links
                                 </Button>
                              </CardBody>
                           </Card>
                        </Col>

                        <Col lg={3} className="m-2">
                           <Card style={{ backgroundColor: "#e9ecef52", height: "346px" }} className="p-3">
                              <h4 className="ms-2">Police News</h4>
                              <div style={{ position: "relative", left: "45px" }}>
                                 <Slider {...setting}>
                                    <CardBody>
                                       <Button variant="outlined" className="mt-2" onClick={()=>navigate("/news")} style={{ height: "55px", borderRadius: "15px", fontSize: "12px", color: "#ee8406e8", borderColor: "#ee8406e8" }}>
                                          Politics News
                                       </Button> <br></br>
                                      
                                       <Button variant="outlined" className="mt-4" onClick={()=>navigate("/news")} style={{ height: "55px", borderRadius: "15px", fontSize: "12px", color: "#ee8406e8", borderColor: "#ee8406e8" }}>
                                          Sports News
                                       </Button>
                                    </CardBody>
                                    <CardBody>
                                       <Button variant="outlined" className="mt-4" onClick={()=>navigate("/news")} style={{ height: "55px", borderRadius: "15px", fontSize: "12px", color: "#ee8406e8", borderColor: "#ee8406e8" }}>
                                           National News
                                       </Button>
                                    </CardBody>
                                    <CardBody>
                                       <Button variant="outlined" className="mt-4" onClick={()=>navigate("/news")} style={{ height: "55px", borderRadius: "15px", fontSize: "12px", color: "#ee8406e8", borderColor: "#ee8406e8" }}>
                                           InterNational
                                       </Button>
                                    </CardBody>
                                    <CardBody>
                                       <Button variant="outlined" className="mt-4" onClick={()=>navigate("/news")} style={{ height: "55px", borderRadius: "15px", fontSize: "12px", color: "#ee8406e8", borderColor: "#ee8406e8" }}>
                                          Crime  in Indore
                                       </Button>
                                    </CardBody>
                                 </Slider>
                              </div>
                           </Card>
                        </Col>
                     </Row>
                  </div>
               </Container>
            </div>
            <div style={{ width: "100%", backgroundColor: "black" }} className="p-4"><h3 className="text-center" style={{ color: "white" }}>@copyRight</h3></div>
         </div>
      </>
   )
}
