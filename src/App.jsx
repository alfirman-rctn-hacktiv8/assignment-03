import React, { useState } from "react";
import data from "../data.json";
import { Github, Theme } from "./components/Icon";
import ToggleAPI from "./components/ToggleAPI";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Data from "./components/Data";

function App() {
  const [rates, setRates] = useState(data);
  const [isLoading, setLoading] = useState(false);

  const transitionTheme = {
    transition: "all .5s ease",
    WebkitTransition: "all .5s ease",
    MozTransition: "all .5s ease",
  };

  return (
    <div
      style={transitionTheme}
      className="min-h-screen min-w-screen dark:bg-gray-900 bg-gray-50 relative flex flex-col justify-between"
    >
      <header className="flex justify-end p-1">
        <Theme />
        <Github />
      </header>
      <main className="flex flex-col justify-center items-center my-14">
        <table className="w-11/12 md:w-3/4 lg:w-1/2 block text-center bg-white border dark:border-none text-sm sm:text-base">
          <thead className="block bg-gray-800 text-white py-2">
            <tr className="flex justify-evenly">
              <th className="flex-1 hidden sm:block">country </th>
              <th className="flex-1">currency </th>
              <th className="flex-1">we buy</th>
              <th className="flex-1">exchange rate</th>
              <th className="flex-1">we sell</th>
            </tr>
          </thead>
          <tbody className="block font-semibold text-gray-800">
            <Data rates={rates} />
          </tbody>
        </table>
        <div className="text-sm mt-6 text-gray-500 dark:text-gray-300">
          <p>
            * base currency is EUR
            <br />* As for the API,&nbsp;
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
          <ToggleAPI setRates={setRates} setLoading={setLoading} />
        </div>
      </main>
      <Loading isLoading={isLoading} />
      <Footer />
    </div>
  );
}

export default App;
