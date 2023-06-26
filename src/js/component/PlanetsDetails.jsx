import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetsDetails = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const planet = store.planet.find((pla) => pla.uid === params.id);

  
  useEffect(() => {
    actions.planetDescription(props.planet.url);
  }, []);


  
  if (!planet) {
    return (
      <div
        className={`modal ${props.isOpen ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: props.isOpen ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Planet Not Found</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={props.onClose}
              ></button>
            </div>
            <div className="modal-body">
              <p>The requested planet does not exist.</p>
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
    <div>
       <div
      className={`modal ${props.isOpen ? "show" : ""}`}
      tabIndex="-1"
      style={{ display: props.isOpen ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
           
            <h5 className="modal-title">{props.planet.name}</h5>
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
              src={
                props.planet.uid > 0
              ? `https://upload.wikimedia.org/wikipedia/commons/2/23/DesertPlanet.jpg`
              :
                `https://starwars-visualguide.com/assets/img/planets/${props.planet.uid}.jpg`}
              className="image-detalle col6 col-md-6"
              alt="..."
            />
            <div className="text-description">
              <p>Gravity: {planet.gravity}</p>
              <p>Climat: {planet.climate}</p>
              <p>Terrain: {planet.terrain}</p>
              <p>Diameter: {planet.diameter}</p>
              <p>Orbital period: {planet.orbital_period}</p>
              <p>Rotation period: {planet.rotation_period}</p>
              <p>Surface water: {planet.surface_water}</p>
              <p>Population: {planet.population}</p>
            </div>
          </div>
          <div className="modal-footer">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quaerat dolorem corrupti incidunt eligendi, tenetur consectetur! Eaque asperiores maiores totam quaerat? Blanditiis eius necessitatibus beatae quam, ipsum quasi officiis vel!
            Rem saepe consectetur quam minima facere totam praesentium, illum ea ratione odit vel temporibus ad eos, quasi exercitationem. Eligendi consequatur veritatis dolorem beatae fugit reprehenderit illum consequuntur nostrum nihil corporis.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PlanetsDetails;