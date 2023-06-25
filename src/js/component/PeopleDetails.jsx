import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PeopleDetails = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.charDescription(params.id);
  }, []);

  const character = store.character.find(
    (char) => char.uid === params.id
  );

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
              src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
              className="image_detalle col6 col-md-6"
              alt="..."
            />
            <h5 className="modal-title">{character?.name}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>Le texte du corps du modal est ici.</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onCli
            >
              Fermer
            </button>
            <button type="button" className="btn btn-primary">
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default PeopleDetails;
