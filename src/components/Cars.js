import React from "react";

const Car = ({ nom, color, year }) => {
  // ** here we use destructuring because we have {objects}

  const colorInfo = color ? <p>Couleur: {color} </p> : <p>Couleur: no color</p>; // ** condition on the color

  if (nom) {
    //** condition about nom
    return (
      <tr>
        <td>
          <p>Marque: {nom}</p>
        </td>
        <td>
          <p>Age: {year}</p>
        </td>
        <td>{colorInfo}</td>
      </tr>
    );
  } else {
    return (
      <div
        style={{
          backgroundColor: "pink",
          width: "400px",
          padding: "10px",
          margin: "5px auto",
        }}
      >
        <p>no data</p>
      </div>
    );
  }
};

export default Car;
