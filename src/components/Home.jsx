import React, { useState } from "react";
import Nav from "./Nav";
import WeatherIcon from "./WeatherIcon";
import SideBar from "./sideBar";

export default function Home() {
  const [opened, setOpened] = useState(false);
  function toggleSideBar() {
    setOpened(() => !opened);
  }

  return (
    <div>
      <SideBar opened={opened}> </SideBar>
      <Nav onToggleMenu={toggleSideBar} isMenuOpened={opened}></Nav>
      <WeatherIcon />
    </div>
  );
}

function getWeatherData() {
  fetch(
    "https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "808f9d07e5mshcd720ae41aaffe2p11f647jsnb1cf7f916502",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      },
    }
  )
    .then(async (response) => {
      response.text().then((res) => {
        let stepOne = res.split("test(")[1].split("");
        let dataLength = stepOne.length;
        stepOne.splice(dataLength - 1, 1);
        console.log(JSON.parse(stepOne.join("")));
      });
    })
    .catch((err) => {
      console.error(err);
    });
}
getWeatherData();
