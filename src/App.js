import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './Components/NavBar/NavBar';
// import {Route,Routes,BrowserRouter} from "react-router-dom";
// import Home from './Components/Pages/Home';
// import Blogs from './Components/Pages/Blogs';
// import User from './Components/Pages/User';
import {Outlet,Routes,Route,BrowserRouter} from "react-router-dom";
import LinkExample from './Components/LinkExample/LinkExample';
import Ecom from './Components/Ecom';
import PageNotFound from './Components/NestedRoute/Pages/PageNotFound';
import UserDetails from './Components/Pages/UserDetails';
import User from './Components/Pages/User';
import Blogs from './Components/Pages/Blogs';
import Home from './Components/Pages/Home';
import DataInContext from './Components/Pages/DataInContext';
function App() {
  return (
 
  
    <DataInContext> 
       <div className="App">
 
   <NavBar/>
   

     
     
   {/* <Outlet/> */}
   <Routes>
     {/* <Route path="/" element={<App/>}> */}
     {/* <App /> */}
     <Route path="/" element={<Home/>}/>
     <Route path="blogs" element={<Blogs/>} />
     <Route path="user" element={<User/>} >
        <Route index element={
         <div>
           This is index path for User Details
         </div>
        } />
       <Route path=":userId" element={<UserDetails/>} />
     </Route>
     <Route path="*" element={<PageNotFound/>} />
   
     </Routes>
 
      
    </div>
    </DataInContext>
   
  );
}

export default App;
