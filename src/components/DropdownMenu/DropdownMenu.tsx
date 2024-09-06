import React from 'react';
// import loginImg from '../../assets/login.jpg';

interface DropdownProps {
  name:string;
 list: any;
 onClick:Function;
}
const DropdownMenu: React.FC<DropdownProps> = ({name, list, onClick}) => {
  return (
    <div className="dropdown">
        {/* <img className="loginImg"  data-bs-toggle="dropdown"  src={loginImg} alt="loginImg" /> */}
        <ul className="dropdown-menu" >
       { list.map((ele: any, index:number) => <li key={index}><span className="dropdown-item" onClick={() => onClick(ele)}>{ele.name}</span></li>)}
        </ul>
      </div>
  );
}

export default DropdownMenu;
