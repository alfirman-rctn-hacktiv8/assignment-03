import React from "react";

const Data = ({ rates }) => {
  const children = [];
  const displayedCurrencies = ["CAD", "IDR", "JPY", "CHF", "EUR", "USD"];

  const prettyCurrency = (crr, action) => {
    if (action === 0) crr -= (2.5 / 100) * crr; // we buy  -2.5%
    if (action === 1) crr += (2.5 / 100) * crr; // we sell +2.5%

    let fixedCrr = crr.toFixed(4).toString();
    while (fixedCrr.length < 8) {
      fixedCrr = "0" + fixedCrr;
    }

    return fixedCrr;
  };

  for (const key in rates) {
    if (rates.hasOwnProperty(key) && displayedCurrencies.includes(key)) {
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
  return children;
};

export default Data;
