import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { Alert, Col, Container, Dropdown, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { signin } from "./ApiServices";
import { useNavigate } from "react-router-dom";

export function MyComplaints() {
  const isLoggedin = useSelector((state) => state.user.isLoggedin);
  // const complaints = useSelector((state) => state.user.vehiclecomplaints);
  const signData = useSelector((state) => state.user.signData)
  const [data, setdata] = useState([]);
  const [kidnapingReportdata, setKidnapingReportdata] = useState([]);
  const [generalThiftData, setGeneralThift] = useState([]);
  const [selectedItem, setSelectedItem] = useState('Vehicle Stolen');
  const [isvehicleS, setisVehicleS] = useState(true);
  const [isnormalS, setisNormal] = useState(false);
  const [iskidnaping, setisKidnaping] = useState(false);
  const navigate=useNavigate();
  const handleData = async () => {
    const res = await signin(signData[0])
    // console.log(res.data);
    setdata(res.data.vehiclecomplaints)
    setKidnapingReportdata(res.data.kidnappingReport);
    console.log(kidnapingReportdata[2]);
    setGeneralThift(res.data.generalThefts)
    //  console.log(res.data.vehiclecomplaints);
    // console.log(signData[0]);
  }
  useEffect(() =>{
    
    if(isLoggedin === true) {
      handleData();
    }
  }, [])
  // const handleSelect = (eventKey, event) => {
  //   // Update the state with the selected item
  //   setSelectedItem(eventKey);
  // };
  const handleClick = (e) => {
    const clickedItem = e.target.textContent;
    setSelectedItem(clickedItem);
  
    switch (clickedItem) {
      case 'Vehicle Stolen':
        setisVehicleS(true);
        setisNormal(false);
        setisKidnaping(false);
        break;
      case 'Normal Stolen':
        setisNormal(true);
        setisVehicleS(false);
        setisKidnaping(false);
        break;
      case 'Kidnapping':
        setisKidnaping(true);
        setisVehicleS(false);
        setisNormal(false);
        break;
      default:
        break;
    }
  };
  const handleView=(data)=>{
      console.log(data);
       navigate("/view",{state:{data:data}});
  }
  return (
    <>
      <div className="mt-3">
        <Container>
          {isLoggedin ? (
            <>
              <Row>
                <Col lg={2}></Col>
                <Col lg={8}>
                  <Alert className="text-center">My Complaints</Alert>
                  <Dropdown className="mt-3 mb-3">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {selectedItem}
                    </Dropdown.Toggle>
                    <Dropdown.Menu onClick={handleClick}>
                      <Dropdown.Item>Vehicle Stolen</Dropdown.Item>
                      <Dropdown.Item>Normal Stolen</Dropdown.Item>
                      <Dropdown.Item>Kidnapping</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  {isvehicleS ? (
                    <>
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell style={{ fontSize: "large", color: "black" }}>S.N</TableCell>
                              <TableCell style={{ fontSize: "large", color: "black" }}>Complaint</TableCell>
                              <TableCell align="center" style={{ fontSize: "large", color: "black" }}>Date</TableCell>
                              <TableCell align="center" style={{ fontSize: "large", color: "black" }}>Time</TableCell>
                              <TableCell align="center" style={{ fontSize: "large", color: "black" }}>Complete(In days)</TableCell>
                              <TableCell align="center" style={{ fontSize: "large", color: "black" }}>Status</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {data.map((data, index) => (
                              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row" style={{ fontSize: "16px", color: "black" }}>{index + 1}.</TableCell>
                                <TableCell component="th" scope="row" style={{ fontSize: "16px", color: "black" }}>{data.name}</TableCell>
                                <TableCell align="center" className="ms-2" style={{ fontSize: "16px", color: "black" }}>{data.date}</TableCell>
                                <TableCell align="center" className="ms-2" style={{ fontSize: "16px", color: "black" }}>{data.time}</TableCell>
                                <TableCell align="center" className="ms-2" style={{ fontSize: "16px", color: "black" }}>In 2 days</TableCell>
                                <TableCell align="center" className="ms-2"><Button variant="contained" onClick={(index)=>handleView(data)} >View</Button></TableCell>
                              </TableRow>
                            ))

                            }
                        </TableBody>
                       </Table>
                      </TableContainer>
                    </>
                  ) :null}
                  {iskidnaping ? (
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell style={{ fontSize: "17px", color: "black" }}>S.N</TableCell>
                            <TableCell style={{ fontSize: "17px", color: "black" }}>Victm Name</TableCell>
                            <TableCell align="center" style={{ fontSize: "17px", color: "black" }}>Age</TableCell>
                            <TableCell align="center" style={{ fontSize: "17px", color: "black" }}>Location</TableCell>
                            <TableCell align="center" style={{ fontSize: "17px", color: "black" }}>Complete(In days)</TableCell>
                            <TableCell align="center" style={{ fontSize: "17px", color: "black" }}>Status</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {kidnapingReportdata.map((data, index) => (
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                              <TableCell component="th" scope="row" style={{ fontSize: "13px", color: "black" }}>{index + 1}.</TableCell>
                              <TableCell component="th" scope="row" style={{ fontSize: "13px", color: "black" }}>{data.victimname}</TableCell>
                              <TableCell align="center" className="ms-2" style={{ fontSize: "13px", color: "black" }}>{data.victimage}</TableCell>
                              <TableCell align="center" className="ms-2" style={{ fontSize: "13px", color: "black" }}>{data.location}</TableCell>
                              <TableCell align="center" className="ms-2" style={{ fontSize: "13px", color: "black" }}>In 2 days</TableCell>
                              <TableCell align="center" className="ms-2"><Button variant="contained" >View</Button></TableCell>
                            </TableRow>
                          ))
                          }
                        </TableBody>

                      </Table>

                    </TableContainer>
                  ) : null

                  }
                  {isnormalS?(
                    <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell style={{ fontSize: "17px", color: "black" }}>S.N</TableCell>
                          <TableCell style={{ fontSize: "17px", color: "black" }}>Amount</TableCell>
                          <TableCell align="center" style={{ fontSize: "17px", color: "black" }}>Date</TableCell>
                          <TableCell align="center" style={{ fontSize: "17px", color: "black" }}>Location</TableCell>
                          <TableCell align="center" style={{ fontSize: "17px", color: "black" }}>Complete(In days)</TableCell>
                          <TableCell align="center" style={{ fontSize: "17px", color: "black" }}>Status</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {generalThiftData.map((data, index) => (
                          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row" style={{ fontSize: "13px", color: "black" }}>{index + 1}.</TableCell>
                            <TableCell component="th" scope="row" style={{ fontSize: "13px", color: "black" }}>{data.amount}</TableCell>
                            <TableCell align="center" className="ms-2" style={{ fontSize: "13px", color: "black" }}>{data.date}</TableCell>
                            <TableCell align="center" className="ms-2" style={{ fontSize: "13px", color: "black" }}>{data.location}</TableCell>
                            <TableCell align="center" className="ms-2" style={{ fontSize: "13px", color: "black" }}>In 2 days</TableCell>
                            <TableCell align="center" className="ms-2"><Button variant="contained" >View</Button></TableCell>
                          </TableRow>
                        ))

                        }
                      </TableBody>

                    </Table>

                  </TableContainer>
                       
                  ):null

                  }
                </Col>
                <Col lg={2}></Col>
              </Row>
            </>
          ) : (
             <div className="mt-5">
                 <h4 className="text-center mt-5">Plese Login</h4>
                 <div className="text-center"><Button variant="outlined" onClick={()=>navigate("/login")}>Login</Button></div>
             </div>
          )}

        </Container>
      </div >
    </>
  )
}