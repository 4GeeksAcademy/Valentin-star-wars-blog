import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import Cards from "../component/Cards.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPeople();
  }, []);

  return (
    <div>
      <h1>People:</h1>
      <ul>
        {store.people.map((person, index) => (
          // <Cards person={person} index={index}/>
          <li key={index}>
            <Link to={`/person/${person.uid}`}>{person.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
