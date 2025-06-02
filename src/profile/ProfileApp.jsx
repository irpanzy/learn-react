import React from "react";
import { ProfileContext } from "./ProfileContext";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";

export default function ProfileApp() {
  return (
    <div>
      <ProfileContext.Provider value="Irpan">
        <h1>Profile App</h1>
        <Profile />
        <ProfileAddress />
      </ProfileContext.Provider>
    </div>
  );
}
