import React from "react";

const Description = ({ setActiveCurrency, activeCurrency, currencies }) => {
  return (
    <p>
      * base currency is{" "}
      {currencies.map((crr, index) => (
        <span
          onClick={() => setActiveCurrency(crr)}
          className={`${
            activeCurrency === crr
              ? "text-green-500 dark:text-green-300"
              : "text-gray-300 dark:text-gray-600"
          } cursor-pointer`}
          key={index}
        >
          {" "}
          {crr}
        </span>
      ))}
      <br />* As for the API ,&nbsp;
      <a
        className="hover:underline"
        href="https://exchangeratesapi.io/"
        target="_blank"
        rel="noreferrer"
      >
        https://exchangeratesapi.io/
      </a>
      &nbsp;is used.
    </p>
  );
};

export default Description;
