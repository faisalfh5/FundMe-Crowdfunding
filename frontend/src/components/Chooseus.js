import React from "react";
import "../App.css";
import "../cssfiles/responsivefront.css";
const Chooseus = (props) => {
  return (
    <>
      <div className="why-choose-col">
        <h5 className="common-h5">{props.start}</h5>
        <h2 className="common-h2">{props.tagline}</h2>
        <p>{props.paragraph}</p>
        <button className="common-btn">Contact Us</button>
      </div>
    </>
  );
};

export default Chooseus;
