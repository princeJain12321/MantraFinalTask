import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { BsMenuButtonWide } from "react-icons/bs";
import { BiSolidUserBadge } from "react-icons/bi";
import { LuClock9 } from "react-icons/lu";
import { HiDeviceTablet } from "react-icons/hi2";
import { IoIosNotifications } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdAnalytics } from "react-icons/io";
import { FaBarsProgress } from "react-icons/fa6";
import { FaUserXmark } from "react-icons/fa6";

function Divv(){
    return(
    <div className="tittle">
    <ul typeof="none">
        <li><AiFillDashboard /></li>
        <li><BsMenuButtonWide /></li>
        <li><BiSolidUserBadge /></li>
        <li><LuClock9 /></li>
        <li><HiDeviceTablet /></li>
        <li><IoIosNotifications /></li>
        <li><FaUsers /></li>
        <li><GrTransaction /></li>
        <li><IoSettingsSharp /></li>
        <li><IoMdAnalytics/></li>
        <li><FaBarsProgress /></li>
        <li><FaUserXmark /></li>


    </ul>
    </div>
    );
}
export default Divv;