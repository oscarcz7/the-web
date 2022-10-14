import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ type, color }) => (
  <div className="grid h-screen place-items-center">
    <ReactLoading type={type} color={color} height={"20%"} width={"20%"} />
    <p className="font-serif text-2xl antialiased text-teal-900 animate-bounce">
      Coding this with React and Tailwind
    </p>
  </div>
);

export default Loading;
