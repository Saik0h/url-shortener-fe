import { Link } from 'react-router-dom'
import './header.component.css'

export function Header() {
  const navLinks = [
    { page: 'Home', path: '/' },
    { page: 'Profile', path: '/profile' },
    { page: 'Login', path: '/login' },
    { page: 'Register', path: '/register' },
  ]

  return (
    <header className="header">
      <div className="header__brand">
        <img src="#" alt="Logo" className="header__logo" />
        <span className="header__title">HShorten</span>
      </div>

      <nav className="header__nav" aria-label="Navegação principal">
        <ul className="header__list">
          {navLinks.map((link) => (
            <li key={link.page} className="header__item">
              <Link to={link.path} className="header__link">
                {link.page}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}