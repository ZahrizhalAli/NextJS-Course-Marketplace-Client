import { Menu } from "antd";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
  CrownOutlined,
  LogoutOutlined,
  CarryOutOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import axios from "axios";

import { Context } from "../context/index";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
const { Item, SubMenu, ItemGroup } = Menu;

function TopNav() {
  const [current, setCurrentState] = useState("");
  const { state, dispatch } = useContext(Context);
  const router = useRouter();
  const { user } = state;

  useEffect(() => {
    process.browser && setCurrentState(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const logout = async () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    const { data } = await axios.get("/api/logout");
    window.localStorage.removeItem("user");

    router.push("/login");
  };
  return (
    <>
      <Menu theme="dark" mode="horizontal" selectedKeys={[current]}>
        <Item
          key="/"
          onClick={(e) => setCurrentState(e.key)}
          icon={<AppstoreOutlined />}
        >
          <Link href="/">
            <a>App</a>
          </Link>
        </Item>
        {user && user.role && user.role.includes("Instructor") ? (
          <Item
            key="/instructor/course/create"
            onClick={(e) => setCurrentState(e.key)}
            icon={<CarryOutOutlined />}
          >
            <Link href="/instructor/course/create">
              <a>Create Course</a>
            </Link>
          </Item>
        ) : (
          <Item
            key="/user/become-instructor"
            onClick={(e) => setCurrentState(e.key)}
            icon={<TeamOutlined />}
          >
            <Link href="/user/become-instructor">
              <a>Become Instructor</a>
            </Link>
          </Item>
        )}

        {!user && (
          <>
            <Item
              key="/register"
              onClick={(e) => setCurrentState(e.key)}
              icon={<UserAddOutlined />}
            >
              <Link href="/register">
                <a>Register</a>
              </Link>
            </Item>
            <Item
              key="/login"
              onClick={(e) => setCurrentState(e.key)}
              icon={<LoginOutlined />}
            >
              <Link href="/login">
                <a>Login</a>
              </Link>
            </Item>
          </>
        )}
        {user && user.role && user.role.includes("Instructor") && (
          <Item
            key="/instructor"
            onClick={(e) => setCurrentState(e.key)}
            icon={<TeamOutlined />}
            className="float-right"
          >
            <Link href="/instructor">
              <a>Instructor Dashboard</a>
            </Link>
          </Item>
        )}
        {user && (
          <>
            <SubMenu icon={<CrownOutlined />} title={user && user.name}>
              <ItemGroup>
                <Item keys="/user">
                  <Link href="/user">
                    <a>Dashboard</a>
                  </Link>
                </Item>
                <Item onClick={logout} icon={<LogoutOutlined />}>
                  Logout
                </Item>
              </ItemGroup>
            </SubMenu>
          </>
        )}
      </Menu>
    </>
  );
}

export default TopNav;
