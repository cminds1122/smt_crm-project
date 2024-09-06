
  interface ADDSTUDENTFORM {
    id:number;
    placeholder: string;
    value: string;
    name: string;
    type: string;
    error:string;
    minLength:number;
    maxLength:number;
  }

  interface ADDSTUDENTINPUTFORM {
    heading: string;
    formList: Array<ADDSTUDENTFORM>
  }
  interface STUDENTSTATE {
    addStudentForm: Array<ADDSTUDENTINPUTFORM>;
    currentFormIndex:number
  }

  interface UPDATE_STUDENT_FORM_PAYLOAD {
    
  }