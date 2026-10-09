import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { savePgtenant, updatePgPoliceStation } from "./ApiServices";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export function TenantPg() {
    const [istrue, setIsTrue] = useState(false)
    const [formData, setformData] = useState({
        presentcountry: "India",
        presentstate: "MAdhyaPradesh",
        presentdistrict: "Indore",
        presentpolicestation: "BhawarKua Thana",
        permanantcountry: "India",
        permanantstate: "MAdhyaPradesh",
        permanantdistrict: "Indore",
        permanantpolicestation: "BhawarKua Thana"
    });
    const navigate = useNavigate();
    const policeStationId = useSelector((state) => state.user.policeStationId)
    const isLoggedin = useSelector((state)=>state.user.isLoggedin)
    const handleTrue = () => {
        if(isLoggedin===true)
        {
            setIsTrue(!istrue);
        }
        else{
            navigate("/login")

        }
        
    }
    const handlechange = (e) => {
        if (e.target.type === 'file') {
            if (!e.target.files[0]) {
                return;
            }
            console.log(e.target.files[0].name);
            setformData({ ...formData, [e.target.name]: e.target.files[0] });
        } else {
            setformData({ ...formData, [e.target.name]: e.target.value });
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            for (const key in formData) {
                formDataToSend.append(key, formData[key]);
            }
            const response = await savePgtenant(formDataToSend);
            const pgVerifyId = response.data._id;

            if (policeStationId) {
                try {
                    await updatePgPoliceStation(policeStationId, pgVerifyId);
                } catch (linkError) {
                    console.log(linkError);
                }

            }

            alert("Pls Wait One Week")
            e.target.reset();
        }
        catch (error) {
            console.log(error);
            alert("Network Problem")
        }
    }
    return (
        <>
            <div className="mt-5">
                <Container>
                    <hr></hr><hr></hr>
                    <h3>TENANT/P.G. INFORMATION</h3>
                    <hr></hr><hr></hr>
                    <Paper elevation={2} className="p-4">
                        <div>
                            <p style={{ color: "black", fontSize: "16px" }}>
                                इस सेवा के माध्यम से नागरिकों द्वारा म.प्र. के क्षेत्राधिकार में उनके मकान मे निवासरत किरायेदार की
                                जानकारी पुलिस थाने में उपलब्ध कराने हेतु "किरायेदार/पी.जी. सूचना" के माध्यम से प्रेषित की जा सकती है।
                                इस सेवा का उपयोग करने के पूर्व "म.प्र.पुलिस सिटिजन पोर्टल" में पंजीकरण कराया जाना आवश्यक है।
                                सेवा का उपयोग करने के लिये "हां" पर क्लिक करें।
                            </p>
                            <Button variant="outlined" onClick={handleTrue}>Yes</Button>
                            <Button variant="outlined" className="ms-2" style={{ borderColor: "red", color: "red" }} onClick={()=>navigate("/")}>No</Button>
                        </div>
                    </Paper>
                    {istrue?(
                    <div className="mt-2">
                        <form onSubmit={handleSubmit}>

                            <Paper className="p-4">
                                <div className="mt-2 p-1" style={{ border: "2px solid yellogreen" }}>
                                    <h4>Owner Information</h4>
                                    <Row>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>First Name</h5></label>
                                            <TextField
                                                type="text"
                                                name="ownerfname"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>Last Name</h5></label>
                                            <TextField
                                                type="text"
                                                name="ownerlname"
                                                fullWidth
                                                className="p-2 mt-1"
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>Business</h5></label>
                                            <TextField
                                                type="text"
                                                name="ownerbusiness"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>Email</h5></label>
                                            <TextField
                                                type="text"
                                                name="owneremail"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>Phone Number</h5></label>
                                            <TextField
                                                type="text"
                                                name="ownerphone"
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
                                                name="owneraddress"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                    </Row>

                                </div>
                                <h4 className="mt-2">Tenant Information</h4>
                                <div className="mt-2 p-1" style={{ border: "2px solid yellogreen" }}>

                                    <Row>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>First Name</h5></label>
                                            <TextField
                                                type="text"
                                                name="tenantfname"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>Last Name</h5></label>
                                            <TextField
                                                type="text"
                                                name="tenantlname"
                                                fullWidth
                                                className="p-2 mt-1"
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>Business</h5></label>
                                            <TextField
                                                type="text"
                                                name="tenantbusiness"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>Email</h5></label>
                                            <TextField
                                                type="text"
                                                name="tenantemail"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>Phone Number</h5></label>
                                            <TextField
                                                type="number"
                                                name="tenantmobile"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>Gender(Male/Female)</h5></label>
                                            <TextField
                                                type="text"
                                                name="gender"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>DOB</h5></label>
                                            <TextField
                                                type="date"
                                                name="dob"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>Number of Members</h5></label>
                                            <TextField
                                                type="text"
                                                name="totalmembertenant"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>Adhar Proof</h5></label>
                                            <TextField
                                                type="file"  // Replace TextField with standard input for file
                                                name="adharimg"
                                                fullWidth
                                                className="p-2 mt-1"

                                                accept="image/*"
                                                onChange={handlechange}
                                            />
                                        </Col>
                                    </Row>

                                </div>
                                <h2 className="mt-2">Present Address</h2>
                                <div className="mt-2 p-1" style={{ border: "2px solid yellogreen" }}>
                                    <Row>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>Makan Number</h5></label>
                                            <TextField
                                                type="number"
                                                name="presentmnumber"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>Colony/Area</h5></label>
                                            <TextField
                                                type="text"
                                                name="presentcolony"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>Village/City</h5></label>
                                            <TextField
                                                type="text"
                                                name="presentvillage"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>Country</h5></label>
                                            <TextField
                                                type="text"
                                                name="presentcountry"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                value="India"
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>State</h5></label>
                                            <TextField
                                                type="text"
                                                name="presentstate"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                value="MAdhyaPradesh"
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>District</h5></label>
                                            <TextField
                                                type="text"
                                                name="presentdistrict"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                value="Indore"
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>PoliceStation</h5></label>
                                            <TextField
                                                type="text"
                                                name="presentpolicestation"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                value="BhawarKua Thana"
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>Pin Code</h5></label>
                                            <TextField
                                                type="text"
                                                name="presentpincode"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                             // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                    </Row>
                                </div>
                                <h2 className="mt-2">Permanent Address</h2>
                                <div className="mt-2 p-1" style={{ border: "2px solid yellogreen" }}>
                                    <Row>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>Makan Number</h5></label>
                                            <TextField
                                                type="number"
                                                name="permanantmnumber"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>Colony/Area</h5></label>
                                            <TextField
                                                type="text"
                                                name="permanantcolony"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>Village/City</h5></label>
                                            <TextField
                                                type="text"
                                                name="permanantvillage"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>Country</h5></label>
                                            <TextField
                                                type="text"
                                                name="permanantcountry"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                value="India"
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>State</h5></label>
                                            <TextField
                                                type="text"
                                                name="permanantstate"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                value="MAdhyaPradesh"
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>District</h5></label>
                                            <TextField
                                                type="text"
                                                name="permanantdistrict"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                value="Indore"
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>PoliceStation</h5></label>
                                            <TextField
                                                type="text"
                                                name="permanantpolicestation"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                value="BhawarKua Thana"
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <Col lg={4}>
                                            <label className="ms-2"><h5>Pin Code</h5></label>
                                            <TextField
                                                type="text"
                                                name="permanantpincode"
                                                fullWidth
                                                className="p-2 mt-1"
                                                required
                                                // style={{ width: "250px" }}
                                                onChange={handlechange}
                                            />
                                        </Col>
                                        <div className="ms-2"> <Button type="submit" className="p-2" variant="contained">Submit</Button></div>
                                    </Row>
                                </div>
                            </Paper>
                        </form>
                    </div>
                ):null}

                </Container>

            </div>

        </>
    )
}
