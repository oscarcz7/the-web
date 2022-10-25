import { CheckBadgeIcon, CpuChipIcon } from "@heroicons/react/24/solid";
import React from "react";
import { skills } from "../utils/data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="mb-10 text-center">
          <CpuChipIcon className="inline-block w-10 mb-4 dark:stroke-slate-50" />
          <h1 className="mb-4 text-3xl font-medium text-sky-600 dark:text-sky-500 sm:text-4xl title-font">
            Skills &amp; Technologies
          </h1>
          <p className="mx-auto text-base leading-relaxed xl:w-2/4 lg:w-3/4 text-zinc-600 dark:text-zinc-400">
            This are my skills.... working on this
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill} className="w-auto py-2">
              <div className="flex items-center p-5 shadow-md bg-slate-100 dark:bg-slate-200 rounded-xl">
                <CheckBadgeIcon className="flex-shrink-0 w-6 h-6 mr-1 text-green-400" />
                <span className="text-sm font-medium text-sky-900 ">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
