import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <p>
              &copy; Copyright {new Date().getFullYear()} . All Rights Reserved.
              Mahmoud Osman
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
