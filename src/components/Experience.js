import React from "react";

export default function Experience() {
  return (
    <div className="p-6 border rounded-2xl border-zinc-100 ">
      <h2 className="flex text-sm font-semibold text-zinc-900 ">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="flex-none w-6 h-6"
        >
          <path
            d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
            className="fill-zinc-100 stroke-zinc-400 "
          ></path>
          <path
            d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
            className="stroke-zinc-400 "
          ></path>
        </svg>
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        <li className="flex gap-4">
          <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 ">
            <img
              alt=""
              src="https://krugercorp.com/wp-content/uploads/2022/02/logo_kruger_.png"
              width="32"
              height="32"
              decoding="async"
              data-nimg="future"
              className="h-7 w-7"
              loading="lazy"
            />
          </div>
          <dl className="flex flex-wrap flex-auto gap-x-2">
            <dd className="flex-none w-full text-sm font-medium text-orange-600 ">
              Kruger Corp.
            </dd>
            <dd className="text-xs text-zinc-500 ">
              Fullstack technical consultant
            </dd>
            <br />
            <dd className="text-xs text-zinc-500 ">React | Nest js</dd>

            <dd
              className="ml-auto text-xs text-zinc-400"
              aria-label="2019 until Present"
            >
              <time dateTime="2019">2022</time>
              <span aria-hidden="true">—</span>
              <time dateTime="2022">Present</time>
            </dd>
          </dl>
        </li>
        <li className="flex gap-4">
          <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 ">
            <img
              alt=""
              src="https://krugercorp.com/wp-content/uploads/2022/02/logo_kruger_.png"
              width="32"
              height="32"
              decoding="async"
              data-nimg="future"
              className="h-7 w-7"
              loading="lazy"
            />
          </div>
          <dl className="flex flex-wrap flex-auto gap-x-2">
            <dd className="flex-none w-full text-sm font-medium text-orange-600 ">
              Verndale
            </dd>
            <dd className="text-xs text-zinc-500 ">
              {" "}
              Sitecore Content Entry Specialist
            </dd>
            <dd
              className="ml-auto text-xs text-zinc-400"
              aria-label="2019 until Present"
            >
              <time dateTime="2019">2022</time>
              <span aria-hidden="true">—</span>
              <time dateTime="2022">Present</time>
            </dd>
          </dl>
        </li>
      </ol>
      <a
        className="inline-flex items-center justify-center w-full gap-2 px-3 py-2 mt-6 text-sm font-medium transition rounded-md outline-offset-2 active:transition-none bg-zinc-50 text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 group"
        href="/#"
      >
        Download CV
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="w-4 h-4 transition stroke-zinc-400 group-active:stroke-zinc-600 "
        >
          <path
            d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </a>
    </div>
  );
}
