import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddStudent from '../components/AddStudent/AddStudent';
import StudentDetails from '../components/StudentDetails/StudentDetails';
import Login from '../components/Login/Login';
import Registration from '../components/Registration/Registration';
import OtpValidation from '../components/Otp/OtpValidation';
import ForgetPassword from '../components/ForgetPassword/ForgetPassword';
import ChangePassword from '../components/ChangePassword/ChangePassword';
import Layout from '../components/Layout/Layout';
import ListView from '../components/ListView/ListView';

interface Props {
  isLoggedIn: boolean;
}

const AppRoutes: React.FC<Props> = ({ isLoggedIn }) => {
  
  console.log('isLoggedIn',isLoggedIn)
  return (
    <Router>
      <Routes>
        <Route path="/" element={!isLoggedIn ? <Login  /> : <Layout> <ListView /></Layout>} />
        
        <Route path="/add-student" element={<Layout> <AddStudent /></Layout>} />
        <Route path="/student-details" element={<StudentDetails />} />
        <Route path="login" element={<Login />} />
        <Route path='registration' element={<Registration />}/>
        <Route path='otp-validation/:id' element={<OtpValidation />}/>
        <Route path='forget-password' element={<ForgetPassword />}/>
        <Route path='change-password' element={<ChangePassword />}/>
        <Route path="/teachers" element={<div>Teachers Page</div>} />
        <Route path="/students" element={<div>Students Page</div>} />
        <Route path="/calendar" element={<div>Calendar Page</div>} />
        <Route path="/exam-list" element={<div>Exam List Page</div>} />
        <Route path="/holiday" element={<div>Holiday Page</div>} />
        <Route path="/event" element={<div>Event Page</div>} />
        {/* <Route path='/list-view' element={<ListView/>}/> */}
          {/*<Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
