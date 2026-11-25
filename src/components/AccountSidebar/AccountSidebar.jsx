import { useAuth } from "../../context/AuthContext";
import { Link, useMatch } from "react-router-dom";

const userNavItems = [
  { to: "/account/settings", text: "Settings", icon: "settings" },
  { to: "/my-tours", text: "My bookings", icon: "briefcase" },
  { to: "/account/reviews", text: "My reviews", icon: "star" },
  { to: "/account/billing", text: "Billing", icon: "credit-card" },
];

const adminNavItems = [
  { to: "#", text: "Manage tours", icon: "map" },
  { to: "#", text: "Manage users", icon: "users" },
  { to: "#", text: "Manage reviews", icon: "star" },
  { to: "#", text: "Manage bookings", icon: "briefcase" },
];

const AccountSidebar = () => {
  const { user } = useAuth();
  return (
    <>
      <ul className="side-nav">
        {userNavItems.map((item) => (
          <NavItem key={item.text} {...item} />
        ))}
      </ul>
      {user?.role === "admin" && (
        <div className="admin-nav">
          <h5 className="admin-nav__heading">Admin</h5>
          <ul className="side-nav">
            {adminNavItems.map((item) => (
              <NavItem key={item.text} {...item} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default AccountSidebar;

const NavItem = ({ to, text, icon }) => {
  const isActive = useMatch({ path: to, end: true });
  return (
    <li className={isActive ? "side-nav--active" : ""}>
      <Link to={to}>
        <svg>
          <use xlinkHref={`/img/icons.svg#icon-${icon}`} />
        </svg>
        {text}
      </Link>
    </li>
  );
};
