import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit"
import { customAlert } from "@/alerts"
import { useAppSelector } from "@/app/hooks"
import { fetchLogin } from "./authenticationApi"
import { RootState } from "../../app/store"

export interface AuthState {
  status: "idle" | "loading" | "error"
  isAuthenticated: boolean
}

const initialState: AuthState = {
  status: "idle",
  isAuthenticated: false,
}

export const login = createAsyncThunk(
  "auht/login",
  async (
    data: { email: string; password: string },
    thunkApi,
  ) => {
    try {
      const response = await fetchLogin(
        data.email,
        data.password,
      )
      //Esta devolución es el payload de la acción en extraReducers en caso que la promesa se resuelva
      return response.isAuthenticated
    } catch (error) {
      console.error("ERROR:", error)
      customAlert({
        type: "error",
        title: "Error",
        text: error as string,
      })
      // error: Esta devolución es el payload de la acción en extraReducers en caso que la promesa se rechaze
      return thunkApi.rejectWithValue(error)
    }
  },
)

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: state => {
      state.isAuthenticated = false
    },
  },
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.status = "loading"
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = "idle"
      state.isAuthenticated = action.payload
    })
    builder.addCase(login.rejected, (state, action) => {
      state.status = "error"
    })
  },
})

export const { logout } = authSlice.actions

export const useAuth = () =>
  useAppSelector((state: RootState) => state.auth)

export default authSlice.reducer
