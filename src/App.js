import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ReactLoading from "react-loading";
import HomePage from "./pages/Home.page";
import Loading from "./components/Loading";
import Switcher from "./components/Switcher";

function App() {
  const coding = false;
  const color = "#B5C2B7";
  return (
    <>
      {coding ? (
        <Loading type="spinningBubbles" color={color} />
      ) : (
        <div className="flex flex-col h-full bg-zinc-50 dark:bg-black">
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
            </div>
          </div>
          <div className="relative">
            <Navbar />
            <HomePage />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
