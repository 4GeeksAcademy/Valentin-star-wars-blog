import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import CardsPeople from "../component/CardsPeople.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPeople();
  }, []);

  return (
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
                  <CardsPeople key={index} id={++index} character={character} />
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
