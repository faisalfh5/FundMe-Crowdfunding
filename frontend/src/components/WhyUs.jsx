import React from "react";
import "../cssfiles/responsivefront.css";
import "../App.css";
import { chooseup } from "../constants";
import { Chooseus } from "../components";

function Getchoose(value) {
  return (
    <Chooseus
      start={value.start}
      tagline={value.tagline}
      paragraph={value.paragraph}
    />
  );
}

const WhyUs = () => {
  return (
    <>
      <section id="why-choose-us">
        <div className="container">{chooseup.map(Getchoose)}</div>
        <div className="count-col">
          <div className="stat">
            <div className="count-sub-col"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
