import React from "react";

const PortfolioItems = () => (
  <div className="port-container">
    <div className="portfolio-item" id="true-that"><a href="https://truethat.app" target="_blank" rel="noopener noreferrer">
            <div className="app-content">
                <p className="app-name">True That!</p>
                <hr></hr>
                <p className="app-description">Gif choosing party game</p>
            </div>
        </a></div>

        <div className="portfolio-item" id="friend-finder"><a href="https://friendfinder-kab.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <div className="app-content">
                <p className="app-name">Friend Finder</p>
                <hr></hr>
                <p className="app-description">Take a quiz to find your perfect friend</p>
            </div>
        </a></div>
            
        <div className="portfolio-item" id="node-liri"><a href="https://brothernk.github.io/liri_node_app/" target="_blank" rel="noopener noreferrer">
            <div className="app-content">
                <p className="app-name">Node Liri</p>
                <hr></hr>
                <p className="app-description">Command line application with various activities</p>
            </div>
        </a></div>

        <div className="portfolio-item" id="library"> <a href="https://personallibrary-kab.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <div className="app-content">
                <p className="app-name">Library App</p>
                <hr></hr>
                <p className="app-description">Keep track of books you've read and want to read</p>
            </div>
        </a></div>

        <div className="portfolio-item" id="spicy-burnz"><a href="https://brothernk.github.io/project_two/" target="_blank" rel="noopener noreferrer">
            <div className="app-content">
                <p className="app-name">Spicy Burnz</p>
                <hr></hr>
                <p className="app-description">Rate jokes and add your own</p>
            </div>
        </a></div>

        <div className="portfolio-item" id="trivia"><a href="https://brothernk.github.io/trivia_game/" target="_blank" rel="noopener noreferrer">
            <div className="app-content">
                <p className="app-name">Timed Trivia</p>
                <hr></hr>
                <p className="app-description">Learn about me in a quick round of trivia</p>
            </div>
        </a></div>

        <div className="portfolio-item" id="shindig"><a href="https://brothernk.github.io/my_shindig/." target="_blank" rel="noopener noreferrer">
            <div className="app-content">
                <p className="app-name">My Shindig</p>
                <hr></hr>
                <p className="app-description">Plan the perfect themed potluck and invite your friends</p>
            </div>
        </a></div>

        <div className="portfolio-item" id="misc"><a href="" target="_blank" rel="noopener noreferrer">
            <div className="app-content">
                <p className="app-name">Miscellaneous</p>
                <hr></hr>
                <p className="app-description">Illustrations and design projects I've created</p>
            </div>
        </a></div>
  </div>
)

export default PortfolioItems;