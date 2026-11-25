import { Routes, Route, Link } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Account from "./pages/Account/Account";
import Overview from "./pages/Overview/Overview";
import TourDetails from "./pages/TourDetails/TourDetails";
import ProfileSettings from "./components/ProfileSettings/ProfileSettings";
import MyTours from "./components/MyBookings/MyBookings";
import MyReviews from "./components/MyReviews/MyReviews";
import Billing from "./components/Billing/Billing";
import { ToastContainer } from "react-toastify";
import MyBookings from "./pages/MyBookings/MyBookings";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account/" element={<Account />}>
          <Route index element={<ProfileSettings />} />
          <Route path="settings" element={<ProfileSettings />} />
          <Route path="bookings" element={<MyTours />} />
          <Route path="reviews" element={<MyReviews />} />
          <Route path="billing" element={<Billing />} />
        </Route>
        <Route path="/overview" element={<Overview />} />
        <Route path="/my-tours" element={<MyBookings />} />
        <Route path="/tour/:slug" element={<TourDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        theme="light"
      />
    </>
  );
}

export default App;
