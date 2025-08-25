import './footer.component.css'

export function Footer() {
  return (
    <footer className="footer">
      <nav className='footer__nav'>
        <ul className='nav__list'>
          <li className='nav__list-item'>
            Github
          </li>
        </ul>
      </nav>
      <p className='copy'>Cristhyan Magarão, 2025 </p>
      <button className='button_that_does_nothing'>This button does nothing</button>
    </footer>
  );
}
