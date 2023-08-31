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
      "Latitude " +
      position.coords.latitude +
      "Longitude " +
      position.coords.longitude;
    Setabcd(ans);
    props.set_current(position.coords.latitude, position.coords.longitude);
  }
  return (
    <div>
      <p>Click the button to get your coordinates.</p>

      <button onClick={getLocation}>Try It</button>

      <p id="demo">{abcd}</p>
    </div>
  );
}
