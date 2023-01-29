import "./App.css";
import DieselInput from "./component/DieselInput";
import Home from "./component/Home1";
import PetrolInput from "./component/PetrolInput";
import { Routes, Route } from "react-router-dom";
import { ProSidebarProvider } from 'react-pro-sidebar';
import React from "react";
import Dashboard from "./component/Dashboard";
import SideBar from "./component/SideBar";

function App() {
  return (
      <div className="App ">
     <ProSidebarProvider>
<Dashboard/>
     {/* <Routes>

     </Routes> */}
</ProSidebarProvider>
      </div>
  );
}

export default App;
