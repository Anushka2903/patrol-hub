import { Button } from "@mui/material";
import { useState } from "react";
import { Alert, Col, Container, Modal, Row, Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";



export function Notice() {
   const { state } = useLocation();
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const [numPages, setNumPages] = useState(null);
   const [pageNumber, setPageNumber] = useState(1);
 
   console.log(state.data);
   return (
      <>
         <div className="mt-5">
            <Container>
               <Row>
                  <Col lg={2}></Col>
                  <Col lg={8}>
                     <Alert className="text-center"><h5>{state.data.title}</h5></Alert>
                     <Table border={1}>
                        <thead>
                           <tr>
                              <th className="text-center" style={{ fontSize: "large", color: "black" }}>Title</th>
                              <th className="text-center" style={{ fontSize: "large", color: "black" }}>Start-Date</th>
                              <th className="text-center" style={{ fontSize: "large", color: "black" }}>End-Date</th>
                              <th className="text-center" style={{ fontSize: "large", color: "black" }}> File</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td className="text-center" style={{ fontSize: "13px", color: "black" }}>{state.data.title}</td>
                              <td className="text-center" style={{ fontSize: "13px", color: "black" }}>{state.data.sdate}</td>
                              <td className="text-center" style={{ fontSize: "13px", color: "black" }}>{state.data.edate}</td>
                              <td className="text-center"><Button variant="contained" onClick={handleShow}>View</Button></td>
                           </tr>
                        </tbody>
                     </Table>

                  </Col>
                  <Col lg={2}></Col>
               </Row>
               <div>
                  <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                     <Modal.Header closeButton>
                        <Modal.Title>{state.data.title}</Modal.Title>
                     </Modal.Header>

                     <Modal.Body>
                        <iframe
                           title={state.data.title}
                           src={state.data.file}
                           style={{ width: '100%', height: '500px' }}
                        />
                        <p>
                           Page {pageNumber} of {numPages}
                        </p>
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
   )
}