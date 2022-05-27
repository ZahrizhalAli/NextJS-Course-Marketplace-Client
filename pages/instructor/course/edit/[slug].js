import axios from "axios";
import { useState, useEffect } from "react";
import InstructorRoute from "../../../../components/routes/InstructorRoute";
import CourseCreateForm from "../../../../components/forms/CourseCreateForm";
import Resizer from "react-image-file-resizer";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { List, Avatar } from "antd";

const CourseEdit = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "9.99",
    uploading: false,
    paid: true,
    category: "",
    loading: false,
    imagePreview: "",
    lessons: [],
  });
  const [image, setImage] = useState({});
  const [preview, setPreviews] = useState("");
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const router = useRouter();

  const { slug } = router.query;

  useEffect(() => {
    loadCourse();
  }, [slug]);

  const loadCourse = async () => {
    const { data } = await axios.get(`/api/course/${slug}`);
    setValues(data);
    if (data && data.image) setImage(data.image);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleImageRemove = async () => {
    //
    setValues({ ...values, loading: true });

    try {
      const res = await axios.post("/api/course/remove-image", { image });
      setImage({});
      setPreviews("");
      setUploadButtonText("Upload Image");
      setValues({ ...values, loading: false });
    } catch (err) {
      console.log(err);
      toast(err.response.data);
      setValues({ ...values, loading: false });
    }
  };

  const handleImage = (e) => {
    //
    let file = e.target.files[0];
    setPreviews(window.URL.createObjectURL(file));
    setUploadButtonText(file.name);
    setValues({ ...values, loading: true });

    //resize image
    Resizer.imageFileResizer(file, 720, 500, "JPEG", 100, 0, async (uri) => {
      try {
        // send resized image to back end
        let { data } = await axios.post("/api/course/upload-image", {
          image: uri,
        });

        // set image in the state
        setImage(data);
        setValues({ ...values, loading: false });
        toast("Image uploaded");
      } catch (err) {
        console.log(err);
        setValues({ ...values, loading: false });
        toast(err.response.data);
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/api/course/${slug}`, {
        ...values,
        image,
      });
      toast("Course Updated");
      // continue to lessons updated page if instructor might wants to update lesson as well
    } catch (err) {
      toast(err.response.data);
    }
  };

  const handleDrag = async (e) => {
    console.log("  ON  DRAG=> " , e);
  };

  const handleDrop = async (e) => {
    console.log(e);
  };
  return (
    <>
      <InstructorRoute>
        {values && (
          <>
            <h1 className="jumbotron text-center square p-5">Update Course</h1>{" "}
            <div className="pt-3 pb-3">
              <CourseCreateForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleImage={handleImage}
                handleImageRemove={handleImageRemove}
                values={values}
                setValues={setValues}
                preview={preview}
                uploadButtonText={uploadButtonText}
                editPage={true}
              />
            </div>
            <hr />
            <div className="row pt-5 ">
              <div className="col lesson-list">
                <h4>
                  {values && values.lessons && values.lessons.length} lessons
                </h4>
                <List
                  onDragOver={(e) => e.preventDefault()}
                  itemLayout="horizontal"
                  dataSource={values && values.lessons}
                  renderItem={(item, index) => (
                    <List.Item
                      draggable
                      onDragStart={(e) => handleDrag(e, index)}
                      onDrop={(e) => handleDrop(e, index)}
                    >
                      <List.Item.Meta
                        avatar={<Avatar>{index + 1}</Avatar>}
                        title={item.title}
                      ></List.Item.Meta>
                    </List.Item>
                  )}
                ></List>
              </div>
            </div>
          </>
        )}
      </InstructorRoute>
    </>
  );
};

export default CourseEdit;
