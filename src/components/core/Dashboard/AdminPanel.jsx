import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { VscAdd, VscLayers } from "react-icons/vsc"

import {
  createCategory,
  fetchCourseCategories,
} from "../../../services/operations/courseDetailsAPI"
import IconBtn from "../../common/IconBtn"

export default function AdminPanel() {
  const { token } = useSelector((state) => state.auth)
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const loadCategories = async () => {
    setLoading(true)
    const result = await fetchCourseCategories()
    if (result) {
      setCategories(result)
    }
    setLoading(false)
  }

  useEffect(() => {
    loadCategories()
  }, [])

  const onSubmit = async (data) => {
    setSubmitting(true)
    const success = await createCategory(
      {
        name: data.categoryName,
        description: data.categoryDescription,
      },
      token
    )
    if (success) {
      reset()
      await loadCategories()
    }
    setSubmitting(false)
  }

  return (
    <div className="space-y-8 text-richblack-5">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-medium text-richblack-5">Admin Panel</h1>
        <p className="mt-1 text-sm text-richblack-300">
          Create and manage course categories for the Edunexa platform.
        </p>
      </div>

      {/* Create Category Section */}
      <div className="rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
        <div className="flex items-center gap-x-2 text-xl font-semibold text-richblack-5">
          <VscAdd className="text-yellow-50" />
          <h2>Create New Category</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          {/* Category Name */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm text-richblack-5" htmlFor="categoryName">
              Category Name <sup className="text-pink-200">*</sup>
            </label>
            <input
              id="categoryName"
              placeholder="e.g. Web Development, Python, Machine Learning"
              {...register("categoryName", { required: true })}
              className="form-style w-full rounded-lg bg-richblack-700 p-3 text-richblack-5 outline-none border border-richblack-600 focus:border-yellow-50"
            />
            {errors.categoryName && (
              <span className="text-xs text-pink-200">
                Category name is required
              </span>
            )}
          </div>

          {/* Category Description */}
          <div className="flex flex-col space-y-2">
            <label
              className="text-sm text-richblack-5"
              htmlFor="categoryDescription"
            >
              Description <sup className="text-pink-200">*</sup>
            </label>
            <textarea
              id="categoryDescription"
              rows={3}
              placeholder="Write a brief overview of what this category covers..."
              {...register("categoryDescription", { required: true })}
              className="form-style w-full rounded-lg bg-richblack-700 p-3 text-richblack-5 outline-none border border-richblack-600 focus:border-yellow-50"
            />
            {errors.categoryDescription && (
              <span className="text-xs text-pink-200">
                Category description is required
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-2">
            <IconBtn
              type="submit"
              disabled={submitting}
              text={submitting ? "Creating..." : "Create Category"}
            >
              <VscAdd className="text-lg" />
            </IconBtn>
          </div>
        </form>
      </div>

      {/* Existing Categories Section */}
      <div className="rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
        <div className="flex items-center justify-between border-b border-richblack-700 pb-4">
          <div className="flex items-center gap-x-2 text-xl font-semibold text-richblack-5">
            <VscLayers className="text-yellow-50" />
            <h2>Existing Categories ({categories.length})</h2>
          </div>
          <button
            onClick={loadCategories}
            className="text-xs text-yellow-50 hover:underline"
            type="button"
          >
            Refresh
          </button>
        </div>

        {loading ? (
          <div className="py-12 text-center text-richblack-300">
            Loading categories...
          </div>
        ) : categories.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-richblack-300">No categories created yet.</p>
            <p className="mt-1 text-xs text-richblack-400">
              Create your first category above so instructors can assign courses
              and students can browse the catalog.
            </p>
          </div>
        ) : (
          <div className="mt-4 divide-y divide-richblack-700">
            {categories.map((cat) => (
              <div
                key={cat._id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-4"
              >
                <div className="space-y-1">
                  <p className="font-semibold text-richblack-50">{cat.name}</p>
                  <p className="text-xs text-richblack-300">
                    {cat.description || "No description provided."}
                  </p>
                </div>
                <div className="flex items-center gap-x-4 text-xs">
                  <span className="rounded-full bg-richblack-700 px-3 py-1 text-richblack-200">
                    {cat.courses?.length || 0} course(s)
                  </span>
                  <span className="text-richblack-400 font-mono text-[11px]">
                    ID: {cat._id}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

