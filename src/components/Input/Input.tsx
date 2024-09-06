import React from 'react';

interface InputProps {
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minLength: number;
  maxLength: number;
  error: string;
}

const Input: React.FC<InputProps> = ({ type, value, onChange, placeholder, minLength, maxLength,error }) => {
  if(type === 'file') {
    value = ''
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value:any = event.target.value
    // if(type === 'file') {
    //   const files = event.target.files;
    // if (files && files.length > 0) {
    //   const file = files[0];
    //   console.log(file)
    //   value = file.name;
    // } 
    // }
    onChange(value);
  };

  const getClass = () => {
    return error ? 'form-control is-invalid' : 'form-control'
  }

  return (
    <div className="mb-3 floating-label">
      <label htmlFor="exampleInputEmail1" className="form-label "><h6>{placeholder}:</h6></label>
      <input type={type} placeholder=" " value={value} onChange={handleChange} minLength={minLength} maxLength={maxLength} className={getClass()} id="exampleInputEmail1" aria-describedby="emailHelp"></input>
      {error && <div id="emailHelp" className="form-text text-danger">{error}</div>}
    </div>
  );
};

export default Input;

