import React from "react";

export default function FormData() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "test", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }
  return (
    <div>
      <form
        netlify
        name="test"
        onSubmit={handleSubmit}
        className="flex flex-col p-6 border shadow-xl rounded-2xl border-zinc-50 "
      >
        <h2 className="flex text-sm font-semibold sm:text-lg text-zinc-600 dark:text-zinc-400 ">
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
              d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
              className="fill-zinc-100 stroke-zinc-400 "
            ></path>
            <path
              d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
              className="stroke-zinc-400 "
            ></path>
          </svg>
          <span className="ml-3">Let me know anything!</span>
        </h2>
        <p className="mt-2 text-sm text-zinc-600 ">
          Send me a message and I will contact you asap! It would be a pleassure
          to be in contact!
        </p>
        <div className="relative mt-6 mb-4">
          <input
            type="text"
            placeholder="John Doe"
            required=""
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            className="flex-auto w-full px-3 py-[calc(theme(spacing.2)-1px)] leading-8 transition-colors  placeholder:text-slate-200  bg-white  shadow-md rounded-xl  "
          />
        </div>

        <div className="relative mb-4">
          <input
            type="email"
            placeholder="john-doe@mail.com"
            required=""
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="flex-auto w-full px-3 py-[calc(theme(spacing.2)-1px)] leading-8 transition-colors  placeholder:text-slate-200  bg-white  shadow-md rounded-xl  "
          />
        </div>
        <div className="relative mb-4">
          <textarea
            required=""
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-32 px-3 py-1 leading-8 shadow-md resize-none rounded-xl "
          />
        </div>

        <button
          className="inline-flex items-center justify-center w-full gap-2 px-3 py-2 mt-6 text-sm font-medium transition rounded-md outline-offset-2 active:transition-none bg-zinc-100 text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}
