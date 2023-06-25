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

  const { uid, name, gender, hair_color, birth_year } = character;

  return (
    <div
      className={`modal ${props.isOpen ? "show" : ""}`}
      tabIndex="-1"
      style={{ display: props.isOpen ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${props.character.uid}.jpg`}
              className="image_detalle col6 col-md-6"
              alt="..."
            />
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
            <p>Gender: {gender}</p>
            <p>Hair color: {hair_color}</p>
            <p>Birth Year: {birth_year}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
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
};

export default PeopleDetails;
