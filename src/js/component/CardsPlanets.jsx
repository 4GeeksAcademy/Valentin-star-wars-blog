import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

const CardsPlanets = (props) => {
  const { store, actions } = useContext(Context);
  const planetStore = store.planet.filter(
    (planet) => planet.name == props.planet.name
  );

  useEffect(() => actions.planetDescription(props.planet.url), []);

  return (
    <div className="cards">
      <div className="card" key={props.index}>
        <img
          src={
            props.index > 0
              ? `https://starwars-visualguide.com/assets/img/planets/${
                  props.index + 1
                }.jpg`
              : "https://zupimages.net/up/15/53/4ipd.png"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.planet.name}</h5>
          {planetStore[0] ? (
            <div>
              <p className="card-text">
                <span className="prop-span">Diameter:</span>{" "}
                <span className="value-prop">{planetStore[0].diameter}</span>
              </p>
              <p className="card-text">
                <span className="prop-span">Climate:</span>{" "}
                <span className="value-prop">{planetStore[0].climate}</span>
              </p>
              <p className="card-text">
                <span className="prop-span">Orbital Period:</span>{" "}
                <span className="value-prop">{planetStore[0].orbital_period}</span>
              </p>
            </div>
          ) : (
            ""
          )}
          <div className="d-flex justify-content-center">
            <Link
              to={"/single/" + props.planet.uid}
              className="more"
              data={planetStore}
            >
              <button className="btn btn-more">Learn More</button>
            </Link>
            <button className="btn btn-fav btn-more" onClick={() => actions.addPlanets(props.planet)}>&#10031;</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsPlanets;
