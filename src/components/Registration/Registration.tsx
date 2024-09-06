import React from "react";
import "./Registration.scss";
import Button from "../Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiCalendar, BiSolidUser, BiSolidPhone } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { IoIosLock } from "react-icons/io";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Header } from "../Header/Header";



function Registration() {
    const [hidePassword, sethidePassword] = useState(false);
    const [loginDto, setLoginDto] = useState({
      name: "",
      phonenumber:"",
      email: "",
      password: "",
      date:"",
      emailError: "",
    });

    const [mobile, setMobile] = useState();
    const navigate = useNavigate();
    const handleUserData = (event: any) => {
      const { name, value } = event.target;
     
      let error = "";

      if(name === 'phonenumber') {
        setMobile(value.replace(/\D/g, ""))
      }
      if (name === "email" && value !== '') {
        const isValidEmail = /\S+@\S+\.\S+/.test(value);
        error = isValidEmail ? "" : "Please Enter Valid Email Id";
      }
      setLoginDto((prev: any) => {
        return { ...prev, [name]: value, emailError: error};
      });
    };
    const handleData = (e: any) => {
      e.preventDefault();
      console.log(loginDto);
    };
    const handlePassword = () => {
      sethidePassword(!hidePassword);
    };
    const isBtnDisabled = (): boolean => {
      return ( 
      ((loginDto.emailError)=== '' ? Boolean(!loginDto.name || !loginDto.phonenumber || !(loginDto.phonenumber.length===10) || !loginDto.email || !loginDto.password || !loginDto.date) : true))
    }
 
  
    const handleRegistration = ()=>{
       navigate('/otp-validation/1')
    }

  return (
    <>
     <Header />
    <div className="registration__container">
      <div className="registration__wrapper">
        <form onSubmit={handleData}>
          <h2 className="text-center m-4">Registration</h2>
          <div className="m-4">
            <div className="input-group flex-nowrap p-2 ">
              <span className={`input-group-text`} id="addon-wrapping">
                <BiSolidUser className="registration__usr--icon" />
              </span>
              <input
                type="text"
                name="name"
                className={`form-control`}
                placeholder="Name"
                aria-describedby="addon-wrapping"
                onChange={handleUserData}
              />
            </div>
            <div className="input-group flex-nowrap p-2 ">
              <span className="input-group-text"
              >
                <BiSolidPhone   className="registration__usr--icon"/>
              </span>
              <input
                type='tel'
                name="phonenumber"
                className="form-control"
                value={mobile}
                placeholder="Mobile Number"
                aria-describedby="addon-wrapping"
                onChange={handleUserData}
                minLength={10} 
                maxLength={10}
                required
                
              />
            </div>
            <div className="input-group flex-nowrap p-2 ">
              <span className={`input-group-text ${loginDto.emailError ? '  registration__invalid' : ''}  `} id="addon-wrapping">
                <GrMail className="registration__usr--icon" />
              </span>
              <input
                type="text"
                name="email"
                className={`form-control ${loginDto.emailError ? '  registration__invalid' : ''}`}
                placeholder="Email"
                aria-describedby="addon-wrapping"
                onChange={handleUserData}
              />
            </div>
            {loginDto.emailError && (
                  <div id="emailHelp" className="ms-5 ps-3 form-text text-danger login__email--credentials">
                    {loginDto.emailError}
                  </div>
                )}

            <div className="input-group flex-nowrap p-2 ">
              <span className={`input-group-text`} id="addon-wrapping">
                <BiCalendar className="registration__usr--icon" />
              </span>
              <input
                type="date"
                name="date"
                className={`form-control`}
                aria-describedby="addon-wrapping"
                onChange={handleUserData}
              />
            </div>

            <div className="input-group flex-nowrap p-2">
              <span className="input-group-text" id="addon-wrapping">
                {" "}
                <IoIosLock className="registration__usr--icon"/>
              </span>
              <input
                type={hidePassword ? "text" : "password"}
                className="form-control"
                placeholder="Password"
                aria-describedby="addon-wrapping"
                name="password"
                onChange={handleUserData}
              />
              <span
                className="input-group-text"
                id="addon-wrapping"
                onClick={handlePassword}
              >
                {!hidePassword ? (
                  <IoEyeOff className="registration__usr--icon" />
                ) : (
                  <IoEye  className="registration__usr--icon"/>
                )}{" "}
              </span>
            </div>
            <Button name={"Submit"} disabled={isBtnDisabled()} btnType={"large"} customClass={'p-2 '} onClick={handleRegistration}></Button>
          </div>
          
        </form>
      </div>
    </div>
    </>
  );
}

export default Registration;
