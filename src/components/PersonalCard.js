import React from "react";
import { personalInformation, socialLinks } from "../utils/data";

export default function PersonalCard() {
  return (
    <div className="sm:px-8 mt-9">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-10">
          <div className="max-w-2xl mx-auto lg:max-w-5xl">
            <div className="max-w-2xl">
              <div className="text-lg tracking-tight text-zinc-600 dark:text-zinc-400">
                Hi, my name is
              </div>
              <div className="mt-6 text-xl sm:text-5xl text-sky-600 ">
                {personalInformation.name}
                <span className="text-zinc-600 dark:text-zinc-400"> .</span>
              </div>
              <div className="mt-6 text-sm sm:text-3xl text-sky-500 ">
                {personalInformation.information}
              </div>
              <div className="mt-6 text-xs sm:text-base text-zinc-600 dark:text-zinc-400">
                {personalInformation.description}
                <a
                  className="text-lg sm:text-xl text-sky-600"
                  href="https://krugercorp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {personalInformation.work}
                </a>
                <span className="text-zinc-600 dark:text-zinc-400"> !</span>
              </div>

              <div className="flex gap-6 mt-6">
                <a
                  className="p-1 -m-1 group"
                  aria-label="See my personal repository in Github"
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="w-10 h-10 transition fill-violet-500 group-hover:fill-violet-800"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                    ></path>
                  </svg>
                </a>
                <a
                  className="p-1 -m-1 group"
                  aria-label="Follow on LinkedIn"
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-10 h-10 transition fill-sky-500 group-hover:fill-sky-700 "
                  >
                    <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                  </svg>
                </a>
                <a
                  className="p-1 -m-1 group"
                  aria-label="Mail me"
                  href={socialLinks.mail}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 transition fill-red-500 group-hover:fill-red-700 stroke-slate-50"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
