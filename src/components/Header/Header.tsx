import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header>
      <nav className="nav has-background-link">
        <span className="nav__title has-text-white">
          Blog
        </span>

        <Link
          to="/new"
          className="nav__button button is-link is-light"
        >
          Add a new post
        </Link>
      </nav>
    </header>
  );
};
