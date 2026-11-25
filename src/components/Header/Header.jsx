import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { user, loading, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [openOnPath, setOpenOnPath] = useState(null);
  const menuOpen = openOnPath === location.pathname;
  const isAllToursPage =
    location.pathname === "/" || location.pathname === "/overview";

  const closeMenu = () => setOpenOnPath(null);
  const toggleMenu = () => {
    setOpenOnPath(menuOpen ? null : location.pathname);
  };

  const handleLogout = async () => {
    closeMenu();
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="header">
      <div className="header__inner">
        <nav className="header__nav" aria-label="Main navigation">
          <Link
            to="/"
            className={`header__el${isAllToursPage ? " header__el--active" : ""}`}
            aria-current={isAllToursPage ? "page" : undefined}
            onClick={closeMenu}
          >
            All tours
          </Link>
        </nav>

        <Link
          to="/"
          className="header__brand"
          aria-label="Natours home"
          onClick={closeMenu}
        >
          <img src="/img/logo-white.png" alt="Natours" />
        </Link>

        <button
          className={`header__toggle${menuOpen ? " header__toggle--open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="header-menu"
          onClick={toggleMenu}
        >
          <span className="header__toggle-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="header__toggle-label">
            {menuOpen ? "Close" : "Menu"}
          </span>
        </button>

        <div
          className={`header__content${menuOpen ? " header__content--open" : ""}`}
          id="header-menu"
        >
          {loading ? (
            <div className="header__actions" aria-hidden="true" />
          ) : user ? (
            <div className="header__actions">
              <button
                className="header__el"
                type="button"
                onClick={handleLogout}
              >
                Log out
              </button>
              <Link
                className="header__el"
                to="/account"
                onClick={closeMenu}
              >
                <img
                  src={`/img/users/${user.photo}`}
                  alt={`${user.name}'s profile picture`}
                  className="header__user-img"
                />
                <span>{user.name?.split(" ")[0]}</span>
              </Link>
            </div>
          ) : (
            <div className="header__actions">
              <Link className="header__el" to="/login" onClick={closeMenu}>
                Log in
              </Link>
              <Link
                className="header__el header__el--cta"
                to="/signup"
                onClick={closeMenu}
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
