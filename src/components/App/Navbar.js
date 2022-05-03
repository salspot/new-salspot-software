import React from "react";
import { useRecoilState } from "recoil";
import { collapsedState } from "../../utils/recoil-atoms";
import { Link } from "gatsby";
import logoWhite from "../../assets/images/logo-white.svg";
import logoBlack from "../../assets/images/logo-black.svg";

const Navbar = () => {
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
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link
                to="/"
                onClick={() => setCollapsed(true)}
                className="navbar-brand"
              >
                <img src={logoWhite} className="logo logo-white" alt="logo" />
                <img src={logoBlack} className="logo logo-black" alt="logo" />
              </Link>

              <button //mobile button
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
                        to="/work"
                        activeClassName="active"
                        onClick={() => setCollapsed(true)}
                        className="nav-link overline-reveal"
                    >
                      Our Work
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                        to="/careers"
                        activeClassName="active"
                        onClick={() => setCollapsed(true)}
                        className="nav-link overline-reveal"
                    >
                      Careers
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                        to="/blog"
                        activeClassName="active"
                        onClick={() => setCollapsed(true)}
                        className="nav-link overline-reveal"
                    >
                      Blog
                    </Link>
                  </li>

                  {/*<li className="nav-item">*/}
                  {/*  <Link*/}
                  {/*      to="/contact"*/}
                  {/*      activeClassName="active"*/}
                  {/*      onClick={() => setCollapsed(true)}*/}
                  {/*      className="nav-link"*/}
                  {/*  >*/}
                  {/*    Contact*/}
                  {/*  </Link>*/}
                  {/*</li>*/}
                </ul>

                <div className="others-option d-flex align-items-center">
                  <div className="option-item">
                    <Link
                      to="/contact"
                      activeClassName="active"
                      onClick={() => setCollapsed(true)}
                      className="default-btn"
                    >
                      Contact{" "}
                      <span></span>
                    </Link>
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

export default Navbar;
