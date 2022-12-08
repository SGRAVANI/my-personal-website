import { useEffect } from "react";
import {useParams,useSearchParams} from "react-router-dom";
// import User from "./User";
let userData=[

{id:"1", name:"shakuntla ravani"},
{id:"2",name:"kartik pandiya"},
{id:"3" ,name:"parchi patel"}

];
function UserDetails()
{
    const [searchp,setSearchP]=useSearchParams();
const params=useParams();
console.log("params is : ",params)
// 
useEffect(()=>{setSearchP({color:"pink",qty:200})},[])
function getNames()
{
let data= userData.filter((ob)=>ob.id===params.userId)
if(data.length==0||!data)
{
    return "No user Found";
}   
else{
    return data[0].name;
}
}
return(
    <div>
         UserName : {getNames()} 
          <div>Search Param - Color :{searchp.get("color")}</div>
         <div>Search Param - Qty :{searchp.get("qty")}</div> 
    </div>
)
}
export default UserDetails;