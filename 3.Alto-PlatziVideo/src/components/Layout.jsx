import React from "react";

/*
 * Components
 */
import Footer from "./Footer.jsx";

const Layout = ({ children }) => (
  <div className="App">
        {children}
    <Footer />
  </div>
);

export default Layout;
