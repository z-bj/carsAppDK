import "./App.css";
import { Component } from "react";
import Mycars from "./components/Mycars";

class App extends Component {
  state = {
    titre: "Mon catalogue Voitures",
  };

  changeTitle = (e) => {
    this.setState({
      //seul setState a le droit de modifier le state de sorte a ce que react prenne en compte la modification et mette a jour le DOM
      titre: "Mon nouveau titre",
    });
  };

  changeViaParam = (titre) => {
    this.setState({
      titre: titre, // dans react si les 2 parametres sont les memes on a le droit d'ecrire directement le nom de la valeur, ici : titre.
    });
  };

  changeViaBind = (param) => {
    this.setState({
      titre: param, //le param que j'ai reccuperer via l'arrow funcino.
    });
  };

  changeViaInput = (e) => {
    this.setState({
      titre: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <Mycars title={this.state.titre} />
        <button onClick={this.changeTitle}>Changer le nom en dur</button>
        <button onClick={() => this.changeViaParam("Titre via un parametre")}>
          via param
        </button>{" "}
        {/*//ici on souhaite passer un parametre a la foncion, mais elle va etre appeller des le chargement de la page, ce n'est pas ce que l'on souhaite,nous on veut quelle se lance lors du onClikc, donc on passe une annonym arrow function avant elle */}
        <button onClick={this.changeViaBind.bind(this, "Titre via Bind")}>
          via Bind
        </button>
        {/*this pour rester dans le contexte de l'object, "titre via bind" va passer dans param et etre recuper puis mis a jour via le state*/}
        <input
          type="text"
          onChange={this.changeViaInput}
          value={this.state.titre}
        />
      </div>
    );
  }
}

export default App;
