import axios from "axios";
import InstructorRoute from "../../components/routes/InstructorRoute";
import { useState, useEffect } from "react";
import { Avatar } from "antd";
import Link from "next/link";

const InstructorIndex = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);
  const loadCourses = async () => {
    const { data } = await axios.get("/api/instructor/courses");
    setCourses(data);
  };
  return (
    <>
      <InstructorRoute>
        <h1 className="jumbotron square text-center p-4 bg-primary">
          Instructor Dashboard
        </h1>
        {courses &&
          courses.map((course) => {
            return (
              <>
                <div className="media pt-2">
                  <Avatar
                    size={80}
                    src={course.image ? course.image.Location : "/course.png"}
                  />

                  <div className="media-body pl-2">
                    <div className="row">
                      <div className="col">
                        <Link
                          href={`/instructor/course/view/${course.slug}`}
                          className="pointer"
                        >
                          <a className="h5 mt-2 text-primary">{course.name}</a>
                        </Link>
                        <p>{course.lessons.length} Lessons</p>

                        {course.lessons.length < 5 ? (
                          <p>
                            At least 5 lessons are required to publish a course
                          </p>
                        ) : course.published ? (
                          <p>Your course is live in the marketplace</p>
                        ) : (
                          <p>Your course is ready to be published</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </InstructorRoute>
    </>
  );
};

export default InstructorIndex;
