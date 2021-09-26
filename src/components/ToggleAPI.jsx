import React, { useState } from "react";
import data from "../../data.json";

const ToggleAPI = ({ setRates }) => {
  const [isCheck, setCheck] = useState(false);

  const fetchData = () => {
    fetch(
      "http://api.exchangeratesapi.io/latest?access_key=1e529c233f13fc53c4674019dfc15379"
    )
      .then((res) => res.json())
      .then((result) => setRates(result.rates))
      .catch((e) => console.log("error", e));
  };

  const toggleAPI = () => {
    if (!isCheck) {
      fetchData();
      setCheck(true);
    } else {
      setRates(data);
      setCheck(false);
    }
  };
  return (
    <div className="mt-1">
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition ease-in">
        <input
          onClick={() => toggleAPI()}
          type="checkbox"
          name="toggle"
          id="toggle"
          className={`${
            isCheck ? "right-0 border-green-400" : "right-4"
          } absolute block w-6 h-6 rounded-full border-4 appearance-none cursor-pointer bg-white duration-200`}
        />
        <label
          htmlFor="toggle"
          className={`${
            isCheck ? "bg-green-400" : "bg-gray-300"
          } block overflow-hidden h-6 rounded-full cursor-pointer`}
        ></label>
      </div>
      <label htmlFor="toggle">fetch API</label>
    </div>
  );
};

export default ToggleAPI;
