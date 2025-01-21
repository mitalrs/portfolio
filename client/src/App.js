import "./App.css";
import Navbar from "./Components/NaveBar.js";
import { Outlet } from "react-router"
import {useTheme} from "@heroui/use-theme";

function App() {
  const {theme, setTheme} = useTheme();


  return (
     <>
      <main className={`${theme} text-foreground bg-background`}>
       <Navbar setTheme={setTheme}/>
      <div className="content">
        <Outlet /> {/* This renders the routed pages */}
      </div>
      </main>
     </>
  );
}

export default App;
