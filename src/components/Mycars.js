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

        {this.state.voitures.map((voiture, index) => {
          return (
            <div key={index}>
              <Car
                nom={voiture.name}
                color={voiture.color}
                year={actualYear - voiture.year + " years"}
              />
            </div>
          ); // here  map return a table of objects [{},{},{}]
          //remove props from hard-coded <car/> components and replace them with map()
        })}
      </div>
    );
  }
}

export default Mycars;
