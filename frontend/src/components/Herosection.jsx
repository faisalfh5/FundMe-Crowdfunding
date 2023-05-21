import React from 'react';
import "../App.css";
import { lo } from "../assets";
import { navlinks } from "../constants";
import jQuery from "jquery";
import $ from "jquery";

import "../cssfiles/responsivefront.css";
import  Typewriter from 'typewriter-effect';
import { Corner_img } from '../assets';

const Herosection = () => {
  return (
    <>
    
    <section className="header-bg-parent">
      
     <div className='header-col1'>
      <h5 className='txtcolor'>WELCOME to</h5>
      <h2 className='txtcolor'>FundMe</h2>
      <h2 className='txtcolor'>
        <Typewriter options={{
          autoStart: true,
          loop:true,
          delay:40,
          strings:[
            "Crowdfunding Platform",
            "Start Investing",
            "Raise Money "
          ]
        }}/>
      </h2>
      <p className='txtcolor'>Raising Money Has Never Been So Easy.</p>
        <button className='common-btn'>Start a project</button>
      </div> 
        <div className='header-col2'>
            
        </div>
        <div className='clear'></div>
        <img src={Corner_img}  className="image-responsive hedaer-bg-par-img" alt='corner'/>
        </section>
    
    
    </>
  )
}

export default Herosection