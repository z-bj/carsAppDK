import React from "react";

const Car = ({ children, color }) => {
  // ** here we use destructuring because we have {objects}

  const colorInfo = color ? <p>Couleur:{color} </p> : <p>Couleur: no color</p>; // ** condition on the color

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
        <p>Marque:{children} </p>
        {colorInfo}
      </div>
    );
  } else {
    return null;
  }
};

export default Car;
