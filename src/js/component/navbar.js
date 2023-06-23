import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md  navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            className="logo-nav"
            src="https://i.pinimg.com/474x/a2/a2/27/a2a227afa5d96e329085b989357b1129--star-wars-action-figures-episode-iv.jpg"
            alt=""
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="btn-group dropstart">
          <button
            type="button"
            className="btn btn-favorite dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropstart
          </button>
          <ul className="dropdown-menu"></ul>
        </div>
      </div>
    </nav>
  );
};
