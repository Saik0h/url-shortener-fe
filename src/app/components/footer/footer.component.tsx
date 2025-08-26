import './footer.component.css'

export function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav" aria-label="Links do rodapé">
        <ul className="footer__list">
          <li className="footer__item">
            <a
              href="https://github.com/Saik0h"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              GitHub
            </a>
          </li>
          <li className="footer__item">
            <a href="/contact" className="footer__link">Contato</a>
          </li>
        </ul>
      </nav>

      <p className="footer__copy">
        © {new Date().getFullYear()} Cristhyan Magarão
      </p>

      <button className="footer__button" type="button" disabled>
        🚀 This button does nothing
      </button>
    </footer>
  );
}
