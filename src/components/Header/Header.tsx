import React from "react";
import './Header.scss';
import Button from "../Button/Button";
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { HeaderMenu } from './../../constants/DropdownMenu';
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { isLogedInUser } from "../../store/reducers/authenticationSlice";
import { useSelector } from "react-redux";


export const Header: React.FC<any> = ({onClick}) => {

  const navigate = useNavigate();
  const isLoggedInUser = useSelector(isLogedInUser)


  const handleClickLogin =()=>{
    navigate('/login')
  }

  const handleClickRegister=()=>{
    navigate('/registration');
  }

  const handleDropdownClick =() => {
   console.log('handleDropdownClick')
  }



    return (
    <div>
      
        <header className="header">Header
        <div className="container">
        
       <div className="app--title">
       <GiHamburgerMenu  style={{color:'white',fontSize:'40px',cursor: 'pointer'}}  onClick={onClick} /> <h1 style={{color:'white'}}>Company Name</h1>
       
       </div>
        { isLoggedInUser ?
        <DropdownMenu name={'hjsfgdj'} list={HeaderMenu} onClick={handleDropdownClick}></DropdownMenu>
         :
        <div className="buttonContainer">
        <Button name={'Login'} customClass={'header__button'} disabled={false} onClick={handleClickLogin}></Button>
        <Button name={'Register'} customClass={'header__button'} disabled={false}
        onClick={handleClickRegister}
         ></Button>
        </div>}

        </div>
        </header>
    </div>
  )
}