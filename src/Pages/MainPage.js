import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import MyMap from "../Components/MyMap";
import "../Styles/MainPage.css";
import axios from "axios";
import Card from '../Components/Card'

function MainPage() {
  const [key, setKey] = useState("");
  const [data, setData] = useState([]);
  const [cityName, setCityName] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");
  const [coor, setCoor] = useState([0, 0]);
  const getData = () => {
    const options = {
      method: "GET",
      url: "https://community-open-weather-map.p.rapidapi.com/weather",
      params: {
        q: key,
        lat: "0",
        lon: "0",
        callback: "test",
        id: "2172797",
        lang: "null",
        units: "imperial",
        mode: "xml",
      },
      headers: {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "eca2540848msh1c43768fcaf6b02p10b31ajsn633366e92154",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setData(
          JSON.parse(response.data.substring(5, response.data.length - 1))
        );
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    if (data.length === 0) return;
    setCityName(data.name);
    setTemp(Math.round((data.main.temp - 32) / 1.8));
    setDesc(data.weather[0].description);
    setCoor([data.coord.lat, data.coord.lon]);
  }, [data]);
  return (
    <div className="Mainpage">
      <Sidebar
        setKey={setKey}
        getData={getData}
        cityName={cityName}
        temp={temp}
        desc={desc}
      />
      <MyMap coor={coor} />
      <Card temp={temp} desc={desc} cityName={cityName} coor={coor} />
    </div>
  );
}

export default MainPage;
