import React from "react";

const Loading = ({ isLoading }) =>
  isLoading && (
    <div
      className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center"
      style={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="bg-white border py-2 px-5 rounded-lg flex items-center flex-col">
        <div className="loader-dots block relative w-20 h-5 mt-2">
          <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500" />
          <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500" />
          <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500" />
          <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500" />
        </div>
        <p className="text-gray-500 text-xs font-light mt-2 text-center">
          Loading...
        </p>
      </div>
    </div>
  );

export default Loading;
