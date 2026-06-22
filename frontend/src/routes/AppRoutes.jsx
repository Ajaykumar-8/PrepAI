import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home
from "../pages/Home";

import Dashboard
from "../pages/Dashboard";

import InterviewPage
from "../pages/InterviewPage";

import TestsPage
from "../pages/TestsPage";

import AnalyticsPage
from "../pages/AnalyticsPage";

import LeaderboardPage
from "../pages/LeaderboardPage";

import HistoryPage
from "../pages/HistoryPage";

import Login
from "../pages/auth/Login";

import Signup
from "../pages/auth/Signup";

import ForgotPassword
from "../pages/auth/ForgotPassword";

import DashboardLayout
from "../layouts/DashboardLayout";

import TestInterface
from "../features/tests/pages/TestInterface";

import ResultPage
from "../pages/ResultPage";

import NotesPage
from "../features/notes/pages/NotesPage";

import CodingPage
from "../features/coding/pages/CodingPage";

import QuestionGeneratorPage
from "../features/admin/questions/pages/QuestionGeneratorPage";

const AppRoutes = () => {

  return (

    <BrowserRouter>

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />



        {/* AUTH */}

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



        {/* DASHBOARD LAYOUT */}

        <Route
          element={<DashboardLayout />}
        >
          <Route
          path="/test-interface"
          element={<TestInterface />}
        />

          <Route
            path="/result"
            element={<ResultPage />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/interview"
            element={<InterviewPage />}
          />

          <Route
            path="/tests"
            element={<TestsPage />}
          />

          <Route
            path="/analytics"
            element={<AnalyticsPage />}
          />

          <Route
            path="/leaderboard"
            element={<LeaderboardPage />}
          />

          <Route
            path="/history"
            element={<HistoryPage />}
          />

          <Route
          path="/notes"
          element={<NotesPage />}
          />

          <Route
            path="/coding"
            element={<CodingPage />}
            />

            <Route
              path="/admin/questions"
              element={
                <QuestionGeneratorPage />
              }
            />

          </Route>

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;