import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home.page";
import Loading from "./components/Loading";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const coding = false;
  const color = "#B5C2B7";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);
  return (
    <>
      {coding ? (
        <Loading type="spinningBubbles" color={color} />
      ) : loading === false ? (
        <div className="flex flex-col h-full font-mono bg-zinc-50 dark:bg-black">
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
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
