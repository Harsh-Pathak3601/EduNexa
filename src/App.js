import "./App.css"
import { useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getUserDetails } from "./services/operations/profileAPI"

import Navbar from "./components/common/Navbar"
import OpenRoute from "./components/core/Auth/OpenRoute"
import PrivateRoute from "./components/core/Auth/PrivateRoute"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ForgotPassword from "./pages/ForgotPassword"
import UpdatePassword from "./pages/UpdatePassword"
import VerifyEmail from "./pages/VerifyEmail"
import About from "./pages/About"
import Contact from "./pages/Contact"
import CourseDetails from "./pages/CourseDetails"
import Catalog from "./pages/Catalog"
import Dashboard from "./pages/Dashboard"
import ViewCourse from "./pages/ViewCourse"
import Error from "./pages/Error"

import MyProfile from "./components/core/Dashboard/MyProfile"
import Settings from "./components/core/Dashboard/Settings"
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses"
import Cart from "./components/core/Dashboard/Cart"
import Instructor from "./components/core/Dashboard/Instructor"
import MyCourses from "./components/core/Dashboard/MyCourses"
import AddCourse from "./components/core/Dashboard/AddCourse"
import EditCourse from "./components/core/Dashboard/EditCourse"
import AdminPanel from "./components/core/Dashboard/AdminPanel"
import VideoDetails from "./components/core/ViewCourse/VideoDetails"

import { ACCOUNT_TYPE } from "./utils/constants"

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)

  useEffect(() => {
    if (token && !user) {
      dispatch(getUserDetails(token, navigate))
    }
  }, [token, user, dispatch, navigate])

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/catalog/:catalogName" element={<Catalog />} />

        {/* Open Routes - For Unauthenticated Users */}
        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="/update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="/verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />

        {/* Protected Dashboard Routes */}
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard/my-profile" element={<MyProfile />} />
          <Route path="/dashboard/settings" element={<Settings />} />

          {/* Student Specific Routes */}
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="/dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
              <Route path="/dashboard/cart" element={<Cart />} />
            </>
          )}

          {/* Instructor Specific Routes */}
          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="/dashboard/instructor" element={<Instructor />} />
              <Route path="/dashboard/my-courses" element={<MyCourses />} />
              <Route path="/dashboard/add-course" element={<AddCourse />} />
              <Route
                path="/dashboard/edit-course/:courseId"
                element={<EditCourse />}
              />
            </>
          )}

          {/* Admin Specific Routes */}
          {user?.accountType === ACCOUNT_TYPE.ADMIN && (
            <>
              <Route
                path="/dashboard/admin-panel"
                element={<AdminPanel />}
              />
            </>
          )}
        </Route>

        {/* View Course Routes */}
        <Route
          element={
            <PrivateRoute>
              <ViewCourse />
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <Route
              path="/view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
              element={<VideoDetails />}
            />
          )}
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
