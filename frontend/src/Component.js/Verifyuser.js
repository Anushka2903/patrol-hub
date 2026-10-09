import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyotp } from "./ApiServices";

export function VerifyUser() {
    const {state} = useLocation();
     const [formData,setformData] =useState(state);
     const navigate = useNavigate();

     const handlechange = (e)=>{
             setformData({...formData,[e.target.name]:e.target.value});
     }
     const handleSubmit=async (e)=>{
           e.preventDefault();
         console.log(formData);
            try 
            {
              const data=  await verifyotp(formData);
              console.log(data);
                alert("Verified...")
                navigate("/login");
            }
             catch (error) {
                   alert("wrong otp")
            }
          
     }
    return (
        <>
            <div style={{ position: "relative", top: 100 }}>
                <Container className="d-flex justify-content-center">
                    <Paper elevation={6} className="p-4">
                        <h4 className="ms-2">Enter your Otp</h4>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                className="p-2 mt-1"
                                fullWidth
                                 style={{height:"10"}}
                                id="outlined-error"
                                label="Enter Otp"
                                name="otp"
                                type="number"
                                onChange={handlechange}
                            />

                            <Button type="submit" className="mt-2 ms-2" variant="contained">Verify</Button>
                            <Button variant="outlined" className="mt-1 ms-3">Back</Button>

                        </form>

                    </Paper>
                </Container>

            </div>

        </>
    )
}