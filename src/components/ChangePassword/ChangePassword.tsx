import React, { useState } from "react";
import "./ChangePassword.scss";
import Button from "../Button/Button";
import { IoIosLock } from "react-icons/io";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Header } from "../Header/Header";

function ChangePassword() {
  const [hidePassword, sethidePassword] = useState(false);
  const [hideConfirmPassword, sethideConfirmPassword] = useState(false);
  const [changepasswordDto, setChangepasswordDto] = useState({
    password: "",
    confirmpassword: "",
    confirmpasswordError: "",
  });

  const handleUserData = (event: any) => {
    const { name, value } = event.target;

    setChangepasswordDto((prev) => ({
      ...prev,
      [name]: value,
    }));
    isPasswordMatch();
  };

  const handlePassword = () => {
    sethidePassword(!hidePassword);
  };
  const handleConfirmPassword = () => {
    sethideConfirmPassword(!hideConfirmPassword);
  };


  const isBtnDisabled = () => {
    return (
      !changepasswordDto.password ||
      !changepasswordDto.confirmpassword ||
      changepasswordDto.password !== changepasswordDto.confirmpassword
    );
  };

  const handleData = (e: any) => {
    e.preventDefault();
    console.log(changepasswordDto.password);
  };

  const isPasswordMatch = () => {
    if (changepasswordDto.confirmpassword !== "" && changepasswordDto.password !== "" ) {
      if (changepasswordDto.confirmpassword === changepasswordDto.password) {
       
        setChangepasswordDto((prev) => ({
          ...prev,
          confirmpasswordError: "",
        }));
      } else {
        setChangepasswordDto((prev) => ({
          ...prev,
          confirmpasswordError: "Password and Confirm Password should match",
        }));
      }
    }
  };

  return (
   <>
    <Header />
    <div className="changepassword__container">
      <div className="changepassword__wrapper">
        <form onSubmit={handleData}>
          <h1 className="text-center">Change Password</h1>
          <div className="mt-4">
            <div className="input-group flex-nowrap p-2">
              <span className="input-group-text" id="addon-wrapping">
                {" "}
                 <IoIosLock className="changepassword__user--icon"/>
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
                  <IoEyeOff className="changepassword__user--icon" />
                ) : (
                  <IoEye  className="changepassword__user--icon"/>
                )}{" "}
              </span>
            </div>

            <div className="input-group flex-nowrap p-2">
              <span
                className={`input-group-text ${
                  changepasswordDto.confirmpasswordError
                    ? "  changepassword__invalid"
                    : ""
                }  `}
                id="addon-wrapping"
              >
                {" "}
                 <IoIosLock className="changepassword__user--icon"/>
              </span>
              <input
                type={hideConfirmPassword ? "text" : "password"}
                className={`form-control ${
                  changepasswordDto.confirmpasswordError
                    ? "  login__invalid"
                    : ""
                }`}
                placeholder="Confirm Password"
                aria-describedby="addon-wrapping"
                name="confirmpassword"
                onChange={handleUserData}
              />
              <span
                className={`input-group-text ${
                  changepasswordDto.confirmpasswordError
                    ? "  changepassword__invalid"
                    : ""
                }  `}
                id="addon-wrapping"
                onClick={handleConfirmPassword}
              >
                {!hideConfirmPassword ? (
                  <IoEyeOff className="changepassword__user--icon" />
                ) : (
                  <IoEye  className="changepassword__user--icon"/>
                )}{" "}
              </span>
            </div>
            {changepasswordDto.confirmpasswordError && (
              <div
                className="ms-1 ps-3 form-text text-danger login__email--credentials"
              >
                {changepasswordDto.confirmpasswordError}
              </div>
            )}
          </div>
          <Button
            name={"Submit"}
            disabled={isBtnDisabled()}
            btnType="large"
            customClass={"mt-3"}
          ></Button>
        </form>
      </div>
    </div>
   </>
  );
}

export default ChangePassword;
