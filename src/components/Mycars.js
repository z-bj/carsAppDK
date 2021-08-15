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
    titre: "My Cars Catalog 2",
  };

  addTenYears = () => {
    const updatedState = this.state.voitures.map((param) => {
      return (param.year -= 10);
    });
    this.setState({ updatedState });
  };
  render() {
    const actualYear = new Date().getFullYear(); //the function provides us with the current year

    return (
      <div>
        <h1>{this.state.titre}</h1>
        {/*here we display the title from the state in app.js */}
        <button onClick={this.addTenYears}>add 10 years</button>
        <Car
          color={this.state.voitures[0].color}
          year={actualYear - this.state.voitures[0].year + " years"} // here we subtract the the year of production of the car from current year
        >
          {this.state.voitures[0].name}
        </Car>
        <Car
          color={this.state.voitures[1].color}
          year={actualYear - this.state.voitures[1].year + " years"} // here we subtract the the year of production of the car from current year
        >
          {this.state.voitures[1].name}
        </Car>
        <Car
          color={this.state.voitures[2].color}
          year={actualYear - this.state.voitures[2].year + " years"} // here we subtract the the year of production of the car from current year
        >
          {this.state.voitures[2].name}
        </Car>

        {this.state.voitures.map((voiture) => {
          return (
            <Car
              color={voiture.color}
              year={actualYear - voiture.year + "years"}
            >
              {voiture.name}
            </Car>
          ); // here  map return a table of objects [{},{},{}]
        })}
      </div>
    );
  }
}

export default Mycars;
