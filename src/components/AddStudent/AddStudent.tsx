import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { selectStudentForm, selectStudentFormCurrentIndex, updateAddStudentForm, updateFormIndex } from '../../store/reducers/addStudentSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


const AddStudent: React.FC = () => {

  const navigate = useNavigate();
    const formData = useSelector(selectStudentForm)
  const formIndex = useSelector(selectStudentFormCurrentIndex)
  const dispatch = useDispatch()

  
  const handleInputChange = (ele: ADDSTUDENTFORM, value: string) => {

    if (ele.type === 'tel') {
      value = value.replace(/\D/g, "")
    }
    dispatch(updateAddStudentForm({ele, value}))

  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // navigate('/student-details');
  };

  const handleBtnClick = () => {
    console.log(formIndex)
    if (formIndex === formData.length - 1) {
      navigate('/student-details');
    } else {
      dispatch(updateFormIndex({incrementBy: 1}))
    }
  }

  const renderInputList = (formElement: any) => {
    return (
      <>
        <h5>{formElement.heading}</h5>
        <div className='floating-form'>
          {formElement.formList.map((ele: any, index: number) => <Input key={index} type={ele.type} value={ele.value} maxLength={ele.maxLength} minLength={ele.minLength} onChange={(value) => handleInputChange(ele, value)} placeholder={ele.placeholder} error={ele.error} />)}
        </div>
      </>
    )
  }

  const isDisabled = () => {
     for (let array of formData[formIndex].formList) {
      if (array.value === '' || array.error !== '') {
        return true;
      }
     }
     return false;
  }

  const renderButton = () => {
    return (
      <div className="row">
        {formIndex > 0 && <div className="col">
          <Button name={'Back'} disabled={false} btnType='large'  onClick={() => dispatch(updateFormIndex({incrementBy: -1}))} ></Button> 
        </div>}
        <div className="col">
          <Button name={formIndex === formData.length - 1 ? 'Submit' : 'Next'} disabled={isDisabled()} btnType='large' onClick={handleBtnClick}></Button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className='container mt-5'>
        <h2 className='text-center'>Add Student</h2>
        <form onSubmit={handleSubmit}>
          {renderInputList(formData[formIndex])}
          {renderButton()}
        </form>
      </div>
    </div>

  );
};

export default AddStudent;
