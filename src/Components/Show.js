import React, { useEffect, useState } from "react";
import axiox from "axios";
import "./Show.css";

const Show = () => {
  const [show, setShow] = useState([]);
  const [searchterm, setSearchterm] = useState("friends");

  useEffect(() => {
    axiox
      .get(`https://api.tvmaze.com/search/shows?q=${searchterm}`)
      .then((res) => {
        console.log(res);
        setShow(res.data);
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
      </form>
      <div className="results">
        {show.map((show) => (
          <div className="single__result">
            <img
              src={
                show.show.image
                  ? show.show.image.medium
                  : "https://tse2.mm.bing.net/th?id=OIP.avxhtQqr5FoubGjq4sIXugHaEo&pid=Api&P=0&w=262&h=163"
              }
              alt="logo"
              className="image"
            />
            {show.show.id} {show.show.name}
            <br />
            {show.show.genres} <br />
            {show.show.language}
          </div>
        ))}
      </div>
    </>
  );
};
export default Show;
