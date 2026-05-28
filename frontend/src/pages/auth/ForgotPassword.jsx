import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import { useState } from "react";

const ForgotPassword = () => {

  const [email, setEmail] = useState("");

  const submitHandler = (e) => {

    e.preventDefault();

    alert(
      `Password reset link sent to ${email}`
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center px-4">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900" />

      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 opacity-20 rounded-full blur-3xl" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl" />



      {/* Card */}
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

          <div className="text-center mb-8">

            <h1 className="text-4xl font-bold text-white">
              Forgot Password
            </h1>

            <p className="text-gray-300 mt-2">
              Enter your email to reset password
            </p>

          </div>



          <form
            onSubmit={submitHandler}
            className="space-y-5"
          >

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
              "
              required
            />

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
              "
            >
              Send Reset Link
            </button>

          </form>



          <div className="mt-6 text-center text-sm">

            <Link
              to="/login"
              className="text-purple-400 hover:text-purple-300"
            >
              Back to Login
            </Link>

          </div>

        </div>

      </motion.div>

    </div>
  );
};

export default ForgotPassword;