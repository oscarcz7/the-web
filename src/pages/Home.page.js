import React from "react";
import Avatar from "../components/Avatar";

import PersonalCard from "../components/PersonalCard";
import Gallery from "../sections/Gallery";
import Information from "../sections/Information";


export default function HomePage() {
  return (
    <main>
      <Avatar/>
      <PersonalCard/>
      <Gallery  />
      <Information/>
    </main>
  );
}
