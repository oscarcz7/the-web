import React from "react";
import {ImageRight, ImageLeft} from "../components/Image";

export default function Gallery() {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="flex justify-center gap-5 py-4 -my-4 overflow-hidden sm:gap-8">
        <ImageRight  />
        <ImageLeft  />
        <ImageRight  />
        <ImageLeft  />
        <ImageRight  />
        <ImageLeft  />
      </div>
    </div>
  );
}
