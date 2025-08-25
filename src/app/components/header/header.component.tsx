import './header.component.css'

export function Header() {

  return (
    <header className='header'>
      <img src="#" alt="Logo" />

      <nav className='header__nav'>
        <ul className='nav__list'>
          <li className='nav__list-item'>
            <small> First access? </small>
            <a href="">Sign up</a>
          </li>

          <li className='nav__list-item'>
            <small> already have an acount? </small>
            <a href="">Sign In</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
