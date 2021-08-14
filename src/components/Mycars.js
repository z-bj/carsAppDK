import React, { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {
  noCopy = () => {
    alert("merci de ne pas copier le texte");
  };

  addStyle = (e) => {
    // target allow to follow which element toggles the event
    //e.target.classList.toggle("styled"); //*! toggle remplace la logique du bloc if on utilise l'un ou l'autre.
    //  if (e.target.classList.contains("styled")) {
    //   e.target.classList.remove("styled");
    // } else {
    //   e.target.classList.add("styled");
    // }
  };

  render() {
    return (
      <div>
        <h1 onMouseOver={this.addStyle}>{this.props.title}</h1>
        <p onCopy={this.noCopy}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>

        <Car color="red">Ford</Car>
        <Car color="">Mercedes</Car>
        <Car color="green"></Car>
      </div>
    );
  }
}

export default Mycars;
