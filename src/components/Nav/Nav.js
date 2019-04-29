import React from "react";
import NavStatus from "../NavStatus/NavStatus.js";
import "./Nav.css";

const Nav = props => (
  <>
  <div className="row align-items-center nav">
    <span className="col-12 col-md-4 title" href="/">Game of Clicks</span>
    <NavStatus score={props.score} topScore={props.topScore} />
    <span className="col-12 col-md-4 points">Points: {props.score} | Top Score: {props.topScore}</span>
  </div>
    <header className="header" style={{ backgroundImage: `url("./assets/images/pattern.png")` }}>
    <h1>Click Game!</h1>
    <h2>
      Click on an character to save,<br/> if you click twice on the same character...Game Over!!
    </h2>
  </header>
  </>
);



export default Nav;
