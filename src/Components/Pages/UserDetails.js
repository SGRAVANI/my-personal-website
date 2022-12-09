import { useEffect } from "react";
import {useParams,useSearchParams} from "react-router-dom";
import {BsHeart } from "react-icons/bs";
import { useContext } from "react";
import ContextData from "./ContextData";
// import User from "./User";
// let userData=[

// {id:"1", name:"shakuntla ravani"},
// {id:"2",name:"kartik pandiya"},
// {id:"3" ,name:"parchi patel"}

// ];
function UserDetails()
{
    let cont=useContext(ContextData);
    //const [searchp,setSearchP]=useSearchParams();
    function handleClick()
    {
        cont.incrementLikes();
    }
const params=useParams();
console.log("params is : ",params)
// // 
// useEffect(()=>{setSearchP({color:"pink",qty:200})},[])
function getNames()
{
let data= cont.userData.find((ob)=>ob.id.toString()===params.userId)
if(data.length==0||!data)
{
    return "No user Found";
}   
else{
    return data;
}
}

const user=getNames()
return(
    <div className="bg-light p-5 mt-5">
    <h4>User Details</h4>
         UserName : {user.name} <br/>
         Email Address: {user.email} 
          {/* <div>Search Param - Color :{searchp.get("color")}</div>
         <div>Search Param - Qty :{searchp.get("qty")}</div>  */}
         <div>
         <button className="mt-3 mb-2 btn btn-primary" onClick={handleClick}><BsHeart className="me-2 "  />Like</button>
         <br/>{cont.likeCount}
         </div>
    </div>
)
}
export default UserDetails;