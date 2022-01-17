import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import InstructorRoute from "../../../../components/routes/InstructorRoute";
import axios from "axios";
import { Avatar, Tooltip, Button, Modal } from "antd";
import { EditOutlined, CheckOutlined, UploadOutlined } from "@ant-design/icons";
import ReactMarkdown from "react-markdown";
// Import form
import AddLessonForm from "../../../../components/forms/AddLessonForm";
import { toast } from "react-toastify";

const CourseView = () => {
  const [course, setCourse] = useState({});
  const [visible, setVisible] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [values, setValues] = useState({
    title: "",
    content: "",
    video: {},
  });
  const [uploadButtonText, setUploadButtonText] = useState("Upload Video");

  const [progress, setProgress] = useState(0);
  const router = useRouter();

  const { slug } = router.query;

  useEffect(() => {
    loadCourse();
  }, [slug]);
  // everytime slug changes , all the functions inside the useEffect change runs

  const loadCourse = async () => {
    const { data } = await axios.get(`/api/course/${slug}`);
    setCourse(data);
  };

  // Function for add lesson
  const handleAddLesson = (e) => {
    e.preventDefault();
    console.log(values);
  };
  const handleVideo = async (e) => {
    try {
      const file = e.target.files[0];
      setUploadButtonText(file.name);
      setUploading(true);
      // send as formdata because video took to big if in binary form
      const videoData = new FormData();
      videoData.append("video", file);
      // save progress bar and send  video as form data to backend
      const { data } = await axios.post(
        `/api/course/video-upload/${course.instructor._id}`,
        videoData,
        {
          // Upload built in function for progress
          onUploadPogress: (e) => {
            setProgress(Math.round(100 * e.loaded) / e.total);
          },
        }
      );

      // once response is received
      console.log(data);
      setValues({ ...values, video: data });
      setUploading(false);
    } catch (err) {
      setUploading(false);
      toast("Video upload failed");
    }
  };

  const handleVideoRemove = async () => {
    try {
      setUploading(true);
      const { data } = await axios.post(
        `/api/course/video-remove/${course.instructor._id}`,
        values.video
      );

      setValues({ ...values, video: {} });
      setUploading(false);
      setUploadButtonText("Upload another video");
    } catch (err) {
      setUploading(false);
      toast("Video Remove Failed");
    }
  };
  return (
    <InstructorRoute>
      <div className="container-fluid pt-3">
        {course && (
          <div className="container-fluid pt-1">
            <div className="media pt-2">
              <Avatar
                size={100}
                src={course.image ? course.image.Location : "/course.png"}
              />
              <div className="media-body pl-2">
                <div className="row">
                  <div className="col">
                    <h5 className="mt-2 text-primary">{course.name}</h5>
                    <p>{course.lessons && course.lessons.length} Lessons</p>
                    <p style={{ marginTop: "-15px", fontSize: "10px" }}>
                      {course.category}
                    </p>
                  </div>
                  <div className="d-flex">
                    <Tooltip title="edit">
                      <EditOutlined className="h5 pointer text-warning m-2" />
                    </Tooltip>
                    <Tooltip title="publish">
                      <CheckOutlined className="h5 pointer  m-2" />
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <ReactMarkdown>{course.description}</ReactMarkdown>
              </div>
            </div>
            <div className="row">
              <Button
                onClick={() => setVisible(true)}
                className="col-md-6 offset-md-3 text-center "
                type="primary"
                shape="round"
                icon={<UploadOutlined />}
                size="large"
              >
                Add Lesson
              </Button>
              <Modal
                title="+ Add Lesson"
                centered
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={null}
              >
                <AddLessonForm
                  values={values}
                  setValues={setValues}
                  uploading={uploading}
                  setUploading={setUploading}
                  handleAddLesson={handleAddLesson}
                  uploadButtonText={uploadButtonText}
                  setUploadButtonText={setUploadButtonText}
                  handleVideo={handleVideo}
                  progress={progress}
                  handleVideoRemove={handleVideoRemove}
                />
              </Modal>
            </div>
          </div>
        )}
      </div>
    </InstructorRoute>
  );
};

export default CourseView;
