import { useAuth } from "../context/AuthContext";
import PasswordChange from "../components/PasswordChange";
import AccountSidebar from "../components/AccountSidebar";
import { Outlet } from "react-router-dom";

const Account = () => {
  const { user } = useAuth();

  return (
    <main className="main">
      <div className="user-view">
        <nav className="user-view__menu">
          <AccountSidebar />
        </nav>
        <div className="user-view__content">
          <Outlet />
          <div className="line">&nbsp;</div>
          <PasswordChange />
        </div>
      </div>
    </main>
  );
};

export default Account;
