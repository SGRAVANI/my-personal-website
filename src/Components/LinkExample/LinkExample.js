import {Link} from "react-router-dom";
function LinkExample()
{
return(
    <div>
        <br></br>
<h1>This is Home Page</h1>

<ul type="none" style={{marginTop:"30px"}}>
<li style={{listStyle:"none",display:"inline-block",padding:"20px" ,fontSize:"20px"}}>
    <Link to="blogs">Blogs</Link>
</li>
<li style={{listStyle:"none",display:"inline-block",padding:"20px",fontSize:"20px"}}>
    <Link to="user">User</Link>
</li>
</ul>

</div>
)
}
export default LinkExample;