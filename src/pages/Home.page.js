import React from "react";
import Avatar from "../components/Avatar";
import Navbar from "../components/Navbar";
import PersonalCard from "../components/PersonalCard";
import Gallery from "../sections/Gallery";


export default function HomePage() {
  return (
    <div>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-6">
          <div className="w-full shadow-lg ring-1 ring-zinc-100 ">
            <Navbar />
            <Avatar/>
            <PersonalCard/>
            <Gallery />
          </div>
        </div>
      </div>
    </div>
  );
}
