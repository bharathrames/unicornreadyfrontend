import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "https://unicornreadybackend.vercel.app/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });

    // Check if username, email, and password are touched
    const isUsernameTouched = username.trim() !== "";
    const isEmailTouched = email.trim() !== "";
    const isPasswordTouched = password.trim() !== "";

    const updatedUser = {
      userId: user._id,
      username: isUsernameTouched ? username : user.username,
      email: isEmailTouched ? email : user.email,
      password: isPasswordTouched ? password : user.password,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;

      try {
        await axios.post("https://unicornreadybackend.vercel.app/api/upload", data);
      } catch (err) {
        console.error("Error uploading profile picture", err);
      }
    }

    try {
      const res = await axios.put(
        "https://unicornreadybackend.vercel.app/api/users/" + user._id,
        updatedUser
      );
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      toast.success("Profile has been updated!", { position: "top-center" });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
      alert("Please check all details are filled");
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={user.profilePic ? PF + user.profilePic : "default-profile.jpg"}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
