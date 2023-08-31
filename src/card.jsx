import React from "react";

export default function Card(props) {
  return (
    <div className="card col-md-4">
      <h3>id is : {props.id}</h3>
      <h3>Distance is : {props.distance} km </h3>
      {/* <h3>latitude is : {props.latitude}</h3> */}
      {/* <h3>longitude is : {props.longitude}</h3> */}
    </div>
  );
}
