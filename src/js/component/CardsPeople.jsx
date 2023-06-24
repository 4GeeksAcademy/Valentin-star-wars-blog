import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";

const CardsPeople = (props) => {
  const { store, actions } = useContext(Context);
  const charStore = store.character.filter(char => char.name == props.character.name);
	useEffect(() => actions.charDescription(props.character.url), []);

  return (
    <div className="cards">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.character.name}</h5>
          {charStore[0] ? (
            <div>
              <p className="card-text">Gender: {charStore[0].gender}</p>
              <p className="card-text">Hair color: {charStore[0].hair_color}</p>
              <p className="card-text">Birth Year: {charStore[0].birth_year}</p>
            </div>
          ) : (
            ""
          )}
          <button className="btn btn-primary">Go somewhere</button>
        </div>
      </div>
    </div>
  );
};

export default CardsPeople;
