import axios from "axios";
import { useState, useEffect } from "react";
import InstructorRoute from "../../../components/routes/InstructorRoute";
import CourseCreateForm from "../../../components/forms/CourseCreateForm";
import Resizer from "react-image-file-resizer";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const CourseCreate = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "9.99",
    uploading: false,
    paid: true,
    category: "",
    loading: false,
    imagePreview: "",
  });
  const [image, setImage] = useState({});
  const [preview, setPreviews] = useState("");
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");

  const router = useRouter();
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
      const { data } = await axios.post("/api/course", {
        ...values,
        image,
      });
      toast("Great! Now you can start adding lessons");
      router.push("/instructor");
    } catch (err) {
      toast(err.response.data);
    }
  };

  return (
    <>
      <InstructorRoute>
        <h1 className="jumbotron text-center square p-5">Create Course</h1>{" "}
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
          />
        </div>
        {JSON.stringify(values, null, 4)}
        {JSON.stringify(image, null, 4)}
      </InstructorRoute>
    </>
  );
};

export default CourseCreate;
