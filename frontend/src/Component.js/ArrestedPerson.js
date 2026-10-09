import { Paper } from "@mui/material";
import { useState } from "react";
import { Col, Alert, Container, Row, Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export function ArrestedPersonList() {
    const { state } = useLocation();
    const [data, setdata] = useState(state.arrestedpersonData);
    // console.log(state);
    console.log(data);
    return (
        <>
            <div className="mt-5">
                <Container>


                    <Row>
                        <Col lg={2}></Col>
                        <Col lg={8}>
                            <Alert className="text-center">
                                <h3>Arrested Persons In Indore</h3>
                            </Alert>
                            <Table border={1}>
                                <thead>
                                    <tr>
                                        <th className="text-center" style={{ fontSize: "large", color: "black" }}>S.N</th>
                                        <th className="text-center" style={{ fontSize: "large", color: "black" }}>Name</th>
                                        <th className="text-center" style={{ fontSize: "large", color: "black" }}>Arrested Date</th>
                                        <th className="text-center" style={{ fontSize: "large", color: "black" }}>Crime</th>
                                        <th className="text-center" style={{ fontSize: "large", color: "black" }}>Police Stations</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  
                                        {data.map((data,index) => (
                                            <>
                                              <tr>
                                                <td className="text-center" style={{ fontSize: "16px", color: "black" }}>{index+1}</td>
                                                <td className="text-center" style={{ fontSize: "16px", color: "black" }}>{data.name}</td>
                                                <td className="text-center" style={{ fontSize: "16px", color: "black" }}>{data.arrestedDate}</td>
                                                <td className="text-center" style={{ fontSize: "16px", color: "black" }}>{data.crime}</td>
                                                <td className="text-center" style={{ fontSize: "16px", color: "black" }}>{data.policestation}</td>
                                                
                                    </tr> 
                                            </>

                                        ))}



                                </tbody>
                            </Table>

                        </Col>
                        <Col lg={2}></Col>
                    </Row>



                </Container>

            </div>

        </>
    )
}