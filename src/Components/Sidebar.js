import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";


function Sidebar({setKey, getData, cityName, temp, desc }) {
  
  const [val, setVal] = useState("");
  return (
    <div className="Sidebar">
      <div className="Searchbar">
        <input
          value={val}
          onChange={(e) => {
            // setVal(e.target.value);
            setVal(e.target.value);
            setKey(e.target.value);
          }}
        />
        <FiSearch onClick={getData} />
      </div>
      <p className="labels">City Name</p>
      <p className="answers">{cityName}</p>
      <p className="labels">Temperature</p>
      <p className="answers">{temp ? `${temp} C` : ""}</p>
      <p className="labels">Description</p>
      <p className="answers">{desc}</p>
    </div>
  );
}

export default Sidebar;
