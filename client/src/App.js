import "./App.css";
import { useEffect } from "react";
import Navbar from "./Components/NaveBar.js";
import { Outlet } from "react-router"
import {useTheme} from "@heroui/use-theme";
import  useGlobalContext  from "./Context/useGlobalContext.js";

function App() {
  const { setTheme} = useTheme();
  const { state } = useGlobalContext();


  useEffect(() => {
    setTheme(state.theme); 
  }, [state.theme, setTheme]);

  return (
     <>
      <main className={`${state.theme} text-foreground bg-background`}>
       <Navbar/>
      <div className="content">
        <Outlet /> {/* This renders the routed pages */}
      </div>
      </main>
     </>
  );
}

export default App;
