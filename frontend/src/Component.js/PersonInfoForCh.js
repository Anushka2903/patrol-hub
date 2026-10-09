import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { saveCharcterInfo, updatePoliceStationToCharcter } from "./ApiServices";
import { useSelector } from "react-redux";

export function PersonInfoCharacter() {
    const [formData, setformData] = useState({});
    const navigate =useNavigate();
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
    const handleSubmit =async (e) => {
        e.preventDefault();
        try
         {
            const formDataToSend = new FormData();
            for (const key in formData) {
                formDataToSend.append(key, formData[key]);
             }
            const data = await saveCharcterInfo(formDataToSend);
            const characterId = data.data._id;

            if (policeStationId) {
                try {
                    await updatePoliceStationToCharcter(policeStationId, characterId);
                } catch (linkError) {
                    console.log(linkError);
                }
            }

            alert("Confirm ?");
            navigate("/characterverification/addressinfo", { state: {  formData: formData,dataId: characterId,} });
        }
         catch (error) 
         {
           console.log(error);
           alert("Network Problem") 
        }
       
    }
    return (
        <>
            <Container className="mt-4">
                <Paper className="p-3">
                    <div>
                        <Alert className="text-center"><h2 className="text-center">Provide Correct Personal Details</h2></Alert>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col lg={4}>
                                    <label className="ms-2"><h5>First Name</h5></label>
                                    <TextField
                                        type="text"
                                        name="fname"
                                        fullWidth
                                        className="p-2 mt-1"
                                        required
                                        // style={{ width: "250px" }}
                                        onChange={handlechange}
                                    />
                                </Col>
                                <Col lg={4}>
                                    <label className="ms-2"><h5>Middile Name</h5></label>
                                    <TextField
                                        type="text"
                                        name="mname"
                                        fullWidth
                                        className="p-2 mt-1"
                                        // style={{ width: "250px" }}
                                        onChange={handlechange}
                                    />
                                </Col>
                                <Col lg={4}>
                                    <label className="ms-2"><h5>Last Name</h5></label>
                                    <TextField
                                        type="text"
                                        name="lname"
                                        fullWidth
                                        className="p-2 mt-1"
                                        required
                                        // style={{ width: "250px" }}
                                        onChange={handlechange}
                                    />
                                </Col>
                                <Col lg={4}>
                                    <label className="ms-2"><h5>Father's Name</h5></label>
                                    <TextField
                                        type="text"
                                        name="fathername"
                                        fullWidth
                                        className="p-2 mt-1"
                                        required
                                        // style={{ width: "250px" }}
                                        onChange={handlechange}
                                    />
                                </Col>
                                <Col lg={4}>
                                    <label className="ms-2"><h5>Mother's Name</h5></label>
                                    <TextField
                                        type="text"
                                        name="mothername"
                                        fullWidth
                                        className="p-2 mt-1"
                                        required
                                        // style={{ width: "250px" }}
                                        onChange={handlechange}
                                    />
                                </Col>
                                <Col lg={4}>
                                    <label className="ms-2"><h5>Gender</h5></label>
                                    <TextField
                                        type="text"
                                        name="gender"
                                        fullWidth
                                        className="p-2 mt-1"
                                        required
                                        // style={{ width: "250px" }}
                                        onChange={handlechange}
                                    />
                                </Col>
                                <Col lg={4}>
                                    <label className="ms-2"><h5>LandLine Number(Optional)</h5></label>
                                    <TextField
                                        type="number"
                                        name="landlineno"
                                        fullWidth
                                        className="p-2 mt-1"
                                        onChange={handlechange}
                                    />
                                </Col>
                                <Col lg={4}>
                                    <label className="ms-2"><h5>Mobile Number</h5></label>
                                    <TextField
                                        type="number"
                                        name="mobileno"
                                        fullWidth
                                        className="p-2 mt-1"
                                        onChange={handlechange}
                                    />
                                </Col>
                                <Col lg={4}>
                                    <label className="ms-2"><h5>Email</h5></label>
                                    <TextField
                                        type="email"
                                        name="email"
                                        fullWidth
                                        className="p-2 mt-1"
                                        required
                                        onChange={handlechange}
                                    />
                                </Col>
                                <Col lg={4}>
                                    <label className="ms-2"><h5>Photo</h5></label>
                                    <TextField
                                        type="file"  // Replace TextField with standard input for file
                                        name="image"
                                        fullWidth
                                        className="p-2 mt-1"
                                     
                                        accept="image/*"
                                        onChange={handlechange}
                                    />
                                </Col>
                            </Row>
                            <Button type="submit" variant="contained" className="p-3 ms-2">Next</Button>

                        </form>

                    </div>
                </Paper>
            </Container>


        </>
    )
}
