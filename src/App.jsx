import { useState } from "react";
import "./App.css";
import data from "./data";
import Card from "./card";
import CurrentLoc from "./CurrentLoc";

function App() {
  const [latitude, Setlatitude] = useState(0);
  const [longutide, Setlongitude] = useState(0);
  const [range, setRange] = useState(10.0);
  const loc = data.map((x) => {
    const dis = calculateDistance(latitude, longutide, x.latitude, x.longitude);
    if (dis <= 7) {
      // dis = dis.toFixed(3);
      return (
        <Card
          latitude={x.latitude}
          longitude={x.longitude}
          key={x.id}
          id={x.id}
          distance={dis}
        />
      );
    }
  });

  function calculateDistance(lat1, lon1, lat2, lon2) {
    const earthRadius = 6371; // Radius of the Earth in kilometers

    // Convert degrees to radians
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadius * c; // Distance in kilometers
    return distance;
  }
  function set_current(a, b) {
    Setlatitude(a);
    Setlongitude(b);
    console.log(latitude + "   " + longutide);
  }
  return (
    <>
      <div className="container">
        <CurrentLoc set_current={set_current} />
        <div className="row">
          <h1>The following are the missing pets info near You</h1>
          {loc}
        </div>
      </div>
    </>
  );
}

export default App;
