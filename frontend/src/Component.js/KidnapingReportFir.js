import { Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { saveKidnapingReport, updatePoliceStationTOuser, updateuserKidnapingReport } from "./ApiServices";
import { useSelector } from "react-redux";
export function KidnapingReportFir() {
    const [formData, setformData] = useState({});
    const objId = useSelector((state)=>state.user.objId)
    const policeStationId = useSelector((state)=>state.user.policeStationId)
   
   
    const handlechange = (e) => {
        if (e.target.type === 'file') {
            console.log(e.target.files[0].name);
            setformData({ ...formData, [e.target.name]: e.target.files[0] });
        } else {
            setformData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();
            for (const key in formData) {
                formDataToSend.append(key, formData[key]);
            }    
            const data = await saveKidnapingReport(formDataToSend);
            const complaintId = data.data._id;

            if (objId && policeStationId) {
                try {
                    await updateuserKidnapingReport(objId, complaintId);
                    await updatePoliceStationTOuser(policeStationId, objId);
                } catch (linkError) {
                    console.log(linkError);
                }
            }

            alert("Complaint Successfully...");
            console.log(data);
        }
        catch (error) {
            console.log(error);
            alert('Network Problem');
        }
    };
    return (
        <>
            <Container className="mt-5">
                <Alert className="text-center"><h2 className="text-center">Welcome To BhawarKua PoliceStation</h2></Alert>
                <Paper elevation={2} className="p-5">


                    <form onSubmit={handleSubmit}>
                        <Row >
                            <Col lg={1}></Col>
                            <Col lg={6} sm={1} className="mt-3">
                                <h4 style={{ color: "green" }}> Fill Correct Details</h4>
                                <h5 className="mt-3">Information  about Person </h5>
                                <TextField
                                    type="text"
                                    name="victimname"
                                    label="Victim Name"
                                    className="p-2 mt-1"
                                    style={{ width: "250px" }}
                                    onChange={handlechange}
                                />
                                <TextField
                                    type="number"
                                    name="victimage"
                                    label="Victim Age"
                                    className="p-2 mt-1"
                                    style={{ width: "250px" }}
                                    onChange={handlechange}

                                />
                                <TextField
                                    type="text"
                                    name="reportedperson"
                                    label="Reported Person"
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

                                />
                                <TextField
                                    type="text"
                                    name="location"
                                    label="location"
                                    className="p-2 mt-1"
                                    style={{ width: "250px" }}
                                    onChange={handlechange}

                                />
                                <TextField
                                    type="file"  // Replace TextField with standard input for file
                                    name="image"
                                    label="victim image"
                                    className="p-2 mt-1"
                                    style={{ width: "250px" }}
                                    accept="image/*"
                                    onChange={handlechange}
                                />
                                <TextField
                                    type="text"
                                    name="dis"
                                    label="description"
                                    className="p-2 mt-1"
                                    style={{ width: "250px" }}
                                    onChange={handlechange}

                                />
                                <br></br>
                                <div className="ms-2"><Button variant="contained" type="submit"> submit</Button> </div>
                            </Col>
                            <Col lg={4}>
                                <h4 className="mt-3">Process</h4>
                                <Typography style={{ fontSize: "15px", color: "rebeccapurple" }}>
                                    1. Provide accurate details about the kidnapping incident.
                                </Typography>
                               
                                <Typography style={{ fontSize: "15px", color: "rebeccapurple" }}>
                                    2. Describe the victim's details such as name, age, and gender.
                                </Typography>
                                <Typography style={{ fontSize: "15px", color: "rebeccapurple" }}>
                                    3. Attach any available images or relevant documents.
                                </Typography>
                                <Typography style={{ fontSize: "15px", color: "rebeccapurple" }}>
                                    4. Provide your contact information for follow-up.
                                </Typography>
                                <Typography style={{ fontSize: "15px", color: "rebeccapurple" }}>
                                    5. Submit the report for immediate attention.
                                </Typography>
                                <hr></hr>
                                <h4 className="mt-3" style={{ color: "red" }}>प्रक्रिया</h4>
                                <Typography style={{ fontSize: "15px", color: "red" }}>
                                    1. किडनैपिंग की घटना के बारे में सटीक विवरण प्रदान करें।
                                </Typography>
                                <Typography style={{ fontSize: "15px", color: "red" }}>
                                    2. पीड़ित के विवरण जैसे नाम, आयु, और लिंग का विवरण दें।
                                </Typography>
                                <Typography style={{ fontSize: "15px", color: "red" }}>
                                    3. जो भी उपलब्ध छवियों या संबंधित दस्तावेजों को संलग्न करें।
                                </Typography>
                                <Typography style={{ fontSize: "15px", color: "red" }}>
                                    4. आपकी जानकारी दें ताकि हम आपसे संपर्क कर सकें।
                                </Typography>
                                <Typography style={{ fontSize: "15px", color: "red" }}>
                                    5. रिपोर्ट को तत्काल ध्यान में लेने के लिए सबमिट करें।
                                </Typography>
                            </Col>


                        </Row>
                    </form>
                </Paper>

            </Container>


        </>
    )
}
