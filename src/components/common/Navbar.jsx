import { useEffect, useState } from "react"
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { VscDashboard, VscSettingsGear, VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom"

import logo from "../../assets/Logo/Logo-Full-Light.png"
import { NavbarLinks } from "../../data/navbar-links"
import { apiConnector } from "../../services/apiConnector"
import { categories } from "../../services/apis"
import { logout } from "../../services/operations/authAPI"
import { ACCOUNT_TYPE } from "../../utils/constants"
import ConfirmationModal from "./ConfirmationModal"
import ProfileDropDown from "../core/Auth/ProfileDropDown"

function Navbar() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const { totalItems } = useSelector((state) => state.cart)
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [subLinks, setSubLinks] = useState([])
  const [loading, setLoading] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileCatalogOpen, setMobileCatalogOpen] = useState(false)
  const [confirmationModal, setConfirmationModal] = useState(null)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API)
        setSubLinks(res.data.data)
      } catch (error) {
        console.log("Could not fetch Categories.", error)
      }
      setLoading(false)
    })()
  }, [])

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setMobileCatalogOpen(false)
  }, [location.pathname])

  // Close drawer if window is resized above mobile breakpoint (768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <>
      <div
        className={`sticky top-0 z-40 flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 bg-richblack-900/90 backdrop-blur-md transition-all duration-200`}
      >
        <div className="flex w-11/12 max-w-maxContent items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="EduNexa Logo" width={150} height={32} loading="lazy" />
          </Link>

          {/* Desktop Navigation links */}
          <nav className="hidden md:block">
            <ul className="flex gap-x-6 text-richblack-25">
              {NavbarLinks.map((link, index) => (
                <li key={index}>
                  {link.title === "Catalog" ? (
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 ${
                        matchRoute("/catalog/:catalogName")
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      <p>{link.title}</p>
                      <BsChevronDown />
                      <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                        {loading ? (
                          <p className="text-center">Loading...</p>
                        ) : subLinks?.length ? (
                          <>
                            {subLinks?.map((subLink, i) => (
                              <Link
                                to={`/catalog/${subLink.name
                                  .split(" ")
                                  .join("-")
                                  .toLowerCase()}`}
                                className="rounded-lg bg-transparent py-3 pl-4 hover:bg-richblack-50 transition-colors"
                                key={i}
                              >
                                <p>{subLink.name}</p>
                              </Link>
                            ))}
                          </>
                        ) : (
                          <p className="text-center">No Categories Found</p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link to={link?.path}>
                      <p
                        className={`${
                          matchRoute(link?.path)
                            ? "text-yellow-25"
                            : "text-richblack-25"
                        }`}
                      >
                        {link.title}
                      </p>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Login / Signup / Cart / Profile */}
          <div className="hidden items-center gap-x-4 md:flex">
            {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
              <Link to="/dashboard/cart" className="relative">
                <AiOutlineShoppingCart className="text-2xl text-richblack-100 hover:text-white transition-colors" />
                {totalItems > 0 && (
                  <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                    {totalItems}
                  </span>
                )}
              </Link>
            )}
            {token === null && (
              <Link to="/login">
                <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 hover:bg-richblack-700 transition-colors">
                  Log in
                </button>
              </Link>
            )}
            {token === null && (
              <Link to="/signup">
                <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 hover:bg-richblack-700 transition-colors">
                  Sign up
                </button>
              </Link>
            )}
            {token !== null && <ProfileDropDown />}
          </div>

          {/* Mobile Right Icons (Cart + Hamburger Button) */}
          <div className="flex items-center gap-x-4 md:hidden">
            {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
              <Link to="/dashboard/cart" className="relative">
                <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
                {totalItems > 0 && (
                  <span className="absolute -bottom-2 -right-2 grid h-4 w-4 place-items-center overflow-hidden rounded-full bg-yellow-100 text-center text-[10px] font-bold text-richblack-900">
                    {totalItems}
                  </span>
                )}
              </Link>
            )}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle Mobile Navigation"
              className="p-1 text-richblack-100 hover:text-white transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? (
                <AiOutlineClose fontSize={26} />
              ) : (
                <AiOutlineMenu fontSize={26} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-14 z-50 flex flex-col justify-between overflow-y-auto bg-richblack-900/95 px-6 py-6 backdrop-blur-md md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col space-y-5">
            {/* Navigation links */}
            <ul className="flex flex-col space-y-3 border-b border-richblack-700 pb-5 text-richblack-25">
              {NavbarLinks.map((link, index) => (
                <li key={index}>
                  {link.title === "Catalog" ? (
                    <div className="flex flex-col">
                      <button
                        type="button"
                        onClick={() => setMobileCatalogOpen((prev) => !prev)}
                        className={`flex w-full items-center justify-between py-2 text-base font-medium ${
                          matchRoute("/catalog/:catalogName")
                            ? "text-yellow-25"
                            : "text-richblack-25"
                        }`}
                      >
                        <span>{link.title}</span>
                        <BsChevronDown
                          className={`transition-transform duration-200 ${
                            mobileCatalogOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileCatalogOpen && (
                        <div className="mt-2 ml-3 flex flex-col space-y-2 border-l border-richblack-700 pl-4 text-sm text-richblack-200">
                          {loading ? (
                            <p className="py-1 text-richblack-400">Loading...</p>
                          ) : subLinks?.length ? (
                            subLinks.map((subLink, i) => (
                              <Link
                                key={i}
                                to={`/catalog/${subLink.name
                                  .split(" ")
                                  .join("-")
                                  .toLowerCase()}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className="py-1 hover:text-yellow-25 transition-colors"
                              >
                                {subLink.name}
                              </Link>
                            ))
                          ) : (
                            <p className="py-1 text-richblack-400">
                              No Categories Found
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link?.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2 text-base font-medium ${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Logged In User Section */}
            {token !== null && (
              <div className="flex flex-col space-y-4">
                {/* User Info Card */}
                <div className="flex items-center gap-x-3 rounded-lg border border-richblack-700 bg-richblack-800 p-3">
                  <img
                    src={user?.image}
                    alt={user?.firstName}
                    className="aspect-square w-12 rounded-full object-cover"
                  />
                  <div className="flex flex-col overflow-hidden">
                    <p className="truncate text-sm font-semibold text-richblack-5">
                      {user?.firstName} {user?.lastName}
                    </p>
                    <p className="truncate text-xs text-richblack-300">
                      {user?.email}
                    </p>
                    <span className="mt-1 w-fit rounded-full bg-richblack-700 px-2 py-0.5 text-[10px] font-medium text-yellow-50 capitalize">
                      {user?.accountType?.toLowerCase()}
                    </span>
                  </div>
                </div>

                {/* Dashboard & Settings Links */}
                <div className="flex flex-col space-y-1 text-sm text-richblack-100">
                  <Link
                    to="/dashboard/my-profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-x-3 rounded-md px-3 py-2.5 hover:bg-richblack-800 hover:text-richblack-25 transition-colors"
                  >
                    <VscDashboard className="text-lg text-yellow-50" />
                    <span>Dashboard</span>
                  </Link>

                  {user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
                    <Link
                      to="/dashboard/cart"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between rounded-md px-3 py-2.5 hover:bg-richblack-800 hover:text-richblack-25 transition-colors"
                    >
                      <div className="flex items-center gap-x-3">
                        <AiOutlineShoppingCart className="text-lg text-yellow-50" />
                        <span>Cart</span>
                      </div>
                      {totalItems > 0 && (
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-yellow-100 text-xs font-bold text-richblack-900">
                          {totalItems}
                        </span>
                      )}
                    </Link>
                  )}

                  <Link
                    to="/dashboard/settings"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-x-3 rounded-md px-3 py-2.5 hover:bg-richblack-800 hover:text-richblack-25 transition-colors"
                  >
                    <VscSettingsGear className="text-lg text-richblack-200" />
                    <span>Settings</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Actions (Login/Signup or Logout) */}
          <div className="pt-6">
            {token === null ? (
              <div className="flex flex-col gap-y-3">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full"
                >
                  <button className="w-full rounded-[8px] border border-richblack-700 bg-richblack-800 py-3 text-center text-sm font-semibold text-richblack-100 hover:bg-richblack-700 transition-colors">
                    Log in
                  </button>
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full"
                >
                  <button className="w-full rounded-[8px] bg-yellow-50 py-3 text-center text-sm font-semibold text-richblack-900 hover:bg-yellow-100 transition-colors">
                    Sign up
                  </button>
                </Link>
              </div>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  setConfirmationModal({
                    text1: "Are you sure?",
                    text2: "You will be logged out of your account.",
                    btn1Text: "Logout",
                    btn2Text: "Cancel",
                    btn1Handler: () => dispatch(logout(navigate)),
                    btn2Handler: () => setConfirmationModal(null),
                  })
                }}
                className="flex w-full items-center justify-center gap-x-2 rounded-lg border border-pink-700/50 bg-pink-900/20 py-3 text-sm font-semibold text-pink-200 hover:bg-pink-900/40 transition-colors"
              >
                <VscSignOut className="text-lg" />
                <span>Logout</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Confirmation Modal for Mobile Logout */}
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}

export default Navbar
