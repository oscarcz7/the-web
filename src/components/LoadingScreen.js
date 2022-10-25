import React from "react";

export default function LoadingScreen() {
  return (
    <div className="grid h-screen place-items-center">
      <img
        className="m-auto"
        src="https://www.intentionalkreative.com/static/media/loading-animation.0d7bc8dd.gif"
      ></img>
      <p className="mx-auto text-xl antialiased text-sky-700 sm:text-5xl animate-bounce">
        HI THERE, THANKS FOR BEING HERE !
      </p>
    </div>
  );
}
