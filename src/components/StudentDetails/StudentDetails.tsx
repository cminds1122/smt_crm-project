import React from 'react';
import { clearFormIndex, selectStudentForm } from '../../store/reducers/addStudentSlice';
import { RootState } from '../../store/store';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const StudentDetails = () => {
  const formData: Array<ADDSTUDENTINPUTFORM> = useSelector((state: RootState) => selectStudentForm(state));
  const navigate = useNavigate();
  const dispatch = useDispatch()

  
  const handleBtn = () => {
    dispatch(clearFormIndex())
    navigate(-1)
     
  }
  const renderList = (formData:any) => {
    return (
  <div className='container'>
    <h4>{formData.heading}</h4>
    <div className="">
     {formData.formList.map((element:any) => {
      return (
        <div key={element.id} className="">
          <span className='mr-2'>{`${element.placeholder}:`}</span>
          <span>{element.value}</span>
        </div>
      )
     })}
      </div>
  </div>
    )
  }
  return (
    <div >
        {formData.map(ele => {
          return renderList(ele);
        })}
          <div className="row">
        <div className="col">
          <Button name={'Edit'} disabled={false} btnType='large'  onClick={handleBtn} ></Button> 
        </div>
        <div className="col">
          <Button name={'Submit'} disabled={false} btnType='large' onClick={() => {console.log('aa')}}></Button>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;
