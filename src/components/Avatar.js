import React from "react";

export default function Avatar() {
  return (
    <div className="mx-auto max-w-7xl lg:px-8">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto mt-4 lg:max-w-5xl">
          <div className="relative">
            <img
              className="inline-block w-16 h-16 mt-10 rounded-full ring-2 ring-white"
              src="./oecz.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
