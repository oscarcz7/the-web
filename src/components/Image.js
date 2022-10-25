import React from "react";

function ImageLeft(props) {
  return (
    <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
      <img
        className="absolute inset-0 object-cover w-full h-full"
        loading="lazy"
        sizes="(min-width: 640px) 18rem, 11rem"
        srcSet={props.url}
        alt=""
      />
    </div>
  );
}
function ImageRight(props) {
  return (
    <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
      <img
        className="absolute inset-0 object-cover w-full h-full"
        loading="lazy"
        sizes="(min-width: 640px) 18rem, 11rem"
        srcSet={props.url}
        alt=""
      />
    </div>
  );
}

export { ImageLeft, ImageRight };
