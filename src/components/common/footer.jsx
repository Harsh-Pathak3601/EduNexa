import React from "react"
import { Link } from "react-router-dom"
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa"
import Logo from "../../assets/Logo/Logo-Full-Light.png"

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"]
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code Challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
]
const Plans = ["Paid memberships", "For students", "Business solutions"]
const Community = ["Forums", "Chapters", "Events"]

const Footer = () => {
  return (
    <div className="bg-richblack-800">
      <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
        <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700">
          {/* Section 1 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
            <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7">
              <img src={Logo} alt="Edunexa" className="object-contain" />
              <h1 className="text-richblack-50 font-semibold text-[16px]">Company</h1>
              {["About", "Careers", "Affiliates"].map((ele, i) => (
                <div
                  key={i}
                  className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                >
                  <Link to={ele.toLowerCase()}>{ele}</Link>
                </div>
              ))}
              <div className="flex gap-3 text-lg">
                <FaFacebook />
                <FaGoogle />
                <FaTwitter />
                <FaYoutube />
              </div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7">
              <h1 className="text-richblack-50 font-semibold text-[16px]">Resources</h1>
              {Resources.map((ele, i) => (
                <div
                  key={i}
                  className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                >
                  <Link to={ele.split(" ").join("-").toLowerCase()}>{ele}</Link>
                </div>
              ))}
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7">
              <h1 className="text-richblack-50 font-semibold text-[16px]">Support</h1>
              <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                <Link to="/contact">Help Center</Link>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
            <div className="w-[48%] lg:w-[30%] mb-7">
              <h1 className="text-richblack-50 font-semibold text-[16px]">Plans</h1>
              {Plans.map((ele, i) => (
                <div
                  key={i}
                  className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                >
                  <Link to={ele.split(" ").join("-").toLowerCase()}>{ele}</Link>
                </div>
              ))}
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7">
              <h1 className="text-richblack-50 font-semibold text-[16px]">Community</h1>
              {Community.map((ele, i) => (
                <div
                  key={i}
                  className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                >
                  <Link to={ele.split(" ").join("-").toLowerCase()}>{ele}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto pb-14 text-sm">
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row">
            {BottomFooter.map((ele, i) => (
              <div
                key={i}
                className={`${
                  BottomFooter.length - 1 === i
                    ? ""
                    : "border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
                } px-3`}
              >
                <Link to={ele.split(" ").join("-").toLowerCase()}>{ele}</Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            Made with ❤️ Edunexa © 2024 Edunexa
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

