import React from "react";
import "./information.css";

const Information = () => {
  return (
    <div className="information-container">
      <div className="information-content">
        <h1>Om denna app:</h1>
        <div className="list-container">
          <p>
            Denna todo-app är min första React applikation och hjälper individer
            att organisera sina uppgifter.
          </p>
          <p>
            Vad är en todo-app? I detta sammanhang är det helt enkelt en
            att-göra lista som innehåller följande funktioner:
          </p>
          <ul>
            <li>Lägg till nya todos.</li>
            <li>Klarmarkera färdiga todos med en checkmark.</li>
            <li>Ta bort individuella todos.</li>
            <li>Rensa alla todos.</li>
            <li>
              Dina todos sparas ifall du lämnar sidan eller uppdaterar den.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Information;
