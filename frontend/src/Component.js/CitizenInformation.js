import { Card, CardMedia, Paper } from "@mui/material";
import { Alert, Col, Container, Row } from "react-bootstrap";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDepartementData } from "./ApiServices";
import arrestedPersons from "../Allimages/arrestedicons.jpg";
import firicons from "../Allimages/firicons.jpg";
import rightsicon from "../Allimages/rightsicon.jpg";

export function CitizenInformation() {
    const [arrestedpersonData,setarrestedpersonData]=useState([]);
      const handleData=async ()=>{
          const data = await getDepartementData();
          setarrestedpersonData(data.data[0].arrestedpersons);
      }
      useEffect(()=>{
           handleData(); 
      },[])
      const navigate = useNavigate();
    return (
        <>
            <div className="mt-5">
                <Container>
                    <hr></hr>
                    <h3 >Information About</h3>
                    <hr></hr>
                      <div className="d-flex justify-content-center mt-4">
                        <Paper elevation={2} className="d-flex justify-content-center" style={{backgroundColor:"#f2f2f2"}}>
                            <Card className="p-2 m-4" style={{ maxWidth: "200px",backgroundColor:"#f2f2f2"}}  onClick={()=>navigate("/arrestedpersons",{state:{arrestedpersonData}})}>
                                <CardMedia
                                    component="img"
                                    alt="Arrested Persons"
                                    style={{
                                        height: "150px",
                                        width: "100%",
                                        objectFit: "cover", 
                                    }}
                                    className="img-fluid"
                                    image={arrestedPersons}
                                />
                                <div  className="p-3">
                                    <h2 style={{ margin: 0 }} className="text-center" >Arrested Persons</h2>
                                </div>
                            </Card>

                       
                        <Card className="p-2 m-4" style={{ maxWidth: "200px",backgroundColor:"#f2f2f2"}} onClick={()=>navigate("/report")}>
                                <CardMedia
                                    component="img"
                                    alt="Arrested Persons"
                                    style={{
                                        height: "150px",
                                        width: "100%",
                                        objectFit: "cover", 
                                    }}
                                    className="img-fluid"
                                    image={firicons}
                                />
                                <div  className="p-3">
                                    <h2 style={{ margin: 0 }} className="text-center">View Fir</h2>
                                </div>
                            </Card>
                        
                        <Card className="p-2 m-4" style={{ maxWidth: "200px",backgroundColor:"#f2f2f2"}}>
                                <CardMedia
                                    component="img"
                                    alt="Arrested Persons"
                                    style={{
                                        height: "150px",
                                        width: "100%",
                                        objectFit: "cover", 
                                    }}
                                    className="img-fluid"
                                    image={rightsicon}
                                />
                                <div  className="p-3">
                                    <h2 style={{ margin: 0 }} className="text-center">Rights</h2>
                                </div>
                            </Card>
                            </Paper>
                            </div>

                   
                </Container>
            </div>


        </>
    )
}
