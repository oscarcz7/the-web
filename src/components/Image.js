import React from "react";

function ImageLeft() {
  return (
    <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl -rotate-2">
      <img
        className="absolute inset-0 object-cover w-full h-full"
        loading="lazy"
        sizes="(min-width: 640px) 18rem, 11rem"
        srcSet="
        https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"
      />
    </div>
  );
}
function ImageRight() {
  return (
    <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl rotate-2">
      <img
        className="absolute inset-0 object-cover w-full h-full"
        loading="lazy"
        sizes="(min-width: 640px) 18rem, 11rem"
        srcSet="
        https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"
      />
    </div>
  );
}

export  {ImageLeft, ImageRight}
