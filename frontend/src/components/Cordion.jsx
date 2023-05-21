import React, { useState } from "react";
import { Accordionque } from "../constants";
import { Homefaq } from "../assets";
import "../App.css";
import "../cssfiles/responsivefront.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  Typewriter from 'typewriter-effect';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
// import "react-accessible-accordion/dist/fancy-example.css";

const Cordion = () => {
  return (
    <>
      <section id="faq-par">
        <div className="container">
          <div className="faq-que-col">
            <h5 className="common-h5">Experience</h5>
            <h2 className="common-h2">World is Full with Creativity</h2>

            {Accordionque.map((data) => (
              <Accordion className="accordion ">
                <AccordionItem className="accordion__item">
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordion__button">
                      {data.question}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>{data.answer}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
          <div className="faq-bg-col">
            <div className="faq-img-par">
              <img src={Homefaq} alt="homefaq" className="img-responsive" />
              <div className="faq-img-info">
                <i class="fa-light fa-lightbulb-on"></i>
                <h2>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      strings: [
                        "Project in your mind!",
                        "Get Investment",
                        "Fulfilled Your dreams ",
                        "Let's get funding"
                      ],
                    }}
                  />
                </h2>
                <p>Find out how you get funding</p>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </section>
    </>
  );
};

export default Cordion;
