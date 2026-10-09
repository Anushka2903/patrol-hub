import { Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export function ReportOnline() {
    const isLoggedin = useSelector((state) => state.user.isLoggedin);
    // const [isShow, setisShow] = useState(false)
    // const [formData, setformData] = useState({});
    // const handlechange = (e) => {
    //     if (e.target.type === 'file') {
    //         console.log(e.target.files[0].name);
    //         setformData({ ...formData, [e.target.name]: e.target.files[0] });
    //     } else {
    //         setformData({ ...formData, [e.target.name]: e.target.value });
    //     }
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const formDataToSend = new FormData();

    //         for (const key in formData) {
    //             formDataToSend.append(key, formData[key]);
    //         }

    //         const data = await savecomplaints(formDataToSend);
    //         if(data)
    //         {
    //             alert("Complaint Successfully...")
    //         }
           

    //     } catch (error) {
    //         console.log(error);
    //         alert('Network Problem');
    //     }
    // };

    const navigate = useNavigate();
    const handleFir = () => {
        if (isLoggedin===false) {
            navigate("/login")

        }
        else {
             navigate("/vehiclefir")
        }
    }
    const handleFirgeneralThift=()=>{
        if (isLoggedin===false) {
            navigate("/login")

        }
        else {
             navigate("/generalthift")
        }
    }
    const handleGeneralThiftFir=()=>{
        if (isLoggedin===false) {
            navigate("/login")

        }
        else {
             navigate("/generalthiftfir")
        }
    }
    const handleKidnapingReport=()=>{
        if (isLoggedin===false) {
            navigate("/login")

        }
        else {
             navigate("/kidnapingreport")
        }
    }
    return (
        <>
            <div className="p-3">
                <Container>
                    <Alert className="text-center">
                        Weloceme To E-FIR
                    </Alert>
                    <Paper elevation={2} className="p-5">
                        <hr></hr>
                        <h3 >E-FIR SERVICE</h3>
                        <hr></hr>
                        <p style={{ color: "black", fontSize: "16px", position: "relative", left: "60px" }}>
                            e-FIR, FIR दर्ज कराने की एक वैकल्पिक सुविधा है, जिसके माध्यम से नागरिक Online ही सम्बंधित थाने को चोरी की घटना के सम्बन्ध में e-FIR के माध्यम से स्वयं ही रिपोर्ट दर्ज कर सकते है|
                            इस सेवा का उपयोग केवल ऐसे वाहन चोरी एवं साधारण चोरी के मामलो में ही किया जा सकता है जिसमे :-
                        </p>
                        <div className="ps-3" style={{ position: "relative", left: "60px" }}>
                            <p style={{ color: "black", fontSize: "16px" }}>
                                1. वाहन चोरी (15 लाख से कम ) हो
                                <Button variant="outlined" className="ms-2 mb-2" onClick={handleFir}>Fir</Button>
                            </p>
                            <p style={{ color: "black", fontSize: "16px" }}>
                                2. सामान्य चोरी (1 लाख से कम ) हो
                                <Button variant="outlined" className="ms-2 mb-2" onClick={handleGeneralThiftFir}>Fir</Button>
                            </p>
                            <p style={{ color: "black", fontSize: "16px" }}>
                                3. गुमशुदा व्यक्ति की रिपोर्ट करें
                                <Button variant="outlined" className="ms-2 mb-2" onClick={handleKidnapingReport}>Fir</Button>
                            </p>
                            <p style={{ color: "black", fontSize: "16px" }}>
                                4.आरोपी अज्ञात हो, एवं घटना में चोट/बल का प्रयोग न हुआ हो
                                <Button variant="outlined" className="ms-2 mb-2" onClick={handleGeneralThiftFir} >Fir</Button>
                            </p>
                        </div>
                    </Paper>
                </Container>
                {/* <Container>
                    {isShow ? (
                        <Paper elevation={2} className="p-5">
                            <h2 className="text-center">Welcome To BhawarKua PoliceStation</h2>
                            <h4 style={{ color: "green", position: "relative", left: "60px" }}> Fill Correct Details</h4>
                            <form onSubmit={handleSubmit}>
                                <Row >
                                    <Col lg={1}></Col>
                                    <Col lg={6}>
                                        <h5 className="mt-3">Vehicle Information</h5>
                                        <TextField
                                            type="text"
                                            name="name"
                                            label="Vehicle Name"
                                            className="p-2 mt-1"
                                            style={{ width: "250px" }}
                                            onChange={handlechange}

                                        />
                                        <TextField
                                            type="text"
                                            name="model"
                                            label="Vehicle Model Number"
                                            className="p-2 mt-1"
                                            style={{ width: "250px" }}
                                            onChange={handlechange}

                                        />
                                        <TextField
                                            type="text"
                                            name="type"
                                            label="type 2/4/6 whealer"
                                            className="p-2 mt-1"
                                            style={{ width: "250px" }}
                                            onChange={handlechange}

                                        />
                                        <TextField
                                            type="number"
                                            name="price"
                                            label="price"
                                            className="p-2 mt-1"
                                            style={{ width: "250px" }}
                                            onChange={handlechange}

                                        />
                                        <TextField
                                            type="text"
                                            name="owner"
                                            label="owner"
                                            className="p-2 mt-1"
                                            style={{ width: "250px" }}
                                            onChange={handlechange}

                                        />
                                        <TextField
                                            type="file"  // Replace TextField with standard input for file
                                            name="img"
                                            label="Vehicle image"
                                            className="p-2 mt-1"
                                            style={{ width: "250px" }}
                                            accept="image/*"
                                            onChange={handlechange}
                                        />
                                        <h5 className="mt-3">Location</h5>
                                        <TextField
                                            type="text"
                                            name="area"
                                            label="area"
                                            className="p-2 mt-1"
                                            style={{ width: "250px" }}
                                            onChange={handlechange}

                                        />
                                        <TextField
                                            type="text"
                                            name="des"
                                            label="discription"
                                            className="p-2 mt-1"
                                            style={{ width: "250px" }}
                                            onChange={handlechange}

                                        />
                                        <TextField
                                            type="time"
                                            name="time"
                                            label="Time"
                                            className="p-2 mt-1"
                                            style={{ width: "250px" }}
                                            onChange={handlechange}

                                        />
                                        <TextField
                                            type="date"
                                            name="date"
                                            label="date"
                                            className="p-2 mt-1"
                                            style={{ width: "250px" }}
                                            onChange={handlechange}

                                        />  <br></br>
                                        <div className="ms-2"><Button variant="contained" type="submit"> submit</Button> </div>
                                    </Col>
                                    <Col lg={4}>
                                        <h4 className="mt-3">Process</h4>
                                        <Typography style={{ fontSize: "15px", color: "rebeccapurple" }}>1. Provide accurate details about the stolen vehicle.</Typography>
                                        <Typography style={{ fontSize: "15px", color: "rebeccapurple" }}>2. Attach a clear image of the stolen vehicle.</Typography>
                                        <Typography style={{ fontSize: "15px", color: "rebeccapurple" }}>3. Include information about the location and time of the incident.</Typography>
                                        <Typography style={{ fontSize: "15px", color: "rebeccapurple" }}>4. Provide a detailed description of the incident.</Typography>
                                        <Typography style={{ fontSize: "15px", color: "rebeccapurple" }}>5. Submit the report for further processing.</Typography>
                                        <hr></hr>
                                        <h4 className="mt-3" style={{ color: "red" }}>प्रक्रिया</h4>
                                        <Typography style={{ fontSize: "15px", color: "red" }}>1. चोरी हुए वाहन के बारे में सटीक विवरण प्रदान करें।</Typography>
                                        <Typography style={{ fontSize: "15px", color: "red" }}>2. चोरी हुए वाहन का स्पष्ट चित्र अटैच करें।</Typography>
                                        <Typography style={{ fontSize: "15px", color: "red" }}>3. घटना के स्थान और समय के बारे में जानकारी शामिल करें।</Typography>
                                        <Typography style={{ fontSize: "15px", color: "red" }}>4. घटना का विस्तृत विवरण प्रदान करें।</Typography>
                                        <Typography style={{ fontSize: "15px", color: "red" }}>5. रिपोर्ट को और प्रोसेसिंग के लिए सबमिट करें।</Typography>

                                    </Col>

                                </Row>
                            </form>
                        </Paper>

                    ) : null}

                </Container> */}

            </div>

        </>
    )
}