import React from "react";
import "./startsida.css";

const Startsida = () => {
  return (
    <div className="startsida-container">
      <div className="startsida-content">
        <h1>Välkommen till Startsidan</h1>
        <p>
          Klicka på "Information" i navigationsmenyn för mer information om
          tjänsten eller på "Todos" för att använda applikationen.
        </p>
      </div>
    </div>
  );
};

export default Startsida;
