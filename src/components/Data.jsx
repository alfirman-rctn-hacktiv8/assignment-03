import React from "react";

const Data = ({ rates, activeCurrency, currencies }) => {
  const children = [];

  const formatCurrency = (crr, action) => {
    crr /= rates[activeCurrency];
    if (action === 0) crr -= (2.5 / 100) * crr; // we buy  -2.5%
    if (action === 1) crr += (2.5 / 100) * crr; // we sell +2.5%

    const fixedCrr = crr.toFixed(6).toString();

    return fixedCrr;
  };

  for (const key in rates) {
    if (rates.hasOwnProperty(key) && currencies.includes(key)) {
      children.push(
        <tr
          key={currencies.indexOf(key)}
          className={`flex justify-evenly ${
            currencies.indexOf(key) % 2 === 0 && "bg-gray-100"
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
            {formatCurrency(rates[key], 0)}
          </td>
          <td className="py-1 flex-1 flex items-center justify-center">
            {formatCurrency(rates[key])}
          </td>
          <td className="py-1 flex-1 flex items-center justify-center">
            {formatCurrency(rates[key], 1)}
          </td>
        </tr>
      );
    }
  }
  return children;
};

export default Data;
