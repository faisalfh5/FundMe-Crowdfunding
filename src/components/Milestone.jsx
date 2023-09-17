import React from "react";
import "../App.css";
import "../cssfiles/responsivefront.css";
import { milstonedata } from "../constants";
import CountUp from 'react-countup';

const Milestone = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="why-choose-col">
            <h5 className="common-h5">WHY CHOOSE US</h5>
            <h2 className="common-h2">Highest Success Rates 💰</h2>
            <p>
              FundMe can offer entrepreneurs a way to start raising money needed
              to start a business, speed up the product development process, or
              fund business growth with access to a network of potential
              investors and customers We enables fundraisers to collect money
              from a large number of people via online platforms. FundMe
              platform is most often used by startup companies or growing
              businesses as a way of accessing alternative funds. We provides an
              innovative way of sourcing funding for new projects, businesses or
              ideas.
            </p>
            <button className="common-btn" type="button">
              Contact Us
            </button>
          </div>

          {milstonedata.map((data) => (
            <div className="count-col">
              <div className="stat">
                <div className="count-sub-col">
                  <div className="milestone-counter">
                    <span className="state-count highlight">
                      <CountUp start={0} end={data.count} duration={3} />
                    </span>
                    <div className="milestone-details"> {data.paragraph}</div>
                  </div>
                </div>
              </div>
              <div className="stat-info-par">
                <div className="stat-info-sub-par">
                  <div className="stat-info-div">
                    <p>{data.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="clear"></div>
        </div>
      </section>
    </>
  );
};

export default Milestone;
