import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Context } from "../../context/index";
import UserRoute from "../../components/routes/UserRoute"; // wrapper component

const UserIndex = () => {
  const {
    state: { user },
  } = useContext(Context);

  return (
    <>
      <UserRoute>
        <h1 className="text-center jumbotron bg-primary square p-4">
          User Dashboard
        </h1>
      </UserRoute>
    </>
  );
};

export default UserIndex;
