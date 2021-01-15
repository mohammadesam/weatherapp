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
      <SideBar opened={opened}></SideBar>
      <Nav onToggleMenu={toggleSideBar}></Nav>
      <WeatherIcon />
    </div>
  );
}
