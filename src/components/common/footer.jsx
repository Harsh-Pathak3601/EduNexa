import React from "react"
import { Link } from "react-router-dom"
import { FiArrowUp, FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi"
import Logo from "../../assets/Logo/Logo-Full-Light.png"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-richblack-900 text-richblack-400 font-inter">
      {/* Subtle Glowing Gradient Divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-richblack-600 to-transparent" />

      <div className="mx-auto max-w-maxContent px-6 py-12">
        {/* Main Grid: Clean 3-part layout */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 pb-10 border-b border-richblack-800">
          
          {/* Brand & Purpose */}
          <div className="space-y-4 max-w-sm">
            <Link to="/" className="inline-block">
              <img
                src={Logo}
                alt="Edunexa"
                className="h-8 w-auto object-contain transition-opacity hover:opacity-90"
              />
            </Link>
            <p className="text-sm leading-relaxed text-richblack-300">
              Modern, hands-on learning designed for future-ready developers.
              Learn, build, and master industry skills at your own pace.
            </p>

            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-richblack-700 bg-richblack-800/80 px-3 py-1 text-xs text-richblack-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-caribbeangreen-100 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-caribbeangreen-100" />
              </span>
              <span>All systems normal</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            {/* Explore */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-richblack-100">
                Explore
              </p>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-richblack-400 hover:text-yellow-50 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-richblack-400 hover:text-yellow-50 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-richblack-400 hover:text-yellow-50 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Platform */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-richblack-100">
                Platform
              </p>
              <ul className="space-y-2">
                <li>
                  <Link to="/signup" className="text-richblack-400 hover:text-yellow-50 transition-colors">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-richblack-400 hover:text-yellow-50 transition-colors">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/my-profile" className="text-richblack-400 hover:text-yellow-50 transition-colors">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-3 col-span-2 sm:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-richblack-100">
                Connect
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:support@edunexa.com"
                    className="flex items-center gap-1.5 text-richblack-400 hover:text-yellow-50 transition-colors"
                  >
                    <FiMail className="text-xs" />
                    <span>Support</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-richblack-400 hover:text-yellow-50 transition-colors"
                  >
                    <FiGithub className="text-xs" />
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-richblack-400 hover:text-yellow-50 transition-colors"
                  >
                    <FiTwitter className="text-xs" />
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-richblack-400 hover:text-yellow-50 transition-colors"
                  >
                    <FiLinkedin className="text-xs" />
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Back to top button */}
          <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-4">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 rounded-lg border border-richblack-700 bg-richblack-800 px-3.5 py-2 text-xs font-medium text-richblack-300 transition-all hover:border-yellow-50/50 hover:bg-richblack-700 hover:text-richblack-5"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <FiArrowUp className="transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Clean & Minimal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-richblack-400">
          <p>© {new Date().getFullYear()} Edunexa. Crafted with passion.</p>
          <div className="flex items-center gap-6">
            <span className="text-richblack-500">Built for developers</span>
            <span className="text-richblack-600">•</span>
            <span className="text-yellow-50">Edunexa v1.0</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
