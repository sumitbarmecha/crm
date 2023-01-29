import React, { useState } from "react";
import "../CSS/home.css";
import { Link } from "react-router-dom";
const Home = () => {
  // const [fetchdata, setFetchdata] = useState([])
  // const url =
  //   "https://daily-petrol-diesel-lpg-cng-fuel-prices-in-india.p.rapidapi.com/v1/fuel-prices/highest/petrol/today/india/cities";
  // const [fuel, setFuel] = useState("/petrol");
  // const clickfuel = () => {};
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "e3dc3850abmsh6d7c90e80a77609p15ffd6jsn19c20a4e2e7d",
  //     "X-RapidAPI-Host":
  //       "daily-petrol-diesel-lpg-cng-fuel-prices-in-india.p.rapidapi.com",
  //   },
  // };
  // // 207
  // fetch(url, options)
  //   .then((res) => res.json())
  //   .then((json) => console.log(json))
  //   .catch((err) => console.error("error:" + err));
  // console.log(fetchdata)

  const [contactData, setcontactData] = useState([
    {
      GUN1petrol: 10,
      GUN2petrol: 10,
      GUN1deisel: 10,
      GUN2deisel: 10,
    },
  ]);


  const handleInputs = (e) => {
    const { name, value } = e.target;

    setcontactData({
      ...contactData,
      [name]: value,
    });
    console.log(value);
  };

  const [total, setTotal] = useState([]);

  const URL = "";
  const feedbackform = async (e) => {
    e.preventDefault();

    const { GUN1petrol, GUN2petrol, GUN1deisel, GUN2deisel } = contactData;
    // try {
    //   const res = await fetch(`${URL}post-feedback`, {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       GUN1petrol: GUN1petrol,
    //       GUN2petrol: GUN2petrol,
    //       GUN1deisel: GUN1deisel,
    //       GUN2deisel: GUN2deisel,
    //     }),
    //   });

    //   const data = await res.json();
    //   console.log(data);
    //   if (data === "") {
    //     console.log("msg not sent");
    //   } else {
    //     alert("message sent");
    //     setcontactData({
    //       ...contactData,
    //       GUN1petrol: "",
    //       GUN2petrol: "",
    //       GUN1deisel: "",
    //       GUN2deisel: "",
    //     });
    //   }
    setcontactData({
      ...contactData,
      GUN1petrol: contactData.GUN1petrol,
      GUN2petrol: contactData.GUN2petrol,
      GUN1deisel: contactData.GUN1deisel,
      GUN2deisel: contactData.GUN2deisel,
    });
    // } catch (err) {
    //   console.log(err);

    // }
  };
  const sum=(obj)=> {
    var sum = 0;
    for (var el in obj) {
      if (obj.hasOwnProperty(el)) {
        sum += parseFloat(obj[el]);
      }
    }
    return sum;
  }
  const gettotal = (e) => {
    e.preventDefault();
    console.log(contactData)
    const values = contactData[0];

    console.log(values)


  console.log(sum(values));
  };



  // console.log(values)
  return (
    <div className="container m-5 d-flex  home">
      <form onSubmit={gettotal} className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <button className="nav-link active" aria-current="true">
                Petrol
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Diesel</button>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
        <div className="card-body PETROL">
          <label htmlFor="">petrol </label>
          <div className="input-group m-3 gun-input">
            <input
              type="tel"
              name="GUN1petrol"
              className="form-control "
              placeholder="unit in liters"
              onChange={handleInputs}
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text" id="basic-addon2">
              GUN 1
            </span>
          </div>
          <div className="input-group m-3 gun-input">
            <input
              type="number"
              name="GUN2petrol"
              className="form-control "
              onChange={handleInputs}
              placeholder="unit in liters"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text" id="basic-addon2">
              GUN 2( in liters)
            </span>
          </div>
        </div>
        <div className="card-body DEISEL">
          <label htmlFor="">deisel</label>
          <div className="input-group m-3 gun-input">
            <input
              type="number"
              name="GUN1deisel"
              className="form-control "
              onChange={handleInputs}
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
              type="number"
              name="GUN2deisel"
              className="form-control "
              onChange={handleInputs}
              placeholder="unit in liters"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text" id="basic-addon2">
              GUN 2( in liters)
            </span>
          </div>
        </div>
        <input className="btn btn-primary" type="submit" value="submit" />
      </form>
      <div className="calculation m-5">
        <div class="card">
          <div class="card-body">
            <div className="number">{gettotal}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
