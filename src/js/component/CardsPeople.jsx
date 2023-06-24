import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";

const CardsPeople = (props) => {
  const { store, actions } = useContext(Context);

  const charStore = store.character.filter((char) => char.name === props.person.name);


  return (
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.person.name}</h5>
        {charStore[0] ? (
          <div>
            <p className="card-text">Gender: {props.person.gender}</p>
            <p className="card-text">Hair color: {props.person.hair_color}</p>
            <p className="card-text">Birth Year: {props.person.birth_year}</p>
          </div>
        ) : (
          ""
        )}

        <button className="btn btn-primary">Go somewhere</button>
      </div>
    </div>
  );
};

export default CardsPeople;
