import "./App.css";
import Navbar from "./Components/NaveBar.js";
import { Outlet } from "react-router"


function App() {

  return (
     <div>
       <Navbar />
      <div className="content">
        <Outlet /> {/* This renders the routed pages */}
      </div>
     </div>
  );
}

export default App;
