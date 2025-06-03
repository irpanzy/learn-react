import React, { useState } from "react";
import { ProfileContext } from "./ProfileContext";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import ProfileForm from "./ProfileForm";

export default function ProfileApp() {
  const [name, setName] = useState("Irpan");
  return (
    <div>
      <ProfileContext.Provider value={name}>
        <h1>Profile App</h1>
        <ProfileForm name={name} setName={setName} />
        <Profile />
        <ProfileAddress />
      </ProfileContext.Provider>
    </div>
  );
}
