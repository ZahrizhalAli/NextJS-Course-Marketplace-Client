import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../public/css/style.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import TopNav from "../components/TopNav";
import { Provider } from "../context/";

function App({ Component, pareProps }) {
  return (
    <>
      <Provider>
        <ToastContainer position="top-center" />
        <TopNav />
        <Component {...pareProps} />
      </Provider>
    </>
  );
}

export default App;
