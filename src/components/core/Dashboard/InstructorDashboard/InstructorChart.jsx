import { useState } from "react"

export default function InstructorChart({ courses }) {
  const [currChart, setCurrChart] = useState("students")

  const colors = [
    "#FBBF24", // yellow
    "#34D399", // emerald
    "#60A5FA", // blue
    "#F472B6", // pink
    "#A78BFA", // purple
    "#F87171", // red
    "#38BDF8", // sky
  ]

  const totalValue = courses?.reduce((acc, course) => {
    return (
      acc +
      (currChart === "students"
        ? course.totalStudentsEnrolled
        : course.totalAmountGenerated)
    )
  }, 0)

  return (
    <div className="flex flex-1 flex-col rounded-md bg-richblack-800 p-6">
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold text-richblack-5">Visualise</p>
        <div className="space-x-4 font-semibold">
          <button
            onClick={() => setCurrChart("students")}
            className={`rounded-sm p-1 px-3 transition-all duration-200 ${
              currChart === "students"
                ? "bg-richblack-700 text-yellow-50"
                : "text-yellow-400"
            }`}
          >
            Students
          </button>
          <button
            onClick={() => setCurrChart("income")}
            className={`rounded-sm p-1 px-3 transition-all duration-200 ${
              currChart === "income"
                ? "bg-richblack-700 text-yellow-50"
                : "text-yellow-400"
            }`}
          >
            Income
          </button>
        </div>
      </div>

      <div className="relative mx-auto mt-6 flex w-full flex-col gap-4">
        {courses?.map((course, index) => {
          const val =
            currChart === "students"
              ? course.totalStudentsEnrolled
              : course.totalAmountGenerated
          const percent = totalValue > 0 ? Math.round((val / totalValue) * 100) : 0
          const color = colors[index % colors.length]

          return (
            <div key={course._id || index} className="space-y-1">
              <div className="flex justify-between text-xs font-medium text-richblack-200">
                <span className="line-clamp-1 max-w-[70%] text-richblack-50">
                  {course.courseName}
                </span>
                <span>
                  {currChart === "income" ? `₹${val}` : `${val} students`} ({percent}%)
                </span>
              </div>
              <div className="h-3 w-full rounded-full bg-richblack-700 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${percent}%`,
                    backgroundColor: color,
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

