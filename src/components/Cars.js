import React from "react";

const Car = ({ children, color, year }) => {
  // ** here we use destructuring because we have {objects}

  const colorInfo = color ? <p>Couleur: {color} </p> : <p>Couleur: no color</p>; // ** condition on the color

  if (children) {
    //** condition about children
    return (
      <div
        style={{
          // *! in-line CSS for trying, warning, high priority
          backgroundColor: "pink",
          width: "400px",
          padding: "10px",
          margin: "5px auto",
        }}
      >
        <p>Marque: {children}</p>
        <p>Annee: {year}</p>
        {colorInfo}
      </div>
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
