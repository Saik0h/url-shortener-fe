import { Link } from "react-router-dom";
import "./header.component.css";
import { useAuth } from "../../../context/useAuth";

export function Header() {
  const { state, logoutUser } = useAuth();
  const navLinks = [
    {
      name: "Profile",
      path: "/profile",
      canAccess: state.user,
    },
    {
      name: "Register",
      path: "/register",
      canAccess: !state.user,
    },
    {
      name: "Login",
      path: "/login",
      canAccess: !state.user,
    },
  ];
  return (
    <header className="header">
      <div className="header__brand">
        <Link to={"/"}>
          <img src="favicon.ico" alt="Logo" className="header__logo" />
          <span className="header__title">HShorten</span>
        </Link>
      </div>

      <nav className="header__nav" aria-label="Navegação principal">
        <ul className="header__list">
          {navLinks.map((l) => {
            return (
              l.canAccess && (
                <li key={l.name}>
                  <Link to={l.path}>{l.name}</Link>
                </li>
              )
            );
          })}
        </ul>
      {state.user ? <button onClick={logoutUser}>Logout</button> : null}
      </nav>
    </header>
  );
}
