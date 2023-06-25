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
          src={`https://starwars-visualguide.com/assets/img/vehicles/${
            props.index + 4
          }.jpg`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.vehicle.name}</h5>
          {vehicleStore[0] ? (
            <div>
              <p className="card-text">
                <span className="prop-span">Model:</span> <span className='value-prop'>{vehicleStore[0].model}</span>
              </p>
              <p className="card-text">
                <span className="prop-span">  Class:</span> 
                <span className='value-prop'>{vehicleStore[0].vehicle_class}</span>
              </p>
              <p className="card-text">
              <span className="prop-span">Max Speed:</span> <span className='value-prop'>{vehicleStore[0].max_atmosphering_speed}</span>
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
            <button className="btn btn-fav btn-more" onClick={actions.addVehicles(props.vehicle)} >&#10031;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsVehicles;
