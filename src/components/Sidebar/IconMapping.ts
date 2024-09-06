import { FaHome } from 'react-icons/fa';
import { MdCalendarMonth } from 'react-icons/md';
import { RiUserAddFill } from 'react-icons/ri';
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { HiMiniUsers } from "react-icons/hi2";
import {
    BiNews,
    BiSolidCalendarEdit,
    BiSolidSpreadsheet,
  } from "react-icons/bi";

const iconMapping = {
  FaHome,
  LiaChalkboardTeacherSolid,
  RiUserAddFill,
  HiMiniUsers,
  MdCalendarMonth,
  BiSolidCalendarEdit,
  BiSolidSpreadsheet,
  BiNews,
};

export default iconMapping;
export type IconName = keyof typeof iconMapping;