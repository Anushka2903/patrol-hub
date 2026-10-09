import { Card, CardMedia, Paper } from "@mui/material";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import chartericon from "../Allimages/charterverifyicon.png";
import domesticicons from "../Allimages/domestic.png";
import tenantpgicons from "../Allimages/tenantpgicons.png";

export function Verification() {
    // const [arrestedpersonData,setarrestedpersonData]=useState([]);
    //   const handleData=async ()=>{
    //       const data = await getDepartementData();
    //       setarrestedpersonData(data.data[0].arrestedpersons);
    //   }
    //   useEffect(()=>{
    //        handleData(); 
    //   },[])
      const navigate = useNavigate();
    return (
        <>
            <div className="mt-5">
                <Container>
                    <hr></hr>
                    <h3 >Verification</h3>
                    <hr></hr>
                      <div className="mt-4">
                        <Paper elevation={2} className="d-flex justify-content-center" style={{backgroundColor:"#f2f2f2"}}>
                            <Card className="p-2 m-4" style={{ maxWidth: "200px",backgroundColor:"#f2f2f2"}}  onClick={()=>navigate("/characterverification")}>
                                <CardMedia
                                    component="img"
                                    alt="Arrested Persons"
                                    style={{
                                        height: "150px",
                                        width: "100%",
                                        objectFit: "cover", 
                                    }}
                                    className="img-fluid"
                                    image={chartericon}
                                />
                                <div  className="p-3">
                                    <h2 style={{ margin: 0 }} className="text-center" >Character Verification</h2>
                                </div>
                            </Card>

                       
                        <Card className="p-2 m-4" style={{ maxWidth: "200px",backgroundColor:"#f2f2f2"}} onClick={()=>navigate("/verification/pg")}>
                                <CardMedia
                                    component="img"
                                    alt="Arrested Persons"
                                    style={{
                                        height: "150px",
                                        width: "100%",
                                        objectFit: "cover", 
                                    }}
                                    className="img-fluid"
                                    image={tenantpgicons}
                                />
                                <div  className="p-3">
                                    <h2 style={{ margin: 0 }} className="text-center">Tenant/PG Information</h2>
                                </div>
                            </Card>
                        
                        <Card className="p-2 m-4" style={{ maxWidth: "200px",backgroundColor:"#f2f2f2"}} onClick={()=>navigate("/verification/domestic")}>
                                <CardMedia
                                    component="img"
                                    alt="Arrested Persons"
                                    style={{
                                        height: "150px",
                                        width: "100%",
                                        objectFit: "cover", 
                                    }}
                                    className="img-fluid"
                                    image={domesticicons}
                                />
                                <div  className="p-3">
                                    <h2 style={{ margin: 0 }} className="text-center">Domestic Helper No.</h2>
                                </div>
                            </Card>
                            </Paper>
                            </div>

                   
                </Container>
            </div>


        </>
    )
}
