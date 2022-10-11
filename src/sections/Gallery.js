import React from "react";
import { ImageRight, ImageLeft } from "../components/Image";
import { images } from "../utils/data";
export default function Gallery() {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="flex justify-center gap-5 py-4 -my-4 overflow-hidden sm:gap-8">
        <ImageRight url={images.first} />
        <ImageLeft url={images.second} />
        <ImageLeft url={images.fifth} />
        <ImageRight url={images.fourth} />
        <ImageLeft url={images.second} />
        <ImageRight url={images.third} />
      </div>
    </div>
  );
}
