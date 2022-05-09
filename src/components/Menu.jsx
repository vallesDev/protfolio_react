import Navigation from './Navigation';
import { generarId } from '../../helpers';
const navList = [
  {
    id: generarId(),
    enlace: '#home',
    activeClass: 'active-link',
    name: 'Home',
    to: 'home',
  },
  {
    id: generarId(),
    enlace: '#about',
    activeClass: 'active-link',
    name: 'About',
    to: 'about',
  },
  {
    id: generarId(),
    enlace: '#services',
    activeClass: 'active-link',
    name: 'Services',
    to: 'services',
  },
  {
    id: generarId(),
    enlace: '#portfolio',
    activeClass: 'active-link',
    name: 'Portfolio',
    to: 'portfolio',
  },
  {
    id: generarId(),
    enlace: '#contact',
    activeClass: 'active-link',
    name: 'Contact',
    to: 'contact',
  },
];

const Menu = ({ modal, handleRemoveMenu }) => {
  const menuOpen = modal ? 'show-menu' : '';

  return (
    <div className={`nav__menu ${menuOpen}`}>
      <ul className="nav__list">
        {navList.map(({ id, enlace, name, activeClass, to }) => (
          <Navigation
            key={id}
            enlace={enlace}
            name={name}
            handleRemoveMenu={handleRemoveMenu}
            activeClass={activeClass}
            to={to}
          />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
