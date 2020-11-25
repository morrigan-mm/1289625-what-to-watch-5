import React from "react";
import Logo from "../logo/logo";

const Footer = () => {
  return (
    <footer className="page-footer">
      <Logo isModified />

      <div className="copyright">
        <p>© 2020 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
