import React from 'react';
import { HomeList } from '../../constants/homeList';
import { Card } from '../Card/Card';
import {useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/add-student');
  };

  return (
    <div>
     <div className='app__list'>
     {HomeList.map((element, index) => <Card key={index} title={element.name} onClick={handleClick}></Card>)}
     </div>
    </div>
  );
}

export default Home;
