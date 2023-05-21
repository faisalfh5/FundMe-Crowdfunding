import React from 'react';
import "../App.css";
import "../cssfiles/responsivefront.css";

const Footer = () => {
  return (
    <>
    <footer>
        <div className="container">
            <div className="footer-col">
                <h4>About us</h4>
                <p>FundMe can offer entrepreneurs a way to start raising money needed
              to start a business .FundMe
              platform is most often used by startup companies or growing
              businesses as a way of accessing alternative funds. We provides an
              innovative way of sourcing funding for new projects, businesses or
              ideas.</p>
              <div className="social-icons-footer">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-youtube"></i>
              </div>
            </div>
            <div className="footer-col footer-2-col">
                <h3>Quick Links</h3>
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Start Investion</li>
                    <li>Dashboard</li>
                </ul>
            </div>
            <div className="footer-col">
                <h3>Contact Us</h3>
                <p><i class="fa-solid fa-envelope"></i><span>fundme@gmail.com</span></p>
                <p><i class="fa-solid fa-phone"></i><span>0309-4638808</span></p>
                <p><i class="fa-solid fa-map"></i><span>Superior University, Raiwind Road</span></p>
            </div>
            <div className="clear"></div>
            <hr className='footer-hr'/>
            <p className='copyright-footer'> 2023-FundMe. All copy Rights Reserved</p>
        </div>
    </footer>
    </>
  )
}

export default Footer;