import React, { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {
  state = {
    voitures: [
      //don't forget, we are in an Array[]
      { name: "Ford", color: "red", year: "2000" },
      { name: "Mercedes", color: "black", year: "2010" },
      { name: "Peugeot", color: "green", year: "2018" },
    ],
  };

  addTenYears = () => {
    const updatedState = this.state.voitures.map((param) => {
      return (param.year -= 10);
    });
    this.setState({ updatedState });
  };
  render() {
    const year = new Date().getFullYear(); //obtain the actual year

    return (
      <div>
        <h1>{this.props.title}</h1>

        <button onClick={this.addTenYears}>+ 10ans</button>

        <Car
          color={this.state.voitures[0].color}
          year={year - this.state.voitures[0].year + " years"} // here we subtract the the year of production of the car from current year
        >
          {this.state.voitures[0].name}
        </Car>
        <Car
          color={this.state.voitures[1].color}
          year={year - this.state.voitures[1].year + " years"} // here we subtract the the year of production of the car from current year
        >
          {this.state.voitures[1].name}
        </Car>
        <Car
          color={this.state.voitures[2].color}
          year={year - this.state.voitures[2].year + " years"} // here we subtract the the year of production of the car from current year
        >
          {this.state.voitures[2].name}
        </Car>
      </div>
    );
  }
}

export default Mycars;
