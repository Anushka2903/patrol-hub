import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { saveAddress, updateCharcterToAddress } from "./ApiServices";

export function AddressforCharacter() {
    const {state} = useLocation();

  
    const navigate = useNavigate();
    const [formData,setformData]=useState({
        district: "Indore",
        country: "India",
        policestation: "BhawarKua Thana",
        state: "MadhyaPradesh"
    })
   
    const handlechange = (e) => {
         console.log(e.target.value);
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
            const response = await saveAddress(formDataToSend);
            const addressId = response.data._id;
            const characterId = state?.dataId;

            if (characterId) {
                try {
                    await updateCharcterToAddress(characterId, addressId);
                } catch (linkError) {
                    console.log(linkError);
                }
            }

            alert("Confirm ?");
            navigate("/characterverification/oath",{state:{formData,data:characterId}});
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
                        <Alert className="text-center"><h2 className="text-center">Provide Correct Address Details</h2></Alert>
                      
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col lg={4}>
                                <label className="ms-2"><h5>Makan Number</h5></label>
                                    <TextField
                                        type="text"
                                        name="mnumber"
                                        fullWidth
                                        className="p-2 mt-1"
                                        required
                                    // style={{ width: "250px" }}
                                        onChange={handlechange}
                                    />
                                </Col>
                                <Col lg={4}>
                                <label className="ms-2"><h5>Gali Number</h5></label>
                                    <TextField
                                        type="text"
                                        name="gnumber"
                                        fullWidth
                                        className="p-2 mt-1"
                                    // style={{ width: "250px" }}
                                     onChange={handlechange}
                                    />
                                </Col>
                                <Col lg={4}>
                                <label className="ms-2"><h5>Colony/Area</h5></label>
                                    <TextField
                                        type="text"
                                        name="colony"
                                        fullWidth
                                        className="p-2 mt-1"
                                        required
                                    // style={{ width: "250px" }}
                                        onChange={handlechange}
                                    />
                                </Col>
                                <Col lg={4}>
                                <label className="ms-2"><h5>Village/City</h5></label>
                                    <TextField
                                        type="text"
                                        name="village"
                                        fullWidth
                                        className="p-2 mt-1"
                                        required
                                    // style={{ width: "250px" }}
                                        onChange={handlechange}
                                    />
                                </Col>
                                <Col lg={4}>
                                    <label className="ms-2"><h5>Post/Block</h5></label>
                                    <TextField
                                        type="text"
                                        name="post"
                                        fullWidth
                                        className="p-2 mt-1"
                                        required
                                    // style={{ width: "250px" }}
                                        onChange={handlechange}
                                    />
                                </Col>
                                <Col lg={4}>
                                <label className="ms-2"><h5>District</h5></label>
                                    <TextField
                                        type="text"
                                        name="district"
                                        fullWidth
                                        value="Indore"
                                        className="p-2 mt-1"
                                        required
                                    // style={{ width: "250px" }}
                                      onChange={handlechange}
                                    />
                                </Col>
                                <Col lg={4}>
                                <label className="ms-2"><h5>Country</h5></label>
                                    <TextField
                                        type="text"
                                        name="country"
                                        fullWidth
                                       value="India"
                                        className="p-2 mt-1"
                                        onChange={handlechange}
                                    />
                                </Col>
                                <Col lg={4}>
                                <label className="ms-2"><h5>Police Station</h5></label>
                                    <TextField
                                        type="text"
                                        name="policestation"
                                        fullWidth
                                        value="BhawarKua Thana"
                                        className="p-2 mt-1"
                                        onChange={handlechange}
                                    />
                                </Col>
                                <Col lg={4}>
                                <label className="ms-2"><h5>state</h5></label>
                                    <TextField
                                        type="text"
                                        name="state"   
                                        fullWidth
                                       value="MadhyaPradesh"
                                        className="p-2 mt-1"
                                        required
                                   onChange={handlechange}
                                    />
                                </Col>
                                <Col lg={4}>
                                <label className="ms-2"><h5>Pin Code</h5></label>
                                    <TextField
                                        type="text"
                                        name="pincode"   
                                        fullWidth
                                        className="p-2 mt-1"
                                        required
                                   onChange={handlechange}
                                    />
                                </Col>
                                <Col lg={4}>
                                <label className="ms-2"><h5>Are you stable?</h5></label>
                                    <TextField
                                        type="text"
                                        name="stable"  
                                        label="only yes or no" 
                                        fullWidth
                                        className="p-2 mt-1"
                                        required
                                   onChange={handlechange}
                                    />
                                </Col>
                                <Col lg={4}>
                                <label className="ms-2"><h5>Address Proof(Adhar Card)</h5></label>
                                    <TextField
                                        type="file"
                                        name="image"   
                                        fullWidth
                                        className="p-2 mt-1"
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
