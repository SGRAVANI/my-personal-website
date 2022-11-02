import "bootstrap/dist/css/bootstrap.min.css"
import {useNavigate} from "react-router-dom";
function Blogs()
{
    let navigate=useNavigate();
    return(
        <div className="container">
            <h2> Blogs Page</h2>
            <div className="d-flex flex-row"></div>
            <button className="btn btn-primary mx-3" onClick={()=>navigate("/my-personal-website/user/1")}>User1</button>
            <button className="btn btn-primary max-3 " onClick={()=>navigate("/my-personal-website/user/2")}>User2</button>
            <button className="btn btn-primary mx-3" onClick={()=>navigate("/my-personal-website/user/3")}>User3</button>
        </div>
    )
}
export default Blogs;