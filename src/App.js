import "./App.css";
import { Component } from "react";
import Mycars from "./components/Mycars";

class App extends Component {
  state = {
    titre: "My Cars Catalog",
  };

  render() {
    return (
      <div className="App">
        <Mycars title={this.state.titre} />
      </div>
    );
  }
}

export default App;
