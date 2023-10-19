import React from 'react'
import { NavLink } from 'react-router-dom';
import { HederWrap, NavLinkWrap } from './Parts.styled';


const Header = () => {
  return (
    <HederWrap>
      <nav>
        <NavLinkWrap>
          <NavLink to="/" className="nav-item">
            HOME
          </NavLink>
          <NavLink to="movies" className="nav-item">
            MOVIES
          </NavLink>
        </NavLinkWrap>
      </nav>
    </HederWrap>

  );
}

export default Header