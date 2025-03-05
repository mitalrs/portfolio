import React from 'react';
import { useState } from "react";
import useGlobalContext from '../Context/useGlobalContext.js';
import ToggleBtn from '../Components/ToggleBtn.js';

const Home = () => {
  const [light, setLight] = useState(true);
  const { state } = useGlobalContext();

  return (
    <div>
      home page
      <div>div</div>
      <div className={`App ${!light ? "dark" : ""}`}>
        <div className="relative h-screen w-screen dark:bg-black dark:text-white">
          new one
          <ToggleBtn light={light} setLight={setLight} />
          <div>cout: {state.increase}</div>

        </div>

      </div>
    </div>
  );
};

export default Home;