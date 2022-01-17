import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../context/";
import { Button } from "antd";
import {
  SettingOutlined,
  UserSwitchOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import UserRoute from "../../components/routes/UserRoute";

const BecomeInstructor = () => {
  //state
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(Context);

  const { user } = state;

  const becomeInstructor = () => {
    setLoading(true);
    axios
      .post("/api/make-instructor")
      .then((res) => {
        console.log(res);
        window.location.href = res.data;
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast("Stripe onboarding failed. Try Again");
        setLoading(false);
      });
  };

  return (
    <>
      <h1 className="jumbotron text-center square">Test</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <div className="pt-4">
            <UserSwitchOutlined className="display-1 pb-3" />
            <br />
            <h2>Setup payout to publish courses on Our Course</h2>
            <Button
              className="mb-3"
              type="primary"
              block
              shape="round"
              onClick={becomeInstructor}
              disabled={
                (user && user.role && user.role.includes("Instructor")) ||
                loading
              }
              icon={loading ? <LoadingOutlined /> : <SettingOutlined />}
            >
              {loading ? "Processing..." : "Payout Setup"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BecomeInstructor;
