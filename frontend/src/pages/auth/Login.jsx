import { motion } from "framer-motion";

import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

import { useDispatch } from "react-redux";

import API from "../../api/axios";

import { setCredentials } from "../../features/auth/authSlice";

const Login = () => {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submitHandler = async (e) => {

    e.preventDefault();

    try {

      const { data } = await API.post(
        "/auth/login",
        {
          email,
          password,
        }
      );

      dispatch(setCredentials(data));

      navigate("/dashboard");

    } catch (error) {

      alert(
        error?.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center px-4">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900" />

      {/* Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 opacity-20 rounded-full blur-3xl" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl" />

      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >

        <div
          className="
            backdrop-blur-xl
            bg-white/10
            border
            border-white/20
            rounded-3xl
            shadow-2xl
            p-8
          "
        >

          {/* Heading */}
          <div className="text-center mb-8">

            <h1 className="text-4xl font-bold text-white">
              Welcome Back
            </h1>

            <p className="text-gray-300 mt-2">
              Login to continue PrepAI
            </p>

          </div>

          {/* Form */}
          <form
            onSubmit={submitHandler}
            className="space-y-5"
          >

            {/* Email */}
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="
                w-full
                h-12
                px-4
                rounded-2xl
                bg-white/10
                border
                border-white/20
                text-white
                placeholder:text-gray-300
                outline-none
                focus:border-purple-500
              "
              required
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="
                w-full
                h-12
                px-4
                rounded-2xl
                bg-white/10
                border
                border-white/20
                text-white
                placeholder:text-gray-300
                outline-none
                focus:border-purple-500
              "
              required
            />

            {/* Button */}
            <button
              type="submit"
              className="
                w-full
                py-3
                rounded-2xl
                font-semibold
                text-white
                bg-gradient-to-r
                from-purple-600
                to-blue-600
                hover:scale-[1.02]
                transition-all
                duration-300
                shadow-lg
              "
            >
              Login
            </button>

          </form>

          {/* Links */}
          <div className="flex justify-between mt-6 text-sm">

            <Link
              to="/forgot-password"
              className="text-gray-300 hover:text-white"
            >
              Forgot Password?
            </Link>

            <Link
              to="/signup"
              className="text-purple-400 hover:text-purple-300"
            >
              Create Account
            </Link>

          </div>

        </div>

      </motion.div>

    </div>
  );
};

export default Login;