import { Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { savecomplaints, updateComplaints, updatePoliceStationTOuser } from "./ApiServices";
import { useSelector } from "react-redux";
export  function VehicleFir()

{
    const [formData, setformData] = useState({});
    const objId = useSelector((state)=>state.user.objId)
    const policeStationId = useSelector((state)=>state.user.policeStationId)
    const handlechange = (e) => {
        if (e.target.type === 'file') {
            if (!e.target.files[0]) {
                return;
            }
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
            const data = await savecomplaints(formDataToSend);
            const complaintId = data.data._id;

            if (objId && policeStationId) {
                try {
                    await updateComplaints(objId, complaintId);
                    await updatePoliceStationTOuser(policeStationId, objId);
                } catch (linkError) {
                    console.log(linkError);
                }
            }

            alert("Complaint Successfully...");
        }
         catch (error) {
            console.log(error); 
            alert('Network Problem');
        }
    };
    return(
        <>
           <Container className="mt-5">
            <Alert className="d-flex text-center justify-content-center"><h2 className="text-center">Welcome To BhawarKua PoliceStation</h2></Alert>
           <Paper elevation={2} className="p-5">
                           
                            <h4 style={{ color: "green",paddingLeft:"100px"}}> Fill Correct Details</h4>
                            <form onSubmit={handleSubmit}>
                                <Row >
                                    <Col lg={1}></Col>
                                    <Col lg={6} sm={1}>
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
                                            name="dis"
                                            label="description"
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

           </Container>
        
        
        </>
    )
}
