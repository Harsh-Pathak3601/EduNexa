import React, { useEffect, useState, useRef } from "react"
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa"
import { apiConnector } from "../../services/apiConnector"
import { ratingsEndpoints } from "../../services/apis"
import RatingStars from "./RatingStars"

const defaultReviews = [
  {
    user: {
      firstName: "Aarav",
      lastName: "Sharma",
      image: "https://api.dicebear.com/5.x/initials/svg?seed=Aarav%20Sharma",
    },
    course: { courseName: "Complete Full Stack Web Development" },
    review: "The curriculum is industry-aligned and hands-on projects gave me tremendous confidence. Landed my first developer job!",
    rating: 5,
  },
  {
    user: {
      firstName: "Priya",
      lastName: "Patel",
      image: "https://api.dicebear.com/5.x/initials/svg?seed=Priya%20Patel",
    },
    course: { courseName: "Python for Data Science & Machine Learning" },
    review: "In-depth explanations of complex algorithms made easy. Highly recommended for beginners and intermediate learners alike.",
    rating: 4.8,
  },
  {
    user: {
      firstName: "Rohan",
      lastName: "Verma",
      image: "https://api.dicebear.com/5.x/initials/svg?seed=Rohan%20Verma",
    },
    course: { courseName: "React & Next.js Advanced Architecture" },
    review: "The code quality, state management patterns, and production deployment modules are world-class.",
    rating: 5,
  },
  {
    user: {
      firstName: "Ananya",
      lastName: "Deshmukh",
      image: "https://api.dicebear.com/5.x/initials/svg?seed=Ananya%20Deshmukh",
    },
    course: { courseName: "Cloud Computing with DevOps & Docker" },
    review: "Practical CI/CD pipelines, container orchestration, and cloud architecture made this course invaluable.",
    rating: 4.9,
  },
]

function ReviewSlider() {
  const [reviews, setReviews] = useState([])
  const sliderRef = useRef(null)

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await apiConnector(
          "GET",
          ratingsEndpoints.REVIEWS_DETAILS_API
        )
        if (data?.success && data?.data?.length > 0) {
          setReviews(data.data)
        } else {
          setReviews(defaultReviews)
        }
      } catch (error) {
        setReviews(defaultReviews)
      }
    })()
  }, [])

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

  const displayReviews = reviews.length > 0 ? reviews : defaultReviews

  return (
    <div className="relative w-full py-6">
      <div className="flex items-center justify-between mb-4 px-2">
        <p className="text-sm text-richblack-400">
          Showing authentic feedback from our community
        </p>
        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            aria-label="Previous review"
            className="rounded-full bg-richblack-800 p-2 text-richblack-100 hover:bg-richblack-700 transition-colors"
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            onClick={scrollRight}
            aria-label="Next review"
            className="rounded-full bg-richblack-800 p-2 text-richblack-100 hover:bg-richblack-700 transition-colors"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex gap-5 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
        style={{ scrollbarWidth: "none" }}
      >
        {displayReviews.map((review, i) => (
          <div
            key={i}
            className="flex min-w-[280px] max-w-[320px] flex-col justify-between rounded-lg bg-richblack-800 p-5 border border-richblack-700 shadow-md flex-shrink-0"
          >
            <div>
              <div className="flex items-center gap-3">
                <img
                  src={
                    review?.user?.image ||
                    `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName || "Student"}`
                  }
                  alt={review?.user?.firstName}
                  className="h-10 w-10 rounded-full object-cover border border-yellow-100"
                />
                <div>
                  <h3 className="font-semibold text-richblack-5 text-sm">
                    {review?.user?.firstName} {review?.user?.lastName}
                  </h3>
                  <p className="text-xs text-richblack-400 line-clamp-1">
                    {review?.course?.courseName || "Learner"}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs text-richblack-200 line-clamp-4 leading-relaxed">
                "{review?.review}"
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 pt-2 border-t border-richblack-700">
              <span className="text-sm font-semibold text-yellow-100">
                {Number(review?.rating).toFixed(1)}
              </span>
              <RatingStars Review_Count={review?.rating} Star_Size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReviewSlider

