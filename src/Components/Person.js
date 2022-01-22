import React, { useEffect, useState } from "react";
import axiox from "axios";
import "./Show.css";

const List = () => {
  const [person, setPerson] = useState([]);
  const [searchterm, setSearchterm] = useState("Alan Walker");
  const handleSearchClick = (e) => {
    e.preventDefault();
    console.log(searchterm);
  };

  useEffect(() => {
    axiox
      .get(`https://api.tvmaze.com/search/people?q=${searchterm}`)
      .then((res) => {
        console.log(res);
        setPerson(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchterm]);

  return (
    <>
      <form className="searchbar__form">
        <input
          type="text"
          placeholder="Please Enter Something to search"
          value={searchterm}
          onChange={(e) => setSearchterm(e.target.value)}
          className="input"
        />
        <button className="search__submit" onClick={handleSearchClick}>
          Search
        </button>
      </form>
      <div className="results">
        {person.map((person) => (
          <div className="single__result">
            <img
              src={
                person.person.image
                  ? person.person.image.medium
                  : "https://tse2.mm.bing.net/th?id=OIP.avxhtQqr5FoubGjq4sIXugHaEo&pid=Api&P=0&w=262&h=163"
              }
              alt="logo"
              className="image"
            />
            {person.person.id} {person.person.name}
          </div>
        ))}
      </div>
    </>
  );
};
export default List;
