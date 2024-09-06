import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { ADDSTUDENTINPUT } from '../../constants/AddStudent'

// Define the initial state using that type
const initialState:STUDENTSTATE  = {
  addStudentForm: ADDSTUDENTINPUT,
  currentFormIndex: 0
}

export const addStudentSlice = createSlice({
  name: 'addStudent',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateAddStudentForm: (state, action: PayloadAction<any>) => {
      const {ele, value} = action.payload;
      let error = '';
      if (ele.name.toLowerCase().includes('name')) {
        error = value.length < 3 ? `${ele.placeholder} must be at least 3 characters` : ''
      } else if (ele.name.toLowerCase() === 'email') {
        // Email validation regex
        const isValidEmail = /\S+@\S+\.\S+/.test(value);
        error = isValidEmail ? '' : 'Invalid email address'
      } else if (ele.name.toLowerCase() === 'password') {
        error = value.length < 6 ? 'Password must be at least 6 characters' : ''
      } else if (ele.name.toLowerCase() === 'password') {
        error = value.length < 10 ? 'Password must be at least 6 characters' : ''
      } else if (ele.name.toLowerCase() === 'mobile_no' || ele.name.toLowerCase() === 'parent_mobile_no') {
        error = value.length < 10 ? 'Please enter a valid mobile number' : ''
      }
    state.addStudentForm.forEach((element: ADDSTUDENTINPUTFORM, index: number) => {
        if (index === state.currentFormIndex) {
          element.formList.forEach((item: ADDSTUDENTFORM) => {
            if (item.id === action.payload.ele.id) {
              item.value = action.payload.value;
              item.error = error;
            }
          });
        }
      });
    },
    updateFormIndex:(state, action:PayloadAction<any>) => {
      state.currentFormIndex += action.payload.incrementBy
    },
    clearFormIndex:(state) => {
      state.currentFormIndex = 0;
    },
    clearFormState:(state) => {
      state.addStudentForm= ADDSTUDENTINPUT;
      state.currentFormIndex= 0;
    }
  },
})

export const { updateAddStudentForm, updateFormIndex, clearFormIndex,clearFormState } = addStudentSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectStudentForm = (state:RootState) => state.addStudentReducer.addStudentForm;
export const selectStudentFormCurrentIndex = (state: RootState) => state.addStudentReducer.currentFormIndex;

export default addStudentSlice.reducer