import "./NestedRoutes.css";
import {NavLink} from "react-router-dom";
import{Route,Routes,BrowserRouter} from "react-router-dom";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Front from "./Pages/Front";
import Back from "./Pages/Back";
import PageNotFound from "./Pages/PageNotFound";
function NestedRoutes()
{

    return(
        <BrowserRouter>
        <div className="container1">
        <ul>
            <li><NavLink  style={({isActive})=>isActive?{color:"blue",textDecoration:"none"}:{color:"white"}}  to="/"  >Home</NavLink></li>
            <li><NavLink to="courses" style={({isActive})=>isActive?{color:"blue",textDecoration:"none"}:{color:"white"}}  >Courses</NavLink></li>
        </ul>
        </div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="courses" element={<Courses/>} >
                <Route path="front" element={<Front/>}/>
                <Route path="back" element={<Back/>}/>
            </Route>
            <Route path="*" element={<PageNotFound/>}/>
            
        </Routes>
        </BrowserRouter>  
    )
}
export default NestedRoutes;