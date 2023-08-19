import React from "react";
import { footerStyle } from "./style";
import { Link } from "react-router-dom";
import siteLogo from "../../assets/images/site-logo.svg";

export const Footer = () => {
  const classes = footerStyle();

  return (
    <div className={classes.footerWrapper}>
      <footer className="site-footer" id="footer">
        <div className="bottom-footer">
          <div className="container">
            <div className="text-center">
              <div className="footer-logo">
                {/* <Link to="/" title="logo">
                  <img src={siteLogo} alt="sitelogo" />
                </Link> */}
                <p style={{color:"red",fontFamily:"Arial",fontSize:"30px"}}>BOOKSTORE</p>
              </div>
              <p className="copyright-text" style={{color:"black"}}>
                © Bookstore.com. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
