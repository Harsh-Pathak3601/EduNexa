import React, { useRef } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import Course_Card from "./Course_Card"

function Course_Slider({ Courses }) {
  const sliderRef = useRef(null)

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full">
      {Courses?.length ? (
        <div className="group relative">
          <button
            onClick={scrollLeft}
            aria-label="Scroll left"
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-richblack-700/80 text-white shadow-lg backdrop-blur hover:bg-richblack-600 transition-all"
          >
            <FaChevronLeft size={16} />
          </button>

          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
            style={{ scrollbarWidth: "none" }}
          >
            {Courses.map((course, i) => (
              <div
                key={course._id || i}
                className="w-[280px] sm:w-[320px] flex-shrink-0"
              >
                <Course_Card course={course} Height={"h-[200px]"} />
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            aria-label="Scroll right"
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-richblack-700/80 text-white shadow-lg backdrop-blur hover:bg-richblack-600 transition-all"
          >
            <FaChevronRight size={16} />
          </button>
        </div>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </div>
  )
}

export default Course_Slider
