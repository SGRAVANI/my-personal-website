import { Outlet } from "react-router-dom";

function User()
{
    return(
        <div className="container">
           
            <h2>I am User Page</h2>
            <Outlet/>
        </div>
    )
    
}
export default User;