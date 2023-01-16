import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Header({ title, route, email, onClick }) {
  return (
    <header className={'header'}>
      <Link to={'/'} className='header__link'>
        <img src={logo} alt="Логотип детского сада" className="header__logo" />
      </Link>
    </header>
  );
};

export default Header;
