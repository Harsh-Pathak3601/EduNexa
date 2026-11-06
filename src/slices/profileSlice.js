import { createSlice } from "@reduxjs/toolkit"

const getInitialUser = () => {
  const raw = localStorage.getItem("user")
  if (!raw) return null
  try {
    return JSON.parse(raw)
  } catch (e) {
    return null
  }
}

const initialState = {
  user: getInitialUser(),
  loading: false,
}

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setUser(state, value) {
      state.user = value.payload
    },
    setLoading(state, value) {
      state.loading = value.payload
    },
  },
})

export const { setUser, setLoading } = profileSlice.actions

export default profileSlice.reducer
