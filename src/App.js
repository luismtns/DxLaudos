import React, { useEffect } from "react";
import "./App.scss";

import AboutUs from "./containers/about-us";
import ContactUs from "./containers/contact-us";
import Header from "./containers/header";
import Portfolio from "./containers/portfolio";
import Presentation from "./containers/presentation";
import UsServices from "./containers/us-services";

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <AboutUs />
      <UsServices />
      <Portfolio />
      <ContactUs />
    </div>
  );
}

export default App;
