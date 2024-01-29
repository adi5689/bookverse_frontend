import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="text-white px-6 md:px-24 py-28 h-[100vh] w-[100%]">
      <h1 className="text-4xl font-bold text-center pb-8">User Info</h1>
      <div className="flex gap-10 flex-col">
        <div>
          <h1 className="text-white text-2xl">
            Name:{"    "}
            {user.displayName}
          </h1>
        </div>
        <div>
          <h1 className="text-white text-2xl">
            Email:{"   "}
            {user.email}
          </h1>
        </div>
        <div>
          <h1 className="text-white text-2xl">
            Mobile No.: {"   "}{
              user.phoneNumber ? user.phoneNumber : "__________"
            }
            {}
          </h1>
        </div>
        <div>
          <h1 className="text-white text-2xl">
            Last Sign-In: {"   "}
            {user.metadata.lastSignInTime}
          </h1>
        </div>
        <div>
          <h1 className="text-white text-2xl">
            Account Created on: {"   "}
            {user.metadata.creationTime}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
