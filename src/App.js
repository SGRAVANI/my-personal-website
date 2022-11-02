import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './Components/NavBar/NavBar';
// import {Route,Routes,BrowserRouter} from "react-router-dom";
// import Home from './Components/Pages/Home';
// import Blogs from './Components/Pages/Blogs';
// import User from './Components/Pages/User';
import {Outlet} from "react-router-dom";
import LinkExample from './Components/LinkExample/LinkExample';
function App() {
  return (
  //  <BrowserRouter>
       <div className="App">
   
   <NavBar/>
   {/* <LinkExample/> */}
      {/* <Routes>
        {/* <Route path="/home" element={<Home/>}/>
        <Route path="/blogs" element={<Blogs/>}/> */}
        {/* using nested Routes */}
        
      {/* </Routes> */}
     
     
   <Outlet/>      
    </div>
    // </BrowserRouter>
   
  );
}

export default App;
