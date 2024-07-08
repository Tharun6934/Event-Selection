import React, { useState } from "react";
import "./App.css";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import Comp3 from "./Components/Comp3";
import Festival from "./Components/Festival";
import Register from "./Components/Register";

function App() {
  const [isselected, setisSelected] = useState(null);
  return (
    <div className="outercontainer">
      <div className="innercontainer">
        <Festival isselected={isselected} setisSelected={setisSelected} />
        <Register isselected={isselected} setisSelected={setisSelected} />
      </div>
    </div>
  );
}

export default App;
