import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MyMap({ coor }) {
  //console.log(coor);
  return (
    <div className="maps">
      <MapContainer
        key={JSON.stringify([
          coor[0],
          coor[1],
        ])}
        center={coor}
        zoom={11}
        style={{ width: "100%", height: "100vh" }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=w5cAJVSyrdH8apUGdU5M"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
      </MapContainer>
    </div>
  );
}
export default MyMap;
