import React from "react";

import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import userImage from "../assets/user.png";
import "../CSS/sidebar.css";
import { Link } from "react-router-dom";
function SideBar() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: "flex", height: "100%" }} class="scrollbar" id="style-1">
      
      
    
      <div class="force-overflow">
      <Sidebar className="">
        <main className="d-flex justify-content-end">
          <button
            className="btn  text-white "
            onClick={() => collapseSidebar()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30"
              height="30"
              focusable="false"
            >
              <title>Menu</title>
              <path
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-miterlimit="10"
                d="M4 7h22M4 15h22M4 23h22"
              ></path>
            </svg>
          </button>
        </main>
        <div className="user-data justify-content-center  d-flex row">
          <img src={userImage} alt="error  " className="user-image  " />
          <p className="user-name">sumit barmecha</p>
          <p className="user-position text-green">operational manager</p>
        </div>
        <Menu className="text-left">
          <MenuItem  component={<Link to="/" />}>
            <p className="text-green text-center f-16 mx-5 pb-2">Dashboard</p>
          </MenuItem>
          <div className="sidebar-section m-5 mt-0 pb-3 ">
            <p className="text-offwhite  f-14  m-0 ">Clients</p>
          
            <MenuItem className="submenu  f-16" component={<Link to="/addclient" />}> Add Client</MenuItem>
            <MenuItem className="submenu  f-16" component={<Link to="/members" />}> Members</MenuItem>


          </div>
          <div className="sidebar-section m-5 pb-3">

          <p className="text-offwhite  m-0 f-14 ">Employees</p>
          <MenuItem className="submenu  f-16" component={<Link to="/team" />}> Team</MenuItem>
          <MenuItem className="submenu  f-16" component={<Link to="/performance" />}> Performance</MenuItem>
          <MenuItem className="submenu  f-16" component={<Link to="/attendance" />}> Attendance</MenuItem>

          </div>
          <div className="sidebar-section m-5 pb-3">

          <p className="text-offwhite  m-0 f-14 ">Charts</p>
          <MenuItem className="submenu  f-16" component={<Link to="/piechart" />}> Pie Chart </MenuItem>
          <MenuItem className="submenu  f-16" component={<Link to="/g" />}> Bar Graph </MenuItem>
          <MenuItem className="submenu  f-16" component={<Link to="/members" />}> Line Chart</MenuItem>

          </div>
        </Menu>
      </Sidebar>
      </div>
    </div>
  );
}

export default SideBar;
