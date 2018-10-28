import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/bujinkan-logo-small-dark.png';

const NavItem = ({ path, title }) => (
  <li className="nav-item">
    <Link to={path} activeClassName="active" className="nav-link">
      {title}
    </Link>
  </li>
)

const Nav = () => {
  const items = [
    { path: '/', title: 'Home' },
    { path: '/what-is-ninjutsu', title: 'What is Ninjutsu?'},
    { path: '/why-ninjutsu', title: 'Why Ninjutsu?' },
    { path: '/instructors', title: 'Instructors' },
    { path: '/gallery', title: 'Gallery' }
  ].map(item => <NavItem key={item.path} path={item.path} title={item.title} />);

  return (
    <div id="main-nav" className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        {items}
      </ul>
    </div>
  );
}

const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-expand-md navbar-light main">
    <div className="container">
      <Link to='/' className='navbar-brand'>
        <img src={logo} alt=""/> Ninjutsu Swindon
      </Link>

      <button className="navbar-toggler" data-toggle="collapse" target="#main-nav">
        <span className="navbar-toggler-icon" />
      </button>
      <Nav />
    </div>
  </nav>
)

export default Header
