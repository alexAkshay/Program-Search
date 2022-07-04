import "./App.css";
import React, { useState } from "react";
import Main from "./Main";
import ThemesContext, {themes} from './Themes';

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
  if(method=== "shows"){
    setMethod("person");}
  else{
    setMethod("shows")}
}


 return(
  <ThemesContext.Provider value={theme}>
    <div className="nav"> 
    
    <button className="menu">MENU</button>
    <input type="text" placeholder="Search" onChange={handleInputChange} />
    <button onClick={changeTheme} className="toggletheme" >Change Theme</button>
   <button className="togglemethod" onClick={toggleMethod}> Change Method </button>
   </div>

  <Main method={method} searchTerm={searchTerm} />
</ThemesContext.Provider>
 )
}
