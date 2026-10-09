import bcrypt from "bcrypt";
import { user } from "../Schema/userSchema.js";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import twilio from "twilio";
import { policeStation } from "../Schema/DepartmentSchema.js";
dotenv.config();
export async function saveUserData(req, res) {
    try {
        const { name, number, email, password, age, address, city } = req.body;
        if (!name || !number || !email || !password || !age || !city) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: "Please fill all required fields" });
        }

        const mobileNumber = Number(number);
        if (!Number.isFinite(mobileNumber) || String(number).length !== 10) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: "Please enter a valid 10 digit mobile number" });
        }

        const existingnumber = await user.findOne({ number: mobileNumber });
        const existingemail = await user.findOne({ email: email.toLowerCase() });
        if (existingnumber || existingemail) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: "Account already exists. Please log in" });
        }

        const otpdata = await userSendVerifyData(mobileNumber);
        const newpassword = bcrypt.hashSync(req.body.password, 12);
        const data = user({
            name,
            number: mobileNumber,
            email: email.toLowerCase(),
            password: newpassword,
            age: Number(age),
            address,
            city,
            verify: false,
            otp: otpdata,
        });
        const response = await data.save();
        return res.status(StatusCodes.CREATED).json({
            message: "Registration successful. OTP sent for verification.",
            user: response,
            ...(process.env.NODE_ENV !== "production" && { devOtp: otpdata }),
        });


    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();

    }

}
//sendverifyotp
const userSendVerifyData = async (number) => {
    const otp = String(Math.floor(1000 + Math.random() * 9000));
    const accountSid = process.env.ACCOUNTSID;
    const authToken = process.env.AUTHTOKEN;
    const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

    if (!accountSid || !authToken || !twilioPhoneNumber) {
        console.warn(`Twilio credentials missing. Development OTP for ${number}: ${otp}`);
        return otp;
    }

    try {
        const client = twilio(accountSid, authToken);
        const message = await client.messages.create({
            body: `We are always Protect you Verify ${otp}`,
            to: `+91${number}`,
            from: twilioPhoneNumber,
        });
        console.log(message.sid);
    } catch (error) {
        console.error("Failed to send OTP SMS:", error.message);
        if (process.env.NODE_ENV === "production") {
            throw error;
        }
        console.warn(`Development OTP for ${number}: ${otp}`);
    }

    return otp;
}
    
//verifyOtp
export async function verifyOtp(req,res)
{
    try 
    {
        const {number,otp}=req.body;
        // console.log(otp);
        const userData = await user.findOne({number:Number(number)});
        if(!userData)
        {
            return res.status(StatusCodes.NOT_FOUND)
                        .json({message:"User not found"});
        }
        if(!userData.verify && userData.otp===String(otp))
        {
            await user.updateOne({number:Number(number)},{$set:{verify:true}});
            return res.status(StatusCodes.OK)
                       .json({message:"OTP Verification Successful"});
        }
        else{
               return res.status(StatusCodes.UNAUTHORIZED)
                          .json({message:"Invalid Otp"})
        }
        
    } 
    catch (error) 
    {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}

export async function userLogin(req, res) {
    try {
        const users = await user.findOne({ number: req.body.number })
                .populate("vehiclecomplaints")
                .populate("generalThefts")
                .populate("kidnappingReport");
                //after some we change policestation byname 
        const data = await policeStation.find();
        if (users) {
            if (bcrypt.compareSync(req.body.password, users.password)) {
                // await users.populate('complaint');
                const token = jwt.sign({ userId: users.users_id }, 'sumit123');
                res.status(StatusCodes.OK).json({ 
                        token: token ,id:users._id,
                        vehiclecomplaints:users.vehiclecomplaints,
                        generalThefts:users.generalThefts,
                        kidnappingReport:users.kidnappingReport,
                        policeStation:data[0]?._id || null,

                    });
            }
            else {
                res.status(StatusCodes.BAD_REQUEST).json("Wrong Password..!");

            }
        }
        else {
            res.status(StatusCodes.BAD_REQUEST).json("Wrong Mobile Number");
        }

    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}
//update complaints
// export async function updateComplaintToUser(req,res)
// {
//       try 
//       {
//           await user.findByIdAndUpdate(req.params.id,{$push:{complaint:req.params.obj}});
//           res.status(StatusCodes.OK).json();
//       } 
//       catch (error)
//        {
//         console.log(error);
//         res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
        
//       }
// }
