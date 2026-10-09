import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { Alert, Col, Container, Form, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { saveWitness, updateCharcterToWitnes } from "./ApiServices";

export function Oath() {
    const [istrue, setIstrue] = useState(false);
    const { state } = useLocation();
    console.log(state.data);
    const [formData, setformData] = useState({})
    const [isCheckboxChecked, setCheckboxChecked] = useState(false);
    const [isButtonDisabled, setButtonDisabled] = useState(true);
    const navigate = useNavigate();
    const handleCheckboxChange = () => {
        setCheckboxChecked(!isCheckboxChecked);
        setButtonDisabled(!isButtonDisabled);
    };

    const handleTrue = () => {
        setIstrue(!istrue);
    }
    const handlechange = (e) => {
        console.log(e.target.name);
        setformData({...formData,[e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {

            const response = await saveWitness(formData);
            const witnessId = response.data._id;
            const characterId = state?.data;

            if (characterId) {
                try {
                    await updateCharcterToWitnes(characterId, witnessId);
                } catch (linkError) {
                    console.log(linkError);
                }
            }

            alert("Confirm ?")
            navigate("/charterverification/payment")
        }
        catch (error) {
            console.log(error);
            alert("Network Problem")
        }

    }


    return (
        <>
            <Container className="mt-4">
                <Paper elevation={2}>
                    <Alert className="text-center"><h2 className="text-center">Oath Letter</h2></Alert>
                    <div className="ms-4">

                        <Form>
                            <div className="d-flex">
                                <p style={{ color: "black", fontSize: "16px" }}>
                                    क्या आपके विरुद्ध कोई आपराधिक प्रकरण दर्ज है? *
                                </p>
                                <Form.Check
                                    inline
                                    label="Yes"
                                    name="yes"
                                    type="radio"
                                    id="yes"
                                    style={{ color: "black", fontSize: "16px" }}
                                    className="m-2"
                                />
                                <Form.Check
                                    inline
                                    label="No"
                                    name="yes"
                                    type="radio"
                                    id="no"
                                    style={{ color: "black", fontSize: "16px" }}
                                    className="m-2"

                                />
                            </div>

                            <div className="d-flex">
                                <Form.Check
                                    inline
                                    name="yes"
                                    type="checkbox"
                                    id="no"
                                    style={{ color: 'black', fontSize: '16px' }}
                                    onChange={handleCheckboxChange}
                                />
                                <p style={{ color: 'black', fontSize: '16px' }}>
                                    फॉर्म में उपलब्ध कराई गई सभी जानकारी सही है *
                                </p>
                            </div>
                            <Button
                                variant="contained"
                                className="mb-2"
                                onClick={handleTrue}
                                disabled={isButtonDisabled}
                            >
                                Add Witness
                            </Button>
                        </Form>

                        {istrue ? (
                            <>
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
                                            <label className="ms-2"><h5>Mobile Number</h5></label>
                                            <TextField
                                                type="number"
                                               name="mobileno"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>Address</h5></label>
                                            <TextField
                                                type="text"
                                                name="addres"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>Pin Code</h5></label>
                                            <TextField
                                                type="number"
                                                name="pincode"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>Relation</h5></label>
                                            <TextField
                                                type="text"
                                                name="relation"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                    
                                        <div className="pb-2"><Button  type="submit" variant="contained" >Payment</Button></div>



                                    </Row>
                                </form>


                            </>

                        ) : null}

                    </div>
                </Paper>
            </Container>


        </>
    )
}
