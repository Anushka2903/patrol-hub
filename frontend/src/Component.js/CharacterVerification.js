import { Alert, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Login } from "./Login";
import { Button, Paper, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function CharacterVerification() {
    const isLoggdin = useSelector((state) => state.user.isLoggedin)
    const [istrue,setistrue]=useState(false)
    const navigate = useNavigate();
    useEffect(()=>{
          if(isLoggdin==true){
               setistrue(true)
          }
          else{
             
              navigate("/login")
          }

    },[])
    return (
        <>
            <div className="mt-5">
                <Container>

                    {isLoggdin ? (
                        <>
                            <hr></hr>
                            <h1>Character Verification</h1>
                            <hr></hr>
                            <Paper elevation={2} className="p-4">
                                <div>
                                    <p style={{ color: "black", fontSize: "16px" }}>
                                        इस सेवा के माध्यम से, नागरिकों द्वारा म.प्र. के क्षेत्राधिकार में, उनके निवास से सम्बंधित थाने में, “चरित्र सत्यापन प्रमाण पत्र” हेतू आवेदन किया जा सकता है ।  आवेदक को “चरित्र सत्यापन प्रमाण पत्र” सम्बंधित थाने के माध्यम से उपलब्ध कराया जावेगा ।
                                        इस सेवा का उपयोग करने के पूर्व “म.प्र.पुलिस सिटिजन पोर्टल” https://citizen.mppolice.gov.in  मे पंजीकरण कराया जाना आवश्यक है ।
                                    </p>
                                </div>
                                <div>
                                    <h3 style={{ color: "black" }}>चरित्र सत्यापन हेतु आवश्यक दस्तावेज -</h3>
                                </div>
                                <div className="mt-1">
                                    <p style={{ color: "black", fontSize: "16px" }}>
                                        1.आवेदक का  पासपोर्ट size फोटो ( 200 KB से कम ) ।
                                    </p>
                                    <p style={{ color: "black", fontSize: "16px" }}>
                                        2.पासपोर्ट या अन्य 2 कोई भी पहचान पत्र (200 KB- 1024KB) ।
                                    </p>
                                </div>
                                <div>
                                    <h3 style={{ color: "black" }}>चरित्र सत्यापन हेतु  शुल्क:</h3>
                                </div>
                                <div className="mt-1">
                                    <p style={{ color: "black", fontSize: "16px" }}>
                                        1.बीपीएल कार्डधारी आवेदक को ये प्रमाण पत्र निशुल्क दिया जावेगा इसके लिए आवेदक को   समग्र आई. डी इंद्राज करनी होगी ।
                                    </p>
                                    <p style={{ color: "black", fontSize: "16px" }}>
                                        2.अन्य आवेदक (बीपीएल के अतिरिक्त) हेतु शुल्क-
                                    </p>
                                </div>
                                <div>
                                    <p style={{ color: "black", fontSize: "16px" }}>* यदि प्रकरण एक ही थाना क्षेत्र का तो रूपये 100/- का शुल्क ,</p>
                                    <p style={{ color: "black", fontSize: "16px" }}>* यदि प्रकरण एक ही जिले के एक से अधिक थाने का है तो रूपये 200/-- का शुल्क ,</p>
                                    <p style={{ color: "black", fontSize: "16px" }}>* यदि प्रकरण एक से अधिक जिले का है तो रूपये 400/- का शुल्क ,</p>
                                    <p style={{ color: "black", fontSize: "16px" }}>* यदि प्रकरण एक ही थाना क्षेत्र का तो रूपये 100/- का शुल्क ,  उक्त शुल्क का भुगतान आवेदक द्वारा Online Payment ( UPI, Net banking, Credit/Debit Card  )  के माध्यम से किया जा सकता है ।</p>
                                    <p style={{ color: "black", fontSize: "16px" }}>* सेवा का उपयोग करने के लिये “yes" पर क्लिक करेँ ।</p>
                                </div>
                                <Button variant="outlined" onClick={() => navigate("/characterverification/personInfo")} >yes</Button>
                                <Button variant="outlined" style={{ borderColor: "red", color: "red" }} className="m-2">No</Button>
                            </Paper>

                        </>
                    ) : (
                        <p>loading...</p>
                    )
                    }

                </Container>
            </div>
        </>
    )
}