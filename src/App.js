import "./App.css";
import React, { useState } from "react";
import Show from "./Components/Show";
import Person from "./Components/Person";



export default function App() {
  const [method, setMethod] = useState("Show");

  const handlepersonclick = () => {
    return setMethod("Person");
  };
  const handleShowClick = () => {
    return setMethod("Show");
  };
  return (
    <div className="App">
      <div className="nav">
        <div className="logo">Program Finder by Group 3</div>
        <div className="toggelButtons">
          Search by Show
          <input
            type="radio"
            name="type"
            value="byShow"
            onClick={handleShowClick}
          />
          Search by Person
          <input
            type="radio"
            name="type"
            value="byPerson"
            onClick={handlepersonclick}
          />
        </div>
      </div>
      <div>
        {method === "Person" && <Person />}
        {method === "Show" && <Show />}
      </div>
    </div>
  );
}
