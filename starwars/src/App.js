import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PersonCard from "./Card";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        const peopleArray = response.data.results;
        setPeople(peopleArray);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="card-container">
        {people.map(person => (
          <PersonCard
            key={person.name}
            name={person.name}
            height={person.height}
            mass={person.mass}
            hair={person.hair_color}
            skin={person.skin_color}
            eyes={person.eye_color}
            birth={person.birth_year}
            gender={person.gender}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
