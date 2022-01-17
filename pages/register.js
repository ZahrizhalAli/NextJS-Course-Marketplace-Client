import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import { Context } from "../context";
import Link from "next/link";
import { useRouter } from "next/router";

function Register() {
  const [name, setName] = useState("zahrizhal");
  const [email, setEmail] = useState("zahrizhal@gmail.com");
  const [password, setPassword] = useState("zahrizhal");
  const [loading, setLoading] = useState(false);

  const { state, dispatch } = useContext(Context);
  const { user } = state;

  // Get history push functionality
  const router = useRouter();

  // We make sure user wont visit this page if they're logged in
  useEffect(() => {
    if (user) router.push("/");
  }, [user]);

  async function handleSubmit(e) {
    e.preventDefault(); // prevent browser from reload after submit
    setLoading(true);
    let datauser = {
      name,
      email,
      password,
    };
    await axios
      .post("/api/register", datauser)
      .then((res) => {
        toast.success("Berhasil Registrasi.");
      })
      .catch((err) => {
        toast.error("This email has already used.");
      });
    setLoading(false);
  }
  return (
    <>
      <h1 className="square jumbotron text-center bg-primary">Register</h1>

      <div className="container col-md-4 offset-md-4 ">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-3 p-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            required
          />
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
              disabled={!name || !password || !email || loading}
            >
              {loading ? <SyncOutlined /> : "Submit"}
            </button>
          </div>
        </form>
        <p className="text-center p-3">
          Already registered?{" "}
          <Link href="/login">
            <a>Login</a>
          </Link>
        </p>
      </div>
    </>
  );
}

export default Register;
