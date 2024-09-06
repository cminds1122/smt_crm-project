import React, { useState } from "react";
import "./ForgetPassword.scss";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { GrMail } from "react-icons/gr";
import { Header } from "../Header/Header";

function ForgetPassword() {
  const navigate = useNavigate();
  const [forgetpassworDto, setForgetpasswordDto] = useState({
    email: "",
    emailError: "",
  });
  const handleUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let error = "";

    if (name === "email" && value !== "") {
      const isValid = /\S+@\S+\.\S+/.test(value);
      // const isValid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)
      error = isValid ? "" : "Please Enter Valid Email Id";
    }

    setForgetpasswordDto((prev) => ({
      ...prev,
      [name]: value,
      emailError: error,
    }));
  };

  const isBtnDisabled = (): boolean => {
    return !forgetpassworDto.email || !!forgetpassworDto.emailError;
  };

  const handleData = (e: any) => {
    e.preventDefault();
    navigate("/otp-validation/2");
    console.log(forgetpassworDto)
  };

  return (
   <>
    <Header />
    <div className="forgetpassword__container">
       
      <div className="forgetpassword__wrapper">
        <form onSubmit={handleData}>
          <h2 className="text-center mb-5">Forgot Password</h2>
          <div className="mt-4">
            <div className="input-group">
              <span
                className={`input-group-text ${
                  forgetpassworDto.emailError ? "  login__invalid" : ""
                }  `}
                id="basic-addon1"
              >
                <GrMail className="forgetpassword__usr--icon" />
              </span>
              <input
                name="email"
                type="text"
                className={`form-control ${
                  forgetpassworDto.emailError ? "  login__invalid" : ""
                }`}
                placeholder="Eamil"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={handleUserData}
              />
            </div>
            {forgetpassworDto.emailError && (
              <div
                id="emailHelp"
                className="ms-5 ps-3 form-text text-danger login__email--credentials"
              >
                {forgetpassworDto.emailError}
              </div>
            )}

            <Button
              name={"Submit"}
              btnType="large"
              disabled={isBtnDisabled()}
              customClass={"mt-4"}
            ></Button>
          </div>
        </form>
      </div>
    </div>
   </>
  );
}

export default ForgetPassword;
