import React, { useReducer, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AddDefects from "./AddDefects";
import AllDefects from "./AllDefects";

const LogIn = () => {
  const navigate = useNavigate();
  const UserName = useRef();
  const Password = useRef();
  const AdminUserName = useRef();
  const AdminPassword = useRef();

  const getUserName = localStorage.getItem("UserName");
  const getPassword = localStorage.getItem("Password");
  

  const handleSubmit = () => {
    if (
      UserName.current.value == "Test@123" &&
      Password.current.value == "81033"
    ) {
      localStorage.setItem("UserName", "Test@123");
      localStorage.setItem("Password", "81033");
      navigate("/AddDefects")

    }

    else if(
        UserName.current.value == "Admin@123" &&
        Password.current.value == "8103"
    )
    {
      localStorage.setItem("UserName", "Admin@123");
      localStorage.setItem("Password", "8103");
      navigate("/AllDefects")
    }
  };

  return (
    <>
   
      {/* ?{getUserName && getPassword ? (
        <AddDefects />
      ): */}
      


      (

        
        <div className="conatiner mx-auto my-5  w-50 px-3 border rounded">
          <form className="container mx-3 my-3">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                ref={UserName ||AdminUserName}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                ref={Password ||AdminPassword}
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Remember Password
              </label>
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              onClick={() => handleSubmit()}
            >
              LogIn
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default LogIn;
