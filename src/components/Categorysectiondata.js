import React from "react";
import "../App.css";
import "../cssfiles/responsivefront.css";

const Categorysectiondata = (props) => {
  return (
    <>
      <a href={props.link}>
        <div className="category-col pointer">
          <h3>{props.title}</h3>
          <img src={props.imgsrc} alt="my_img" className="img-responsive" />
          <h4>{props.explanation}</h4>
        </div>
      </a>
    </>
  );
};

export default Categorysectiondata;
