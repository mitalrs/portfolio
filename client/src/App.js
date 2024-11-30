import "./App.css";
import { useState } from "react";
import ToggleBtn from "./Components/ToggleBtn";
import  useGlobalContext  from './Context/useGlobalContext'

function App() {
  const [light, setLight] = useState(false);
  const { state } = useGlobalContext();

  return (
      <div className={`App ${!light ? "dark" : ""}`}>
        <div className="relative h-screen w-screen text-black dark:bg-black dark:text-white">
          new one
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <ToggleBtn light={light} setLight={setLight} />
          <div>cout: {state.increase}</div>
        </div>
        
      </div>
  );
}

export default App;
