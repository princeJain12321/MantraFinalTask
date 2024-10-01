import React,{useState} from "react";
import {  BiWorld } from "react-icons/bi";
import { MdDoorFront } from 'react-icons/md';
import { FcMultipleDevices } from "react-icons/fc";
import { GiDoorWatcher } from "react-icons/gi";
import { FaDoorOpen } from "react-icons/fa";
import { GiExitDoor } from "react-icons/gi";
import { BsDoorOpen } from "react-icons/bs";
import { GiHobbitDoor } from "react-icons/gi";
// import { FaTimes } from 'react-icons/fa';
import { IoIosAlarm } from "react-icons/io";
import { IoMdAlarm } from "react-icons/io";
import { GiSecretDoor } from "react-icons/gi";
import { BiSolidDoorOpen } from "react-icons/bi";
import { GoDeviceDesktop } from "react-icons/go";
import { TiDeviceDesktop } from "react-icons/ti";
// import { MdRestartAlt } from "react-icons/md";
import { MdOutlineWifiProtectedSetup } from "react-icons/md";


function Cards(){
    const [hoveredCard,setHoveredCard]=useState(null)
    const [cards] = useState([
        {
          id:1,
          title: 'All',
         img: <BiWorld className='iconi' size={23} /> ,
          shadow: 'inset .8em 0em #C3E6F0',
          color: 'linear-gradient(to right,#C3E6F0,#F1F9FB)',
        },
        {
          id:2,
          title: 'Back to Normal from Panic',
          img: <FaDoorOpen  className='iconi' size={25}/> ,
          shadow: 'inset .8em 0em #B3C8F0',
          color: 'linear-gradient(to right,#B3C8F0,#F1F9FB)',
        },
        {
          id:3,
          title: 'Device Tempered',
          img: <FcMultipleDevices className='iconi' size={25} /> ,
          shadow: 'inset .8em 0em #C5766F',
          color: 'linear-gradient(to right,#C5766F,#EABDBA)',
        },
        {
          id:4,
          title: 'Door Back To Normal after Alert',
          img: <GiDoorWatcher  className='iconi' size={25}/> ,      
          shadow: 'inset .8em 0em #B3C8F0',
          color: 'linear-gradient(to right,#B3C8F0,#F1F9FB)',
        },
        {
          id:5,
          title: 'Door Close',
          img: <GiExitDoor  className='iconi' size={25} /> ,
          shadow: 'inset .8em 0em #B3C8F0',
          color: 'linear-gradient(to right,#B3C8F0,#F1F9FB)',
        },
        {
          id:6,
          title: 'Door Force Open',
          img: <MdDoorFront  className='iconi' size={25}  /> ,
          shadow: 'inset .8em 0em #C5766F',
          color: 'linear-gradient(to right,#C5766F,#EABDBA)',
        },
        {
          id:7,
          title: 'Door Maintenance Completed',
          shadow: 'inset .8em 0em white',
        },
        {
          id:8,
          title: 'Door Maintenance Started',
          shadow: 'inset .8em 0em white',
        },
        {
          id:9,
          title: 'Door Manually Unlocked',
          shadow: 'inset .8em 0em white',
        },
        {
          id:10,
          title: 'Door Open' ,
          img: <BsDoorOpen className='iconi' size={23}/> ,     
          shadow: 'inset .8em 0em #B3C8F0',
          color: 'linear-gradient(to right,#B3C8F0,#F1F9FB)',
        },
        {
          id:11,
          title: 'Door Open Too Long ',
          img: <GiHobbitDoor className='iconi' size={23} /> ,
          shadow: 'inset .8em 0em #C5766F',
          color: 'linear-gradient(to right,#C5766F,#EABDBA)',
        },
        {
          id:12,
          title: 'Exit Button (Rex) Pressed   ',
          // img: <FaTimes className='iconi' size={25} /> ,
          shadow: 'inset .8em 0em #E7B9F3',
          color: 'linear-gradient(to right,#E7B9F3,#F3D7FB)',
    
        },
        {
          id:13,
          title: 'Fire Alarm Off',
          img: <IoIosAlarm  className='iconi' size={24} /> ,
          shadow: 'inset .8em 0em #F8F8A6',
          color: 'linear-gradient(to right,#F8F8A6,#FAFACF)',
        
        },
        {
          id:14,
          title: 'Fire Alarm On',
          img: <IoMdAlarm  className='iconi' size={24} /> ,
          shadow: 'inset .8em 0em #C5766F',
          color: 'linear-gradient(to right,#C5766F,#EABDBA)',
        },
        {
          id:15,
          title: 'Manual Door Disabled ',
          img: <GiSecretDoor  className='iconi' size={23} />,
          shadow: 'inset .8em 0em #C5766F',
          color: 'linear-gradient(to right,#C5766F,#EABDBA)',
        },
        {
          id:16,
          title: 'Manual Emergency Release',
          img: <BiSolidDoorOpen  className='iconi' size={25} /> ,
          shadow: 'inset .8em 0em #C5766F',
          color: 'linear-gradient(to right,#C5766F,#EABDBA)',
        },
        {
          id:17,
          title: 'Manual Station Activated',
          shadow: 'inset .8em 0em white',
        },
        {
          id:18,
          title: 'Manual Station Reverted ',
          shadow: 'inset .8em 0em white',
        },
        {
          id:19,
          title: 'Offline Device',
          img: <GoDeviceDesktop  className='iconi' size={25} /> ,
          shadow: 'inset .8em 0em #C5766F',
          color: 'linear-gradient(to right,#C5766F,#EABDBA)',
        },
        {
          id:20,
          title: 'Online Device',
          img: <TiDeviceDesktop  className='iconi'  size={25}/> ,
          shadow: 'inset .8em 0em #E7B9F3',
          color: 'linear-gradient(to right,#E7B9F3,#F3D7FB)',
        },
    
      ])
      return(
        <div>
            <div className='cards'>
            {cards.map((card ,i) =>  ( 
              <div key={i} className='card' 
              onMouseOver={() => setHoveredCard(card.id)}
              onMouseOut={() => setHoveredCard(null)}
               style={{  boxShadow: card.shadow , 
                background: hoveredCard === card.id ? card.color : 'white', 
                 
             }}
             >
                <h6 className='title'  >{card.title}</h6>             
                <div className='sec'>              
                    <h3 className='zero'> 
                      <p>{card.img}</p>
                      0
                  </h3>
                  </div>
                  <div className='last'
                  onMouseOver={() => setHoveredCard(card.id)}
                  onMouseOut={() => setHoveredCard(null)}
                   style={{background: hoveredCard === card.id ? card.color : 'lightgrey',  
                 }}>
                    <span className='restart'> <MdOutlineWifiProtectedSetup /></span>
                  <button className="button" >view</button>
                    </div>
                </div>
            ))}
          </div>
        </div>
      );
 }
 export default Cards;