import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { signin } from "./ApiServices";
import { useDispatch } from "react-redux";
import { login, objId, policeStationId, signData, vehiclecomplaints } from "./Store/Slice/userSlice";


export function Login()
{
    const [formData,setformData]=useState({});
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const handlechange =(e)=>{
        setformData({...formData,[e.target.name]:e.target.value});
    }
    const handleregister=()=>{
            navigate("/signup")
    }
    const handleSubmit=async (e)=>{
           e.preventDefault();
           //api
           try {
            console.log(formData);
            const data= await signin(formData)
            //   console.log(data.token);
              console.log(data.data.id);
            if(data.data.token){  
                 alert("Sigin SuccessFully")
                 dispatch(login());
                 dispatch(objId(data.data.id));
                 dispatch(signData(formData))
                 dispatch(policeStationId(data.data.policeStation))
                //  console.log(data.data.vehiclecomplaints);
                 dispatch(vehiclecomplaints(data.data.vehiclecomplaints))
                 e.target.reset();
                 navigate("/");
            }
            else{
                 alert("wrong number and password")
            }
           }catch(error){
            console.log(error);  
            alert(error.response?.data?.message || error.response?.data || error.message || "Login failed")
           }
        //    console.log(formData);
    }
    return(
        <>
            <Container className="d-flex justify-content-center" style={{ position: "relative", top: 100 }}>
                   
                  <Paper elevation={6} className="p-3">
                      <h4 className="ms-3">Login</h4>
                     
                          <form onSubmit={handleSubmit}>
                          <TextField
                                className="p-2 mt-1"
                                 
                                style={{width:"250px"}}
                                id="outlined-error"
                                label="Number"
                                name="number"
                                type="number"
                                onChange={handlechange}
                            /><br></br>
                             <TextField
                                className="p-2 mt-1"
                                style={{width:"250px"}}
                                
                                id="outlined-error"
                                label="Password"
                                name="password"
                                type="password"
                                onChange={handlechange}
                            /><br></br>
                            <Button type="submit" fullWidth variant="contained">Login</Button>
                           
                          </form>
                          <Button fullWidth variant="outlined" className="mt-2" onClick={handleregister}>Register</Button>
                      
                      
                  </Paper>
            </Container>
        
        </>
    )
}
