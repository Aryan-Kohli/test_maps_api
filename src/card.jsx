import React from "react";

export default function Card(props) {
  return (
    <div className="card col-md-4">
      <h5>id is : {props.id}</h5>
      <h5>Pet Info</h5>
      <h5>Distance is : {props.distance.toFixed(2)} km </h5>
      {/* <h3>latitude is : {props.latitude}</h3> */}
      {/* <h3>longitude is : {props.longitude}</h3> */}
    </div>
  );
}
