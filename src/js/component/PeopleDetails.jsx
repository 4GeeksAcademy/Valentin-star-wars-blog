import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PeopleDetails = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.charDescription(props.character.url);
  }, []);

  const character = store.character.find((char) => char.uid === params.id);
  
  if (!character) {
    return (
      <div
        className={`modal ${props.isOpen ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: props.isOpen ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Character Not Found</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={props.onClose}
              ></button>
            </div>
            <div className="modal-body">
              <p>The requested character does not exist.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={props.onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`modal ${props.isOpen ? "show" : ""}`}
      tabIndex="-1"
      style={{ display: props.isOpen ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.character.name}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={props.onClose}
            ></button>
          </div>
          <div className="modal-body">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${props.character.uid}.jpg`}
              className="image-detalle col6 col-md-6"
              alt="..."
            />
            <div className="text-description">
              <p>Gender: {character.gender}</p>
              <p>Hair color: {character.hair_color}</p>
              <p>Birth year: {character.birth_year}</p>
              <p>Eye color: {character.eye_color}</p>
              <p>Mass: {character.mass}</p>
              <p>Skin color: {character.skin_color}</p>
              <p>Created: {character.created}</p>
            </div>
          </div>
          <div className="modal-footer">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              quaerat dolorem corrupti incidunt eligendi, tenetur consectetur!
              Eaque asperiores maiores totam quaerat? Blanditiis eius
              necessitatibus beatae quam, ipsum quasi officiis vel! Rem saepe
              consectetur quam minima facere totam praesentium, illum ea ratione
              odit vel temporibus ad eos, quasi exercitationem. Eligendi
              consequatur veritatis dolorem beatae fugit reprehenderit illum
              consequuntur nostrum nihil corporis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleDetails;
