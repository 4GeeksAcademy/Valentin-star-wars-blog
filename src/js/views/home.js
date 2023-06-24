import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import CardsPeople from "../component/CardsPeople.jsx";
import CardsPlanets from "../component/CardsPlanets.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPeople();
    actions.getPlanet();
  }, []);

  return (
    <>
      <div>
        <div>
          <div>
            <h2 className="heading">Characters:</h2>
          </div>
        </div>
        <div>
          <div className="d-flex cards-content">
            <div className="d-flex ">
              {store.people
                ? store.people.map((character, index) => (
                    <CardsPeople key={index} character={character} />
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h2 className="heading">Planets:</h2>
          </div>
        </div>
        <div>
          <div className="d-flex cards-content">
            <div className="d-flex ">
              {store.planets
                ? store.planets.map((planet, index) => (
                    <CardsPlanets key={index} planet={planet} />
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
