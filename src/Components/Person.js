import React, { useEffect, useState } from "react";
import axiox from "axios";
import "./Show.css";

const Person = ({searchTerm}) => {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    axiox
      .get()
      .then((res) => {
        console.log(res);
        setPerson(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchTerm]);

  return (
    <>
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
export default Person;
