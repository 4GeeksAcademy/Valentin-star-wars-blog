import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let url = `https://www.swapi.tech/api/people/${params.uid}`;

  const charStore = store.character.filter((char) => char.url == url);
  useEffect(() => actions.charDescription(url), []);

  return (
    <div>
      <div className="jumbo">
        <div className="d-flex justify-content-between">
          <img
            src="https://raw.githubusercontent.com/NicolasArayaB/starwars-blog-reading-list/master/dist/img/darthvader.jpg"
            width="400"
          />
          <div className="text">
            {charStore[0] ? (
              <h1 className="display-4">{charStore[0].name}</h1>
            ) : (
              ""
            )}
            <p>
              Here we should have a description of each StarWars element, but
              this api doesn&apos;t provide one, at least not personalized.
            </p>
          </div>
        </div>
        <hr className="my-4 hr" />
        {charStore[0] ? (
          <div>
            <div className="info">
              <div sm={2}>Name: {charStore[0].name}</div>
              <div sm={2}>Birth: {charStore[0].birth_year}</div>
              <div sm={2}>Gender: {charStore[0].gender}</div>
              <div sm={2}>Height {charStore[0].height}</div>
              <div sm={2}>Skin Color: {charStore[0].skin_color}</div>
              <div sm={2}>Eye Color: {charStore[0].eye_color}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
