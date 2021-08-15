import "./App.css";
import { Component } from "react";
import Mycars from "./components/Mycars";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Mycars />
      </div>
    );
  }
}

export default App;
