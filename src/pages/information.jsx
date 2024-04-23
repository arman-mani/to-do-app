import React from 'react';
import './information.css'; 

const Information = () => {
  return (
    <div className="information-container">
      <div className="information-content">
        <h1>Om denna app:</h1>
        <p>Denna todo-app är min första riktiga app och hjälper individer att organisera sina uppgifter</p>
        <p>Vad är en todo-app? Det är helt enkelt en att-göra lista som innehåller följande funktioner:</p>
        <ul>
          <li>Lägg till nya todos</li>
          <li>Klarmarkera färdiga todos med en checkmark</li>
          <li>Ta bort individuella todos</li>
          <li>Rensa alla todos</li>
        </ul>
      </div>
    </div>
  );
}

export default Information;

