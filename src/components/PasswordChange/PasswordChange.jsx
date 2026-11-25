import { useState } from "react";
import { toast } from "react-toastify";
import { updateMyPassword } from "../../services/userService";

const initialState = {
  passwordCurrent: "",
  password: "",
  passwordConfirm: "",
};
const PasswordChange = () => {
  const [formData, setFormData] = useState(initialState);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.passwordConfirm) {
      toast.error("New password and Confirm password do not match!");
      return;
    }

    try {
      await updateMyPassword(formData);
      toast.success("Password updated successfully");
      setFormData({ ...initialState });
    } catch (error) {
      console.error("Password update failed:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to update password. Please try again.",
      );
    }
  };

  return (
    <div className="user-view__form-container">
      <h2 className="heading-secondary ma-bt-md">Password change</h2>
      <form
        className="form form-user-password"
        onSubmit={(e) => handlePasswordChange(e)}
      >
        <div className="form__group">
          <label className="form__label" htmlFor="password-current">
            Current password
          </label>
          <input
            id="password-current"
            className="form__input"
            type="password"
            placeholder="••••••••"
            required
            minLength={8}
            value={formData.passwordCurrent}
            onChange={(e) =>
              setFormData({ ...formData, passwordCurrent: e.target.value })
            }
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="password">
            New password
          </label>
          <input
            id="password"
            className="form__input"
            type="password"
            placeholder="••••••••"
            required
            minLength={8}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <div className="form__group ma-bt-lg">
          <label className="form__label" htmlFor="password-confirm">
            Confirm password
          </label>
          <input
            id="password-confirm"
            className="form__input"
            type="password"
            placeholder="••••••••"
            required
            minLength={8}
            value={formData.passwordConfirm}
            onChange={(e) =>
              setFormData({ ...formData, passwordConfirm: e.target.value })
            }
          />
        </div>
        <div className="form__group right">
          <button
            className="btn btn--small btn--green btn--save-password"
            type="submit"
          >
            Save password
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordChange;
