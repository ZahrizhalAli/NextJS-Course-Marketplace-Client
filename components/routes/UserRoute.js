import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { SyncOutlined } from "@ant-design/icons";
import UserNav from "../nav/UserNav";

const UserRoute = ({ children }) => {
  const [hidden, setHidden] = useState(true);

  const router = useRouter();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      //
      const { data } = await axios.get("/api/current-user");
      console.log(data);
      if (data.ok) {
        setHidden(false);
      }
    } catch (err) {
      console.log(err);
      setHidden(true);
      router.push("/login");
    }
  };
  return (
    <>
      {hidden ? (
        <SyncOutlined
          spin
          className="d-flex justify-content-center display-1 text-primary p-5"
        />
      ) : (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <UserNav />
            </div>
            <div className="col-md-10">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserRoute;
