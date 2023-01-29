import React from "react";
import SideBar from "./SideBar";
import '../CSS/dashboard.css'
import AddClient from './AddClient';
import Members from './Members';
import Home from './Home.js';
import Team from './Team.js';
import { Routes, Route } from "react-router-dom";
import MembersDetails from "./MembersDetails";
const Dashboard = () => {
  return (
    <div className="dashboard  d-flex col text-white ">
      <div className="sidebar  ">
        <SideBar />
      </div>

      <Routes>
        <Route exact path="/addclient" element={<AddClient/>} />
        <Route exact path="/members" element={<Members/>} />
        <Route exact path="/team" element={<Team/>} />
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/membersdetail" element={<MembersDetails/>} />

     
      </Routes>

    </div>
  );
};

export default Dashboard;
