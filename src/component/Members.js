import React from "react";
import "../CSS/members.css";
import member from "../assets/user.png";
import { Link } from "react-router-dom";
const Members = () => {
  return (
    <div className="members m-2  text-left">
      <div className="bhavna">Bhavna Makeovers</div>
      <div className="member-title pt-5">Members</div>
      <div className="searchbox pt-5 mx-4">
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
        </form>
      </div>
      <div className="membercard rounded p-2 mt-5 m-4">
        <div className="memberdetails d-flex">
          <div className="info d-flex">
            <img src={member} alt="error" className="rounded-pill" />{" "}
            <div className="creds p-2">
              <Link
            to="/membersdetail"
                className="name text-green f-16 cursor-pointer p-1 py-2"
              >
                Sumit Barmecha
              </Link>
              <div className="code px-1">74986</div>
              <div className="mailid px-1">sumitbarmecha12@gmail.com</div>
              <div className="phno px-1">7498612751</div>
            </div>
          </div>
          <div className="numbers p-2 f-14">
            <div className="appointment">
              <div className="total">Total Appointments</div>{" "}
              <div className="number text-green">25</div>
              <div className="total">Total Orders</div>{" "}
              <div className="number text-green">15</div>
            </div>
          </div>
          <div className="values p-2 px-5 f-14">
            <div>value</div>
            <div className="int text-green">15,000</div>
            <div>value</div>
            <div className="int text-green">35,000</div>
          </div>
        </div>
        <div className="members-dob f-14">
          <div>Date of Birth</div>
          <div className="dob text-green">27-may-2002</div>
        </div>
      </div>
    </div>
  );
};

export default Members;
