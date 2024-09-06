import React from 'react';
import './Button.scss'
interface ButtonProps {
  name:string;
  disabled:boolean;
  customClass?:string;
  btnType?: 'small' | 'large' | 'medium';
  whichBtn?: 'primery' | 'secondary'
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({name, disabled=true, customClass, btnType='', onClick, whichBtn='primery'}) => {
  return (
    <div className='button'>
      <button type="submit" className={`button__${whichBtn} button__${btnType} ${customClass}`} disabled={disabled} onClick={onClick}>{name}</button>
    </div>
  );
}

export default Button;
