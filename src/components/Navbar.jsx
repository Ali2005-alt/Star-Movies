import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "#FFD700" }}>
      <div className="container-fluid justify-content-center">
        {/* شعار الموقع */}
        <Link className="navbar-brand text-dark fw-bold" to="/">
          ShoeStore
        </Link>

        {/* زر التبديل للجوال */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* روابط النافبار */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/projects">Projects</Link>
            </li>
            
            
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/state">State</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contact">Contact Us</Link>
            </li>
          </ul>

          {/* زر Signup داخل الفورم */}
          <form className="d-flex" role="search">
            <Link to="/signup">
              <button className="btn btn-success" type="button">Signup</button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
