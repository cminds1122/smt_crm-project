// reducers/index.ts
import { combineReducers } from 'redux';
import addStudentReducer from '../reducers/addStudentSlice';
import authenticationReducer from '../reducers/authenticationSlice';
import addTeacherReducer from '../reducers/addTeacherSlice';

const rootReducer = combineReducers({
  addStudentReducer: addStudentReducer,
  addTeacherReducer: addTeacherReducer,
  authenticationReducer: authenticationReducer,
});

export default rootReducer;
