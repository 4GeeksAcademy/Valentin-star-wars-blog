import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

const CardsPeople = (props) => {
  const { store, actions } = useContext(Context);

  

  const charStore = store.character.filter(
    (char) => char.name == props.character.name
  );

  useEffect(() => actions.charDescription(props.character.url), []);

  return (
    <div className="cards">
      <div className="card" key={props.index}>
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${
            props.index + 1
          }.jpg`}
          className="card-img-top"
          alt={props.character.uid}
        />
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
          <div className="d-flex justify-content-center">
            <Link
              to={"/single/" + props.character.uid}
              className="more"
              data={charStore}
            >
              <button className="btn btn-more">Learn More</button>
            </Link>
            <button className="btn btn-fav btn-more">&#10031;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsPeople;
