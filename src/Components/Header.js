import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../logo.png";
function Header() {
  let navigate = useNavigate();
  const clearLocalStorage = () => {
    localStorage.clear();
    alert("LOGOUT SUCCESSFULLY !");
    navigate(`/login`);
    console.log("LocalStorage cleared");
  };
  return (
    <div className="container-fluid bg-dark px-0 ">
      <div className="row gx-0">
        <div className="col-lg-3 bg-dark d-none d-lg-block">
          <a
            href="index.html"
            className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
          >
            <img
              src={logo}
              alt="png"
              style={{ height: "150px", width: "2000px" }}
            />
            {/* <h3 className="m-0 display-4 text-primary text-uppercase">
              Gymster
            </h3> */}
          </a>
        </div>
        <div className="col-lg-9">
          <div className="row gx-0 bg-secondary d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
              <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                <i className="fa fa-envelope text-primary me-2"></i>
                <h6 className="mb-0">info@example.com</h6>
              </div>
              <div className="h-100 d-inline-flex align-items-center py-2">
                <i className="fa fa-phone-alt text-primary me-2"></i>
                <h6 className="mb-0">+012 345 6789</h6>
              </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
              <div className="d-inline-flex align-items-center py-2">
                <a
                  className="btn btn-light btn-square rounded-circle me-2"
                  href="#"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-light btn-square rounded-circle me-2"
                  href="#"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-light btn-square rounded-circle me-2"
                  href="#"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  className="btn btn-light btn-square rounded-circle me-2"
                  href="#"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-light btn-square rounded-circle" href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0 px-lg-5">
            <a href="index.html" className="navbar-brand d-block d-lg-none">
              <h1 className="m-0 display-4 text-primary text-uppercase">
                Gymster
              </h1>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto py-0">
                <a href="/home" className="nav-item nav-link active">
                  Home
                </a>
                <a href="/about" className="nav-item nav-link">
                  About
                </a>
                <a href="/contact" className="nav-item nav-link">
                  classNamees
                </a>
                <a href="/team" className="nav-item nav-link">
                  Trainers
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu rounded-0 m-0">
                    <a href="blog.html" className="dropdown-item">
                      Blog Grid
                    </a>
                    <a href="/blog" className="dropdown-item">
                      Blog Detail
                    </a>
                    <a href="/testimonial" className="dropdown-item">
                      Testimonial
                    </a>
                  </div>
                </div>
                <a href="/contact" className="nav-item nav-link">
                  Contact
                </a>
              </div>
              <a
                href="#"
                className="btn btn-primary py-md-3 px-md-5 d-none d-lg-block"
                onClick={clearLocalStorage}
              >
                logout
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
