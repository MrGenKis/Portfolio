import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsProjectsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsProjectsVisible(false);
  };

  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>accueil</li>
        </NavLink>
        <li
          className='nav-projets'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          projets
          {isProjectsVisible && (
            <ul className='nav-projets-list'>
              <NavLink
                to="/projet-1"
                className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
              >
                <li>projet 1</li>
              </NavLink>
              <NavLink
                to="/projet-2"
                className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
              >
                <li>projet 2</li>
              </NavLink>
              <NavLink
                to="/projet-3"
                className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
              >
                <li>projet 3</li>
              </NavLink>
            </ul>
          )}
        </li>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
