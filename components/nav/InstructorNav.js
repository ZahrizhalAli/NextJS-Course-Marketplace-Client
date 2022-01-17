import Link from "next/link";
import { useState, useEffect } from "react";
const InstructorNav = () => {
  const [current, setCurrentState] = useState("");

  useEffect(() => {
    process.browser && setCurrentState(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  return (
    <>
      {" "}
      <div className="nav flex-column nav-pills mt-2">
        <Link href="/user">
          <a className={`nav-link ${current == "/instructor" && "active"}`}>
            Dashboard
          </a>
        </Link>
        <Link href="/">
          <a
            className={`nav-link ${
              current == "/instructor/course/create" && "active"
            }`}
          >
            Create Course
          </a>
        </Link>
      </div>
    </>
  );
};

export default InstructorNav;
