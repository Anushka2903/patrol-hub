import { Button, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { Alert, Col, Container, Modal, Row } from "react-bootstrap";
import { getDepartementData } from "./ApiServices";
export function Act() {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (item) => {
        setSelectedItem(item);
        setShow(true);
    };
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const handleData = async () => {
        try {
            const res = await getDepartementData();
            setData(res.data[0]?.act || [])
            console.log(res.data[0].act.title);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        handleData();
    }, []);
    return (
        <>
            <div className="mt-3">
                <Container>
                    <Alert className="text-center">
                        <h4>ACT AND RULES</h4>
                    </Alert>
                    <div >
                        <Row>
                            <Col lg={1}></Col>
                            <Col lg={6}>
                                <h2>MADHYAPRADESH ACTS</h2>
                                <div className="p-2 mt-1" style={{ backgroundColor: "whitesmoke" }} >
                                    {data.map((item, index) => (
                                        <Paper elevation={2} className="p-3 m-2" key={index} style={{ backgroundColor: "#af131330" }}>
                                            <div className="d-flex">
                                                <h4>{item.title}</h4>
                                                <p className="text-center mt-1 ms-3">({item.applyBy})</p>
                                            </div>
                                            <p>{item.origindate}</p>
                                            <div className="mt-2"><Button variant="outlined" onClick={() => handleShow(item)}>File View</Button></div>
                                        </Paper>
                                    ))}
                                    <Button className="ms-2" variant="contained">MORE..</Button><br></br>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <h2>MP POLICE RULES</h2>
                                <div className="">
                                    <Paper className="p-2" style={{ backgroundColor: "#f2f2f2" }}>
                                        <div>
                                            <Button style={{ fontSize: '10px', color: "black" }}>PART- I(THE POLICE FORCE)</Button><br></br>
                                            <Button style={{ fontSize: '10px', color: "black" }}>PART- II(ADMINISTRATION)</Button><br></br>
                                            <Button style={{ fontSize: '10px', color: "black" }}>PART- III(FUNCTIONS POWERS AND DUTIES)</Button><br></br>
                                            <Button style={{ fontSize: '10px', color: "black" }}>PART- IV(THE HEAD QUARTER STAFF AND THEIR DUTIES)</Button><br></br>
                                            <Button style={{ fontSize: '10px', color: "black" }}>PART- V(THE WORKING OF POLICE STATIONS)</Button><br></br>
                                            <Button style={{ fontSize: '10px', color: "black" }}>PART VI (CRIME AND CRIMINALS)</Button><br></br>
                                            <Button style={{ fontSize: '10px', color: "black" }}>PART - VII (MISCELLANEOUS)</Button><br></br>
                                        </div>
                                    </Paper>
                                    <h3 className="mt-2">INFORMATION</h3>
                                    <Paper className="p-2 mt-2" style={{ backgroundColor: "#f2f2f2" }}>
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
                                </div>
                            </Col>
                            <Col lg={1}></Col>
                        </Row>
                    </div>
                    <div className="mt-2">
                        <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                            <Modal.Header closeButton>
                                {selectedItem && <Modal.Title>{selectedItem.title}</Modal.Title>}
                            </Modal.Header>
                            <Modal.Body>
                                {selectedItem && (
                                    <>
                                        <iframe
                                            title={selectedItem.title}
                                            src={selectedItem.image}
                                            style={{ width: '100%', height: '500px' }}
                                        />
                                        <p>
                                            Page {pageNumber} of {numPages}
                                        </p>
                                    </>
                                )}
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </Container>
            </div>
        </>
    );
}
