// import logo from './logo.svg';

// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello';
// import React,{Component} from 'react';
// import { First,Second } from './components/Welcome';
// import Message from './components/Message';
// import Counter from './components/Counter';


// class App extends Component {
//   render(){
//   const obj={backgroundColor:"yellow"};
//   return (
//     <div className="App" style={obj}>
//        {/* <Greet name="Teja"><p>Happy Birthday</p> </Greet>
//        <Greet name="Madhavi">
//         <button>Action</button>
//        </Greet>
//        <Greet name="Likitha"/> */}
//        {/* <Welcome/> */}
//        {/* <Hello></Hello> */}
//       <Welcome></Welcome>
//         <First/>
//        <Second/>
//     </div>
//   );
// }
// }
// class App extends Component{
// render(){
//   return(
//   <div className='App'>
//     {/* <Message></Message> */}
//     {/* <Counter></Counter> */}
//     <Form></Form>
//   </div>
//   )
// }
// }

// import React, { useState } from 'react';
// import {
//   Routes,
//   Route,
//   NavLink,
//   BrowserRouter as Router
// } from "react-router-dom";
// import FocusInput from './components/FocusInput';
// import ScrollToMiddle from './components/ScrollToMiddle';
// import ShoppingApp from './Redux/ShoppingApp'
// import TodoList from './Redux/TodoList';
// import ThemeApp from './Redux/ThemeApp';
// import './App.css';
// function App(){
//   return(
//      <Router>
//     <ul>
//     <li><NavLink to="/ScrollToMiddle"  style={({isActive})=>({
//             color:isActive?"red":"black",
//           })}
//           >ScrollToMiddle</NavLink>  </li>
//     <li><NavLink to="/FocusInput"  style={({isActive})=>({
//             color:isActive?"red":"black",
//           })}
//           >FocusInput</NavLink>  </li>
//     <li><NavLink to="/ShoppingApp"  style={({isActive})=>({
//             color:isActive?"red":"black",
//           })}
//           >ShoppingApp</NavLink>  </li>
//      <li><NavLink to="/TodoList"  style={({isActive})=>({
//             color:isActive?"red":"black",
//           })}
//           >TodoList</NavLink>  </li>
//        <li><NavLink to="/ThemeApp"  style={({isActive})=>({
//             color:isActive?"red":"black",
//           })}
//           >ThemeApp</NavLink>  </li>
//   </ul> 
//    <Routes>
//     <Route path="/ScrollToMiddle" Component={ScrollToMiddle}/>
//     <Route path="/FocusInput" Component={FocusInput}/>
//     <Route path="/ShoppingApp" Component={ShoppingApp}/>
//     <Route path='/TodoList' Component={TodoList}/>
//     <Route path ='/ThemeApp' Component={ThemeApp}/>

//   </Routes> 
//  </Router> 
// )};


import React from "react";

import {
  Routes,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import {Provider, useSelector} from 'react-redux';
import store from './E-Commerce/Store/Store'
import Navbar from './E-Commerce/Pages/Navbar';
import Home from './E-Commerce/Pages/Home';
import Category from './E-Commerce/Pages/Category';
import Cart from "./E-Commerce/Pages/Cart";
import { lightTheme,darkTheme } from "./E-Commerce/Themes";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import ProductDetails from "./E-Commerce/Pages/ProductDetails";
import { useMemo, useState } from "react";
function App() {
  const [theme,setTheme]=useState("light");
  const toggleTheme = ()=>{
      setTheme((prevTheme)=>(prevTheme==="light"?"dark":"light"));
  }
  const currentTheme = useMemo(()=>{
    return theme==="light"?lightTheme:darkTheme;
},[theme]);
  return (
    <Provider store={store}> 
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
  <Router>
    <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path= "/category/:category" element={<Category/>}/>
      <Route path = "/Cart" element={<Cart/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
    </Routes>
  </Router>
 
  </ThemeProvider>
  </Provider>

)};
export default App;

