import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import API from "../api/axios";

import { setCredentials } from "../features/auth/authSlice";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submitHandler = async (e) => {

    e.preventDefault();

    try {

      console.log("Login button clicked");

      const { data } = await API.post(
        "/auth/login",
        {
          email,
          password,
        }
      );

      console.log(data);

      dispatch(setCredentials(data));

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert(
        error?.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-4"
        >

          <input
            type="email"
            placeholder="Enter Email"
            className="border p-3 rounded"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="border p-3 rounded"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <button
            type="submit"
            className="bg-black text-white p-3 rounded hover:bg-gray-800"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default Login;