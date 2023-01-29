import React from "react";

const PetrolInput = () => {
  return (
    <div>
      <div className="input-group m-3 gun-input">
        <input
          type="text"
          className="form-control "
          placeholder="unit in liters"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <span className="input-group-text" id="basic-addon2">
          GUN 1
        </span>
      </div>
      <div className="input-group m-3 gun-input">
        <input
          type="text"
          className="form-control "
          placeholder="unit in liters"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <span className="input-group-text" id="basic-addon2">
          GUN 2( in liters)
        </span>
      </div>
    </div>
  );
};

export default PetrolInput;
