import { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import axios from "axios";
import Link from "next/link";
import { Context } from "../context/";
import { useRouter } from "next/router";

function Login() {
  const [email, setEmail] = useState("zahrizhal@gmail.com");
  const [password, setPassword] = useState("zahrizhal");
  const [loading, setLoading] = useState(false);

  // router
  const router = useRouter();
  //state
  const { state, dispatch } = useContext(Context);
  const { user } = state;

  useEffect(() => {
    if (user) router.push("/");
  }, [user]);
  console.log(state);
  async function handleSubmit(e) {
    e.preventDefault(); // prevent browser from reload after submit
    setLoading(true);
    try {
      let datauser = {
        email,
        password,
      };
      await axios.post(`/api/login`, datauser).then((res) => {
        toast("Berhasil Login.");

        dispatch({
          type: "LOGIN",
          payload: res.data,
        });
        window.localStorage.setItem("user", JSON.stringify(res.data));
        if (res.data.role.includes("Instructor")) {
          router.push("/instructor");
        } else {
          router.push("/user");
        }
      });
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }

    setLoading(false);
  }
  return (
    <>
      <h1 className="square jumbotron text-center bg-primary">Login</h1>

      <div className="container col-md-4 offset-md-4 ">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control mb-3 p-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter Email"
          />
          <input
            type="password"
            className="form-control mb-3 p-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter Password"
          />
          <div className="d-grid gap-2  mx-auto ">
            <button
              type="submit"
              className="btn btn-block btn-primary p-2"
              disabled={!password || !email || loading}
            >
              {loading ? <SyncOutlined /> : "Submit"}
            </button>
          </div>
        </form>
        <p className="text-center p-3">
          Create Account{" "}
          <Link href="/register">
            <a>Here</a>
          </Link>
        </p>
        <p className="text-center p-3">
          <Link href="/forgot-password">
            <a className="text-danger">Forgot Password?</a>
          </Link>
        </p>
      </div>
    </>
  );
}

export default Login;
