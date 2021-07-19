import React from "react";
import { useRecoilState } from "recoil";
import { collapsedState } from "../../utils/recoil-atoms";
import { Link } from "gatsby";
import logo from "../../assets/images/logo.png";

const NavbarThree = () => {
  const [collapsed, setCollapsed] = useRecoilState(collapsedState);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  });

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <React.Fragment>
      <div id="navbar" className="navbar-area">
        <div className="tarn-nav">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link
                to="/"
                onClick={() => setCollapsed(true)}
                className="navbar-brand"
              >
                <img src={logo} alt="logo" />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      to="/"
                      activeClassName="active"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      Home <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/machine-learning-ai-solutions"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Machine Learning AI Solutions
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="#"
                      activeClassName="active"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      About Us <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/about-us"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          About Us
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/history"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          History
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/testimonials"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Testimonials
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/team"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Team One
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="#"
                      activeClassName="active"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      Services <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/services"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Services
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/service-details"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Service Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="#"
                      activeClassName="active"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      Case Studies <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/case-studies"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Case Studies
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/case-studies-details"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Case Studies Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="#"
                      activeClassName="active"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      Pages <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="#"
                          activeClassName="active"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Courses <i className="bx bx-chevron-down"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              to="/courses"
                              activeClassName="active"
                              onClick={() => setCollapsed(true)}
                              className="nav-link"
                            >
                              Courses
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              to="/course-details"
                              activeClassName="active"
                              onClick={() => setCollapsed(true)}
                              className="nav-link"
                            >
                              Course Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="#"
                          activeClassName="active"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Events <i className="bx bx-chevron-down"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              to="/events"
                              activeClassName="active"
                              onClick={() => setCollapsed(true)}
                              className="nav-link"
                            >
                              Events
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              to="/event-details"
                              activeClassName="active"
                              onClick={() => setCollapsed(true)}
                              className="nav-link"
                            >
                              Event Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/contact"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Contact
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/gallery"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Gallery
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/faq"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          FAQ
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/coming-soon"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Coming Soon
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/membership-levels"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Membership Levels
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/profile-authentication"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Login/Register
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/privacy-policy"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Privacy Policy
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/terms-of-service"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Terms of Service
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="#"
                      activeClassName="active"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      Blog <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/blog"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Blog Grid
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/blog-details"
                          activeClassName="active"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>

                <div className="others-option d-flex align-items-center">
                  <div className="option-item">
                    <form className="search-box">
                      <input
                        type="text"
                        className="input-search"
                        placeholder="Search for anything"
                      />
                      <button type="submit">
                        <i className="flaticon-loupe"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavbarThree;
