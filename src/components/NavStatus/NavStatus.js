import React from "react";
import "./NavStatus.css";

class NavStatus extends React.Component {
  state = {
    status: ""
  };

  componentWillReceiveProps({ score, topScore }) {
    const newState = { };
    if (score === 0 && topScore === 0) {
      newState.status = "";
    } else if (score === 0 && topScore > 0) {
      newState.status = "wrong";
    } else {
      newState.status = "right";
    }
    
  }

  renderStatus = () => {
    if (this.state.status === "right"){
      return "Correct!"
    }
    else if (this.state.status === "wrong"){
      return "You missed!"
    }
    else {
      return "Click on character to save...!";
    }
  };

  render() {
    return (
      <li className={this.state.status}>
        {this.renderStatus()}
      </li>
    );
  }
}

export default NavStatus;
