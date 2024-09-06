
interface TEACHERFORM {
    id:number;
    placeholder: string;
    value: string;
    name: string;
    type: string;
    error:string;
    minLength:number;
    maxLength:number;
  }

  interface TEACHERINPUTFORM {
    heading: string;
    formList: Array<TEACHERFORM>
  }
  interface TEACHERSTATE {
    addTeacherForm: Array<TEACHERINPUTFORM>;
    currentFormIndex:number
  }

  interface UPDATE_STUDENT_FORM_PAYLOAD {
    
  }