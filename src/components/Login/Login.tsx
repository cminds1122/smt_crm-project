import React from "react";
import "./Login.scss";
import { useState } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { GrMail } from "react-icons/gr";
import { IoIosLock } from "react-icons/io";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Header } from "../Header/Header";
import { setLoginState } from "../../store/reducers/authenticationSlice";
import { useDispatch } from "react-redux";

const Login:React.FC = () =>  {

const navigate = useNavigate();
const dispatch = useDispatch();

const handleForgetpassword=()=>{
   navigate('/forget-password')
}

  const [hidePassword, sethidePassword] = useState(false);
  const [loginDto, setLoginDto] = useState({
    email: "",
    password: "",
    emailError: "",
  });

  const handleUserData = (event: any) => {
    const { name, value } = event.target;
    let error = "";
    if (name === "email" && value !== '') {
      const isValidEmail = /\S+@\S+\.\S+/.test(value);
      error = isValidEmail ? "" : "Please Enter Valid Email Id";
    }
    setLoginDto((prev: any) => {
      return { ...prev, [name]: value, emailError: error };
    });
  };
  const handleData = (e: any) => {
    e.preventDefault();
    console.log(loginDto);
    dispatch(setLoginState({value: true}))

    // onLogin(true);
  };
  const handlePassword = () => {
    sethidePassword(!hidePassword);
  };
  const isBtnDisabled = (): boolean => {
    return loginDto.emailError === '' ? Boolean(!loginDto.email || !loginDto.password) : true
  }

  return (
    <>
    <Header />
      <div className="login__container">
        <div className="login__wrapper">
          <form onSubmit={handleData}>
            <h2 className="text-center">Login</h2>
            <div className="mt-4">
              <div className="input-group flex-nowrap p-2 ">
                <span className={`input-group-text ${loginDto.emailError ? '  login__invalid' : ''}  `} id="addon-wrapping">
                   <GrMail className="login__usr--icon" />
                </span>
                <input
                  type="text"
                  name="email"
                  className={`form-control ${loginDto.emailError ? '  login__invalid' : ''}`}
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
              <div className="input-group flex-nowrap p-2">
                <span className="input-group-text" id="addon-wrapping">
                   <IoIosLock  className="login__usr--icon"/>
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
                    <IoEyeOff className="login__usr--icon" />
                  ) : (
                    <IoEye  className="login__usr--icon"/>
                  )}{" "}
                </span>
              </div>
            </div>
            <Button
              name={"Login"}
              disabled={isBtnDisabled()}
              btnType='large'
            ></Button>

            <div className="  d-flex justify-content-between flex-row-reverse mb-3 pe-2 fw-bold">
              <span className="forgetPassword bd-highlight login__forget--password" onClick={handleForgetpassword}>
                Forget Password?
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
