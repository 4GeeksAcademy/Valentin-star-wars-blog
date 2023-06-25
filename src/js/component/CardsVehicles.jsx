import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

const CardsVehicles = (props) => {
  const { store, actions } = useContext(Context);

  const vehicleStore = store.vehicle.filter(
    (vhc) => vhc.name === props.vehicle.name
  );

  useEffect(() => {
    actions.vehicleDescription(props.vehicle.url);
  }, []);
  return (
    <div className="cards">
      <div className="card" key={props.index}>
        <img
          src={`https://starwars-visualguide.com/assets/img/vehicles/${props.index + 4}.jpg`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.vehicle.name}</h5>
          {vehicleStore[0] ? (
            <div>
              <p className="card-text">
                <b>Model:</b> {vehicleStore[0].model}
              </p>
              <p className="card-text">
                <b>Class: </b>
                {vehicleStore[0].vehicle_class}
              </p>
              <p className="card-text">
                <b>Max Speed:</b> {vehicleStore[0].max_atmosphering_speed}
              </p>
            </div>
          ) : (
            ""
          )}
          <div className="d-flex justify-content-center">
            <Link
              to={"/single/" + props.vehicle.uid}
              className="more"
              data={vehicleStore}
            >
              <button className="btn btn-more">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsVehicles;
