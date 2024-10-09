import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import IconLocation from "./img/street-view.svg";
import MarkerClusterGroup from "react-leaflet-cluster";
import "./App.css";
import { Icon, divIcon } from "leaflet";

function App() {
  const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp: "popup 1",
    },
    {
      geocode: [48.85, 2.3522],
      popUp: "popup 2",
    },
    {
      geocode: [48.855, 2.34],
      popUp: "popup 3",
    },
  ];
  const customIcon = new Icon({
    iconUrl: IconLocation,
    iconSize: [38, 38],
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
    });
  };

  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <TileLayer
        attribution="Stamen Watercolor"
        url="https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg"
      /> */}
      <MarkerClusterGroup
        chunckedLoading
        iconCreateFunction={createCustomClusterIcon}
      >
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default App;
