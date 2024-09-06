import React from "react";
import "./OtpValidation.scss";
import { useState } from "react";
import OtpInput from "react-otp-input";
import Button from "../Button/Button";
import { Header } from "../Header/Header";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function OtpValidation() {
  const [otp, setOtp] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
// console.log(id)
  const handleSubmit =(event:any) =>{
    event.preventDefault();
    console.log(otp)
    if(id === '2') {
      navigate('/change-password')
      // console.log(typeof(id))
      // console.log('change password')
    }
  }
   return (
    <>
      <Header></Header>
      <div className="otp__container">
        <div className="otp__wrapper">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center m-5">OTP </h1>
            <div className="m-5">
              <OtpInput
              inputType={"tel"}
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span> </span>}
                renderInput={(props) => (
                  <input {...props} className="otp__otp-input" />
                )}
              />
            </div>
            <Button
              name={"Validate"}
              disabled={otp.length !== 4}
              btnType='large'
              customClass={"otp__otp-button"}
            ></Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default OtpValidation;
