import { useState } from "react";
import "./app.css"
function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [status, setStatus] = useState(null);
  function handleClick() {
    if (!navigator.geolocation) {
      setStatus("your browser doesn't support geolocation");
    } else {
      setStatus("Loading...")
      navigator.geolocation.watchPosition((position) => {
        setStatus(null);
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      }, () => {
        setStatus("something went wrong");
      })
    }
  }

  return (
    <div className="App">
      <div className="container">
        <button onClick={handleClick}>Get location</button>
        <h2>Coordinates</h2>
        <p>{status}</p>
        {latitude && <p>latitude : {latitude}</p>}
        {longitude && <p>longitude : {longitude}</p>}
      </div>
    </div>
  );
}

export default App;
