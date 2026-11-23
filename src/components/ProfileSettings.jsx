import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { updateProfile } from "../services/userService";
import { toast } from "react-toastify";

const ProfileSettings = () => {
  const { user, setUser } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photo: null,
  });

  useEffect(() => {
    setFormData({
      name: user?.name || "",
      email: user?.email || "",
      photo: null,
    });
  }, [user]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const payload = new FormData();
      payload.append("name", formData["name"]);
      payload.append("email", formData["email"]);

      if (formData.photo) {
        payload.append("photo", formData["photo"]);
      }

      const response = await updateProfile(payload);
      setUser((prev) => ({ ...prev, ...response }));
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Something went wrong. Please try again",
      );
    }
  };

  return (
    <div className="user-view__form-container">
      <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
      <form className="form form-user-data" onSubmit={(e) => handleSubmit(e)}>
        <div className="form__group">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="form__input"
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="form__group ma-bt-md">
          <label className="form__label" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            className="form__input"
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="form__group form__photo-upload">
          <img
            className="form__user-photo"
            src={
              user?.photo
                ? `/img/users/${user.photo}`
                : "/img/users/default.jpg"
            }
            alt="User photo"
          />
          <input
            className="form__upload"
            type="file"
            accept="image/*"
            id="photo"
            name="photo"
            onChange={(e) =>
              setFormData({ ...formData, photo: e.target.files[0] })
            }
          />
          <label htmlFor="photo">Choose new photo</label>
        </div>
        <div className="form__group right">
          <button className="btn btn--small btn--green" type="submit">
            Save settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettings;
