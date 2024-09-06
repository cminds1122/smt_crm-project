import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { ADDTEACHERINPUT } from '../../constants/AddTeacher'

// Define the initial state using that type
const initialState:TEACHERSTATE  = {
  addTeacherForm: ADDTEACHERINPUT,
  currentFormIndex: 0
}

export const addTeacherSlice = createSlice({
  name: 'addTeacher',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateAddTeacherForm: (state, action: PayloadAction<any>) => {
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
    state.addTeacherForm.forEach((element: TEACHERINPUTFORM, index: number) => {
        if (index === state.currentFormIndex) {
          element.formList.forEach((item: TEACHERFORM) => {
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
        state.addTeacherForm= ADDTEACHERINPUT;
        state.currentFormIndex= 0;
    }
  },
})

export const { updateAddTeacherForm, updateFormIndex, clearFormIndex,clearFormState } = addTeacherSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTeacherForm = (state:RootState) => state.addTeacherReducer.addTeacherForm;
export const selectTeacherFormCurrentIndex = (state: RootState) => state.addTeacherReducer.currentFormIndex;

export default addTeacherSlice.reducer