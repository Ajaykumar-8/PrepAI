import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



/* Pages */

import Home from "../pages/Home";

import Login from "../pages/auth/Login";

import Signup from "../pages/auth/Signup";

import ForgotPassword from "../pages/auth/ForgotPassword";

import Dashboard from "../pages/Dashboard";

import InterviewPage from "../pages/InterviewPage";



/* Protected Route */

import ProtectedRoute
from "./ProtectedRoute";



const AppRoutes = () => {

  return (

    <BrowserRouter>

      <Routes>

        {/* Public Routes */}

        <Route
          path="/"
          element={<Home />}
        />



        <Route
          path="/login"
          element={<Login />}
        />



        <Route
          path="/signup"
          element={<Signup />}
        />



        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />



        {/* Protected Routes */}

        <Route element={<ProtectedRoute />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />



          <Route
            path="/interview"
            element={<InterviewPage />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;