import { useReducer, createContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
// initial state

const initialState = {
  user: null,
};

// create context

const Context = createContext();

// reducer for udpate state : root reducer
const rootReducer = (state, action) => {
  // action will contain two data, action.type and action.payload
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
  }
};

// context provider to wrap the _app.js so it have access to this file
const Provider = ({ children }) => {
  // we use dispatch as useState
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const router = useRouter();

  useEffect(() => {
    dispatch({
      type: "LOGIN",
      payload: JSON.parse(window.localStorage.getItem("user")),
    });
  }, []);

  axios.interceptors.response.use(
    function (response) {
      // triggered when response status is in range 2xx
      return response;
    },
    function (error) {
      // any status codes that falls outside of 2xx
      let res = error.response;
      if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
        // handle if we get 401
        return new Promise((resolve, reject) => {
          axios
            .get("/api/logout")
            .then((data) => {
              //
              console.log("/401 error > logout");
              dispatch({ type: "LOGOUT" });
              window.localStorage.removeItem("user");
              router.push("/login");
            })
            .catch((err) => {
              console.log("AXIOS INTERCEPTORS ERROR", err);
              reject(error);
            });
        });
      }
      return Promise.reject(error);
    }
  );
  useEffect(() => {
    const getCsrfToken = async () => {
      const { data } = await axios.get("/api/csrf-token");
      // console.log("CSRF: " , data);
      axios.defaults.headers["X-CSRF-Token"] = data.getCsrfToken;
    };
    getCsrfToken();
  }, []);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
// next we will set configuration in _app.js