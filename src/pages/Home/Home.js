import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import Name from "../../components/Name/Name";
import Footer from "../../components/Footer/Footer";
import PortfolioItems from "../../components/PortfolioItems/PortfolioItems";
import About from "../../components/About/About";

class Home extends Component {
  
  render() {
    return (
      <div>
        <div className="page" id="landing-page">
          <Nav></Nav>
          <Name></Name>
          <Footer></Footer>
        </div>

        <div className="page" id="portfolio-page">
          <PortfolioItems></PortfolioItems>
        </div>

        <div className="page" id="about-me-page">
          <About></About>
        </div>
      </div>
    );
  }
}

export default Home;