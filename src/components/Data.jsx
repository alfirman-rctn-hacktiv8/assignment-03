import React, { useEffect, useState } from "react";

const Data = () => {
  const [rates, setRates] = useState({});

  const children = [];
  const displayedCurrencies = ["CAD", "IDR", "JPY", "CHF", "EUR", "USD"];

  useEffect(() => {
    const fetchData = () => {
      fetch(
        "http://api.exchangeratesapi.io/latest?access_key=1e529c233f13fc53c4674019dfc15379"
      )
        .then((res) => res.json())
        .then((result) => setRates(result.rates))
        .catch((e) => console.log("error", e));
    };
    fetchData();
  }, []);

  const prettyCurrency = (crr, action) => {
    if (action === 0) crr = (crr * 102) / 100;
    if (action === 1) crr = (crr * 98) / 100;

    let fixedCrr = crr.toFixed(4).toString();
    while (fixedCrr.length < 8) {
      fixedCrr = "0" + fixedCrr;
    }

    return fixedCrr;
  };

  for (const key in rates) {
    if (displayedCurrencies.includes(key)) {
      children.push(
        <tr
          key={displayedCurrencies.indexOf(key)}
          className={`flex justify-evenly ${
            displayedCurrencies.indexOf(key) % 2 === 0 && "bg-gray-100"
          }`}
        >
          <td className="py-1 flex-1 hidden sm:block">
            <img
              className="mx-auto"
              src={`https://www.countryflags.io/${key.slice(
                0,
                -1
              )}/flat/32.png`}
            ></img>
          </td>
          <td className="py-1 flex-1 flex items-center justify-center">
            {key}
          </td>
          <td className="py-1 flex-1 flex items-center justify-center">
            {prettyCurrency(rates[key], 0)}
          </td>
          <td className="py-1 flex-1 flex items-center justify-center">
            {prettyCurrency(rates[key])}
          </td>
          <td className="py-1 flex-1 flex items-center justify-center">
            {prettyCurrency(rates[key], 1)}
          </td>
        </tr>
      );
    }
  }
  return [<div>heyah</div>,<div>sadasasd</div>];
};

export default Data;
