import React from "react";
// import { RiDashboard3Fill } from "react-icons/ri";
 
function Dashboards(){
return(
    <div className='Dashboard'>
                <ul >
                  <h3 className='head'> 
                    {/* <RiDashboard3Fill className='ic' /> &nbsp; */}
                     Dashboard 
                    {/* <button className='btn'>&lt;</button> */}
                    </h3>
                  <li>Consolidated Dashboard</li>
                  <li>Card Event Dashboard</li>
                  <li>Device Health Monitor</li>
                  <li>Device Alert Dashboard</li>
                  <li>Employee Dashboard</li>
                  <li>Entity Footfall Monitor</li>
                  <li>Head Count Dashboard</li>
                  <li>Notification Dashboard</li>
                  <li>VMS Dashboard</li>
                  <li>TAP Dashboard</li>
                  <li>System Alert Dashboard</li>
                  </ul>    
          </div>
);
}
export default Dashboards;