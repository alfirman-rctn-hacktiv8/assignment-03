import React, { useState } from "react";
import Data from "./components/Data";
import Footer from "./components/Footer";
import { Github, Theme } from "./components/Icon";

function App() {
  const [isDark, setDark] = useState(true);
  const transitionTheme = {
    transition: "all .5s ease",
    WebkitTransition: "all .5s ease",
    MozTransition: "all .5s ease",
  };
  return (
    <div
      style={transitionTheme}
      className="h-screen w-screen flex flex-col justify-center items-center relative dark:bg-gray-900 bg-gray-50"
    >
      <header className="absolute top-0 right-0 flex p-1">
        <Theme isDark={isDark} setDark={setDark} />
        <Github />
      </header>
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
          <Data />
        </tbody>
      </table>
      <p className="text-sm mt-6 text-gray-500 dark:text-gray-300">
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
      <Footer />
    </div>
  );
}

export default App;
