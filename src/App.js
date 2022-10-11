import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import HomePage from "./pages/Home.page";

function App() {
  return (
    <div className="flex flex-col h-full bg-zinc-50">
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 "></div>
        </div>
      </div>
      <div className="relative">
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
