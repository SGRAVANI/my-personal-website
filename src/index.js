import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Routes,Route} from "react-router-dom";
import Home from './Components/Pages/Home';
import User from './Components/Pages/User';
import Blogs from './Components/Pages/Blogs';
import PageNotFound from './Components/Pages/PageNotFound';
import UserDetails from './Components/Pages/UserDetails';
import {Navigate} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <BrowserRouter>
   {/* <App/>  */}
   <Routes>
    <Route path="my-personal-website" element={<App/>}>
    {/* <App /> */}
    <Route path="home" element={<Home/>}/>
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
    </Route>
    </Routes>
    </BrowserRouter> 
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
