import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <header className="header">
      <nav className="nav nav--tours">
        <Link to="/" className="nav__el">
          All tours
        </Link>
        {/* <form className="nav__search">
            <button className="nav__search-btn">
              <svg>
                <use href="/img/icons.svg#icon-search" />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search tours"
              className="nav__search-input"
            />
          </form> */}
      </nav>
      <div className="header__logo">
        <img src="/img/logo-white.png" alt="Natours logo" />
      </div>
      {loading ? (
        <nav className="nav nav--user"></nav>
      ) : user ? (
        <nav className="nav nav--user">
          <button className="nav__el nav_el--logout" onClick={handleLogout}>
            Log out
          </button>
          <Link className="nav__el" to="/account">
            <img
              src={`/img/users/${user?.photo}`}
              alt={`${user?.name}'s profile picture`}
              className="nav__user-img"
            />
            <span>{user?.name?.split(" ")[0]}</span>
          </Link>
        </nav>
      ) : (
        <nav className="nav nav--user">
          <Link className="nav__el" to="/login">
            Log in
          </Link>
          <Link className="nav__el nav__el--cta" to="/signup">
            Sign up
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
