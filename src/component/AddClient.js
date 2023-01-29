import React from "react";
import "../CSS/client.css";
import "../CSS/members.css";
const AddClient = () => {
  return (
    <div className=" m-2  text-left">
      <div className="bhavna">Bhavna Makeovers</div>
      <div className="member-title pt-5">Add New Client</div>
      <div className="addclient-form">
        {" "}
        <div className="clientform pt-5 mx-4">
          <form class="form-inline d-flex row">
          <input
              class="form-control m-3 mr-sm-2"
              type="name"
              placeholder="name"
              aria-label="name"
            /><input
              class="form-control m-3 mr-sm-2"
              type="Email"
              placeholder="Email"
              aria-label="Email"
            /><input
              class="form-control m-3 mr-sm-2"
              type="Phone No."
              placeholder="Phone No."
              aria-label="Phone No."
            /><input
              class="form-control m-3 mr-sm-2"
              type="Date of Birth"
              placeholder="Date of Birth"
              aria-label="Date of Birth"
            />
            <button class="btn btn-outline-success my-2 " type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClient;
