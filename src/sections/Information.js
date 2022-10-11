import React from "react";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import FormData from "../components/Form";

export default function Information() {
  return (
    <div className="mt-24 sm:px-8 md:mt-28">
      <div className="mx-auto max-w-7xl lg:px-12">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto lg:max-w-5xl">
            <div className="grid max-w-xl grid-cols-1 mx-auto gap-y-20 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col gap-16 ">
                <Skills/>
              </div>
              <div className="space-y-10 lg:pl-16 xl:pl-24">
                <Experience/>
                <FormData />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
