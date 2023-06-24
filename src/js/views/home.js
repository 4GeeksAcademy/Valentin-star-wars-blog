import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import CardsPeople from "../component/CardsPeople.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getCharacter();
  }, []);

  return (
    <div>
      <div>
        <div>
          <h2 className="heading">Characters</h2>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-between overFlow">
          {store.character
            ? store.character.map((person, index) => (
                <CardsPeople key={index} person={person} />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Home;
