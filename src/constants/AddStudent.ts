export const ADDSTUDENTINPUT: Array<ADDSTUDENTINPUTFORM> = [
    {
        heading: 'Student Details',
        formList: [
            {
                id:1,
                placeholder: 'First Name',
                value: '',
                name: 'firstName',
                type: 'text',
                error:'',
                minLength:3,
                maxLength:100
            },
            {
                id:2,
                placeholder: 'Last Name',
                value: '',
                name: 'lastName',
                type: 'text',
                error:'',
                minLength:3,
                maxLength:100
            },
            {
                id:3,
                placeholder: 'Email Id',
                value: '',
                name: 'email',
                type: 'email',
                error:'',
                minLength:3,
                maxLength:100
            },
            {
                id:4,
                placeholder: 'Date Of Birth',
                value: '',
                name: 'dob',
                type: 'date',
                error:'',
                minLength:3,
                maxLength:100
            },
            {
                id:5,
                placeholder: 'Mobile No',
                value: '',
                name: 'mobile_no',
                type: 'tel',
                error:'',
                minLength:10,
                maxLength:10
            },
            {
                id:6,
                placeholder: 'Parent Mobile No',
                value: '',
                name: 'parent_mobile_no',
                type: 'tel',
                error:'',
                minLength:10,
                maxLength:10
            },
            {
                id:7,
                placeholder: 'Grade',
                value: '',
                name: 'grade',
                type: 'number',
                error:'',
                minLength:0,
                maxLength:100
            },
            // {
            //     id:8,
            //     placeholder: 'Photo',
            //     value: '',
            //     name: 'photo',
            //     type: 'file',
            //     error:'',
            //     minLength:3,
            //     maxLength:100
            // }
        ]
    },
    {
        heading: 'Current Address',
        formList: [
            {
                id:1,
                placeholder: 'Address Line 1',
                value: '',
                name: 'address_L_1',
                type: 'text',
                error:'',
                minLength:3,
                maxLength:100
            },
            {
                id:3,
                placeholder: 'Pin Code',
                value: '',
                name: 'pin',
                type: 'number',
                error:'',
                minLength:6,
                maxLength:6
            },
            {
                id:4,
                placeholder: 'City',
                value: '',
                name: 'city',
                type: 'text',
                error:'',
                minLength:3,
                maxLength:100
            },
            {
                id:5,
                placeholder: 'State',
                value: '',
                name: 'state',
                type: 'text',
                error:'',
                minLength:3,
                maxLength:100
            },
            {
                id:6,
                placeholder: 'Country',
                value: 'India',
                name: 'country',
                type: 'text',
                error:'',
                minLength:3,
                maxLength:100
            }
        ]
    }
]