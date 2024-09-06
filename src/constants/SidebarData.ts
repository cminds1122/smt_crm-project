const SidebarData = [
  {
    icons: "FaHome",
    name: "Dashboard",
    path: "#",
    isActive:true,
    id:'dashboard'
  },
  {
    icons: "LiaChalkboardTeacherSolid",
    name: "Teachers",
    path: "",
    isActive:false,
    id:'teacher',
    children: [
      {
        name: "Add Teacher",
        path: "/add-teacher",
        id:'addTeacher',
        isActive:false,
      },
      {
        name: "View Teacher",
        path: "/view-teacher",
        id:'viewTeacher',
        isActive:false,
      }
    ],
  },
  {
    icons: "RiUserAddFill",
    name: "Students",
    path: "#",
    isActive:false,
    id:'students',
    // children: [
    //   {
    //     name: "Student 1",
    //     path: "#",
    //   },
    //   {
    //     name: "Student 2",
    //     path: "#",
    //   },
    //   {
    //     name: "Student 3",
    //     path: "#",
    //   },
    // ],
  },
  // {
  //   icons: "HiMiniUsers",
  //   name: "Parents",
  //   path: "#",
  //   children: [
  //     {
  //       name: "Parent 1",
  //       path: "#",
  //     },
  //     {
  //       name: "Parent 2",
  //       path: "#",
  //     },
  //     {
  //       name: "Parent 3",
  //       path: "#",
  //     },
  //     {
  //       name: "Parent 1",
  //       path: "#",
  //     },
  //     {
  //       name: "Parent 2",
  //       path: "#",
  //     },
  //     {
  //       name: "Parent 3",
  //       path: "#",
  //     },
  //     {
  //       name: "Parent 1",
  //       path: "#",
  //     },
  //     {
  //       name: "Parent 2",
  //       path: "#",
  //     },
  //     {
  //       name: "Parent 3",
  //       path: "#",
  //     },
  //   ],
  // },
  {
    icons: "MdCalendarMonth",
    name: "Calendar",
    path: "#",
    isActive:false,
    id:'calander',
  },
  {
    icons: "BiSolidCalendarEdit",
    name: "Exam List",
    path: "#",
    isActive:false,
    id:'examList',
  },
  {
    icons: "BiSolidSpreadsheet",
    name: "Holiday",
    path: "#",
    isActive:false,
    id:'holiday',
  },
  {
    icons: "BiNews",
    name: "Event",
    path: "#",
    isActive:false,
    id:'event',
  },
];

export default SidebarData;
