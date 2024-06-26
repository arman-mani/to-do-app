import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Startsida</Link>
        </li>
        <li>
          <Link to="/information">Information</Link>
        </li>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
