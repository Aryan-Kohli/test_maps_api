import React from "react";

export default function CurrentLoc(props) {
  var x = document.getElementById("demo");
  const [abcd, Setabcd] = React.useState("");
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    // x.innerHTML =
    let ans =
      "Your position is : " +
      "Latitude " +
      position.coords.latitude +
      "Longitude " +
      position.coords.longitude;
    Setabcd(ans);
    props.set_current(position.coords.latitude, position.coords.longitude);
  }

  // window.onload = (event) => {
  //   console.log("page is fully loaded");
  //   getLocation();
  // };
  return (
    <div>
      <p>Click to see you nearby results</p>

      <button onClick={getLocation}>Click Me </button>

      <p id="demo">{abcd}</p>
    </div>
  );
}
