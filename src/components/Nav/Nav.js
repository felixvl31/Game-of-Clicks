import React from "react";
import NavStatus from "../NavStatus/NavStatus.js";
import "./Nav.css";

const Nav = props => (
  <>
  <nav className="navbar navbar-expand justify-content-between">
  <a className="nav-brand" href="/">Game of Clicks</a>
    <ul className="navbar-nav">
      <li className="nav-item">
        Points: {props.score} | Top Score: {props.topScore}
      </li>
    </ul>
      <NavStatus score={props.score} topScore={props.topScore} />
  </nav>
    <header className="header" style={{ backgroundImage: `url("./assets/images/pattern.png")` }}>>
    <h1>Click Game!</h1>
    <h2>
      Click on an character to save,<br/> if you click twice on the same character...Game Over!!
    </h2>
  </header>
  </>
);



export default Nav;
