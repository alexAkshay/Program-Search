import "./App.css";
import React, { useState } from "react";
import Main from "./Main";
import ThemesContext, {themes} from './Themes';
import Footer from "./Components/Footer";
import {AiOutlineMenu} from 'react-icons'

export default function App() {
  const [theme, setTheme] = useState(themes.dark)
  const [method, setmethod] = useState("shows")
  const [searchTerm, setSearchTerm] = useState('av')
  
const changeTheme = () =>{
  theme === themes.dark ?  setTheme(themes.light) :
  setTheme(themes.dark)
}

const handleInputChange = (e) =>{
  setSearchTerm(e.target.value)
}
const toggleMethod=() =>{
  method === "shows" ? setmethod("people") : setmethod("shows")
}


 return(
  <ThemesContext.Provider value={theme}>
    <div className="nav"> 
    
    <button className="menu"><AiOutlineMenu/> MENU</button>
    <input type="text" placeholder="Search" onChange={handleInputChange} />
    <button onClick={changeTheme} className="toggletheme" >Change Theme</button>
   <button className="togglemethod" onClick={toggleMethod}> Change Method </button>
   <button className="login">LOGIN</button>
   </div>

  <Main method={method} searchTerm={searchTerm} />
  <Footer/>
</ThemesContext.Provider>
 )
}
