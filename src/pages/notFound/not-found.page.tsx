import { Link } from "react-router-dom";
import "./not-found.css";

export function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oops! Página não encontrada.</p>
      <Link to="/" className="btn">
        Voltar para Home
      </Link>
    </div>
  );
}