import { useState } from "react"
import { VscMenu } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"

import Sidebar from "../components/core/Dashboard/Sidebar"

function Dashboard() {
  const { loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: authLoading } = useSelector((state) => state.auth)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto flex flex-col">
        {/* Mobile Dashboard Bar */}
        <div className="flex items-center justify-between border-b border-richblack-700 bg-richblack-800 px-4 py-3 md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex items-center gap-x-2 rounded-md bg-richblack-700 px-3 py-1.5 text-xs font-semibold text-richblack-100 hover:text-white transition-colors"
          >
            <VscMenu className="text-base text-yellow-50" />
            <span>Dashboard Menu</span>
          </button>
        </div>
        <div className="mx-auto w-11/12 max-w-[1000px] py-6 sm:py-10">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
