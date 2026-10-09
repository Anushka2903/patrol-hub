import { Button, Paper, TextField } from "@mui/material";
import {  useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { signup } from "./ApiServices";
import mppolice from "../Allimages/mppolice.png";
// import {Toast} from "primereact/toast"
export function Signup() {
  const [formData,setformData]=useState({});
  const navigate = useNavigate();
  // const toast = useRef(null);
  const handlechange=(e)=>{
         setformData({...formData , [e.target.name]:e.target.value});
  }
  const handlelogin=()=>{
        navigate("/login")
  }
  const handleSubmit =async (e)=>{
       e.preventDefault();
        try {
               const data = await signup(formData);
               if(data)
               {
                   alert(data.data?.devOtp
                    ? `Use this development OTP: ${data.data.devOtp}`
                    : "Send Otp Your Number For Verification");
                   navigate("/verify",{ state: { number: formData.number } });

               }
          
          } 
        catch (error)
         {
          console.log(error);
          alert(error.response?.data?.message || error.message || "Registration failed");
          
        }
          
       console.log(formData);
      //  toast.current.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
      
  }
  return (
    <>
      <div className="mt-5 d-flex justify-content-center" style={{ position: "relative", top: 65 }} >
      {/* <Toast ref={toast} position="top-center" style={{ marginTop: '800' }} /> */}

        <Container>
       
          <Row>
            <Col lg={2}></Col>   
            <Col lg={4}  className="ps-0 pe-0">
           
                 <Paper elevation={6} className="ps-0 pe-0">
                <img src={mppolice}
                alt="#"
                  width="100%"
                  height="452"
                />
                </Paper>
            
            </Col>
            <Col lg={4} className="ps-0">
              <Paper elevation={6} className="p-3" style={{backgroundColor:"rgb(108 78 78 / 24%)"}}>
                <div className="ms-3">
                  <h1>Register</h1>
                  <p>Please enter your details...</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <TextField
                    className="p-2"
                    fullWidth
                    id="outlined-error"
                    label="Name"
                    name="name"
                    type="text"
                    onChange={handlechange}
                  />
                  <TextField
                    className="p-2"
                    fullWidth
                    id="outlined-error"
                    label="Number"
                    name="number"
                    type="number"
                    onChange={handlechange}
                  />
                  <TextField
                    className="p-2"
                    fullWidth
                    id="outlined-error"
                    label="Email"
                    name="email"
                    type="email"
                    onChange={handlechange}
                  />
                  <TextField
                    className="p-2"
                    fullWidth
                    id="outlined-error"
                    label="City"
                    name="city"
                    type="text"
                    onChange={handlechange}
                  />
                  <TextField
                    className="p-2"
                    fullWidth
                    id="outlined-error"
                    label="Age"
                    name="age"
                    type="number"
                    onChange={handlechange}
                  />
                  <TextField
                    className="p-2"
                    fullWidth
                    id="outlined-error"
                    label="Password"
                    name="password"
                    type="password"
                    onChange={handlechange}
                  />
                  <Button type="submit" className="ms-2" variant="contained">Submit</Button>
                  <Button className="ms-2" variant="outlined" onClick={handlelogin}>Login</Button>
                </form>
              </Paper>
            </Col>
         
            <Col lg={2}></Col>


          </Row>



        </Container>
      </div>
    </>
  )
}
