import React from 'react'

function Card({temp,desc,cityName,coor}) {
  return (
    <div className="card">
      <h4>City Name : {cityName}</h4>
      <h4>Coordinates: {coor[0]},{coor[1]}</h4>
      <h4>Temperature: {temp}</h4>
      <h4>Description: {desc}</h4>
    </div>
  );
}

export default Card