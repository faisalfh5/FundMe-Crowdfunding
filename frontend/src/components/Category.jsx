import React from 'react';
import "../cssfiles/responsivefront.css";
import { categorylinks } from "../constants";
import {Categorysectiondata } from "../components";
function Getcategory(value) {
    return (
      <Categorysectiondata
        title={value.title}
        imgsrc={value.imgsrc}
        explanation={value.explanation}
      />
    );
  }
const Category = () => {
  return (
    <>
    <section id="category_sec">
        <div className="text-center">
          <h5 className="common-h2">Top Categories</h5>
          <h2 className="common-h2">Which Category Interest You</h2>
        </div>
        
        <div className="category-col-par ">
          <div className="container ">{categorylinks.map(Getcategory)}</div>
          <div className="clear"></div>
        </div>
      </section>
        
    
    
    </>
  );
}

export default Category;