import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Navbar() {
  return (
    <Popover className="h-16 pt-6 top-1 z-1">
      <div className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="max-w-2xl mx-auto lg:max-w-5xl">
              <div className="relative flex gap-4">
                <div className="flex flex-1"></div>
                {/* navbar content */}
                <div className="flex justify-end flex-1 md:justify-center">
                  <div className="pointer-events-auto md:hidden">
                    <Popover.Button className="flex items-center px-4 py-2 text-sm font-medium rounded-full shadow-lg group bg-white/90 text-zinc-800 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur ">
                      Menu
                      <Bars3Icon className="w-6 h-6 ml-2" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                  <Popover.Group
                    as="nav"
                    className="hidden pointer-events-auto md:block"
                  >
                    <ul className="hidden px-3 text-sm font-medium rounded-full shadow-lg md:flex bg-white/90 text-zinc-800 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur ">
                      <li>
                        <a
                          href="/"
                          className="relative block px-3 py-2 transition hover:text-teal-500 "
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="relative block px-3 py-2 transition hover:text-teal-500 "
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="relative block px-3 py-2 transition hover:text-teal-500 "
                        >
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </Popover.Group>
                </div>
                {/* Button mail */}
                <div className="flex justify-end md:flex-1">
                  <div className="pointer-events-auto">
                    <a
                      href="/"
                      className="inline-flex items-center justify-center h-10 p-2 overflow-hidden border rounded-full shadow-lg group"
                    >
                      <div
                        aria-hidden="true"
                        className="transition duration-300 -translate-y-4 w-7 group-hover:translate-y-4"
                      >
                        <div className="flex h-7">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.6}
                            stroke="currentColor"
                            className="w-5 h-5 m-auto hover:stroke-sky-700"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                            />
                          </svg>
                        </div>
                        <div className="flex h-7">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 m-auto hover:stroke-sky-700"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
        >
          <div className="fixed z-50 p-8 origin-top scale-100 bg-white shadow-lg opacity-100 inset-x-4 top-8 rounded-3xl ring-1 ring-zinc-900/5">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="w-auto h-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-y-4 gap-x-8">
              <a
                href="/"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Pricing
              </a>

              <a
                href="/"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Docs
              </a>
            </div>
            <div>
              <a
                href="/"
                className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
              >
                Sign up
              </a>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
