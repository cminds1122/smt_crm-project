import React, { useEffect, useMemo, useRef, useState } from "react";
import "./App.scss";
import AppRoutes from "./routers/AppRoutes";
import { useSelector } from "react-redux";
import { isLogedInUser } from "./store/reducers/authenticationSlice";
// import { type } from './store/store';



function App() {
  const isLoggedInUser = useSelector(isLogedInUser)

  // const [count, setCount]= useState(0)
  // const [input, setInput]= useState(0)
  // const inputRef = useRef(null);

  // useEffect(()=>{
  //   console.log('useEffect')
  // })

  // const handleChange = () => {
  //   console.log('handleChange')
  //   setCount(count => count+1)
  //   // setCount(count => count+1)
  // }

  // const cube = (value:number) => {
  //   console.log('CUre called')
  //   return Math.pow(value, 3)
  // }

  // const handleInputChange = (e:any) => {
  //     console.log('handleInputChange')
  //     setInput(e.target.value)
  // }
// const result = cube(input);
  // const result = useMemo(() => cube(input), [input])

  return (
    <>
      <AppRoutes isLoggedIn={isLoggedInUser}  />
      {/* <input type='text' onChange={handleInputChange}/>
      <h1>Cube : {result}</h1>
      <div>count: {count}</div>
      <button onClick={handleChange}>Change</button>
      <br/>
      <input type='text' ref={inputRef} /> */}

    </>
  );
}

export default App;
