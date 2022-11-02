import "../NestedRoutes.css";
import {NavLink} from "react-router-dom";
import{Route,Routes,BrowserRouter,Outlet} from "react-router-dom";
function Courses()
{
    return(
        <div className="compo">
          <h2> You are in  Courses Page</h2>
         <h3>URL : localhost:3000/courses</h3>
         <div className="nestedcompo">
            <ul>
                <li> <NavLink to="front" style={({isActive})=>isActive?{color:"red",textDecoration:"none"}:{color:"black"}}>Front-End Course</NavLink></li>
                <li> <NavLink to="back" style={({isActive})=>isActive?{color:"red",textDecoration:"none"}:{color:"black"}}>Back-End Course</NavLink></li>
            </ul>
                     
         </div>
         <Outlet/>
         
        </div> 
    )
}
export default Courses;