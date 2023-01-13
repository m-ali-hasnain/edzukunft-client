import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";
const technicianSlice = createSlice({
  name: "technician",
  initialState: {
    loading: false,
    details: {},
    error: {},
    status: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {
        return { ...state, loading: true };
      })
      .addCase(register.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          status: action.payload.data.message,
          error: {},
        };
      })
      .addCase(register.rejected, (state, action) => {
        return { ...state, loading: false, error: action.payload };
      })
      .addCase(login.pending, (state, action) => {
        return { ...state, loading: true };
      })
      .addCase(login.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          details: action.payload.data,
          status: "",
          error: {},
        };
      })
      .addCase(login.rejected, (state, action) => {
        return { ...state, loading: false, error: action.payload };
      })
      .addCase(activateAccount.pending, (state, action) => {
        return { ...state, loading: true };
      })
      .addCase(activateAccount.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          status: action.payload.data.message,
          error: {},
        };
      })
      .addCase(activateAccount.rejected, (state, action) => {
        return { ...state, loading: false, error: action.payload };
      })
      .addCase(logoutTechnician.pending, (state, action) => {
        return { ...state, loading: true };
      })
      .addCase(logoutTechnician.fulfilled, (state, action) => {
        return { ...state, loading: false, details: {}, error: {}, status: "" };
      })
      .addCase(logoutTechnician.rejected, (state, action) => {
        return { ...state, error: action.payload };
      })
      .addCase(updateProfileTechnician.pending, (state, action) => {
        return { ...state, loading: true };
      })
      .addCase(updateProfileTechnician.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          details: action.payload.data,
          status: "",
          error: {},
        };
      })
      .addCase(updateProfileTechnician.rejected, (state, action) => {
        return { ...state, loading: false, error: action.payload };
      })
      .addCase(sendResetPasswordLink.pending, (state, action) => {
        return { ...state, loading: true };
      })
      .addCase(sendResetPasswordLink.fulfilled, (state, action) => {
        return { ...state, loading: false };
      })
      .addCase(sendResetPasswordLink.rejected, (state, action) => {
        return { ...state, loading: false, error: action.payload };
      })
      .addCase(resetPassword.pending, (state, action) => {
        return { ...state, loading: true };
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        return { ...state, loading: false, details: action.payload.data };
      })
      .addCase(resetPassword.rejected, (state, action) => {
        return { ...state, loading: false, error: action.payload };
      });
  },
});

// Exporting reducer from technicianSlice
export default technicianSlice.reducer;

// Registering Thunks here
export const register = createAsyncThunk(
  "register/technician",
  async (data, { rejectWithValue }) => {
    try {
      return await axios.post("/api/v1/technician/register", data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const login = createAsyncThunk(
  "login/technician",
  async (data, { rejectWithValue }) => {
    try {
      return await axios.post("/api/v1/technician/login", data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const activateAccount = createAsyncThunk(
  "activateAccount/technician",
  async (data, { rejectWithValue }) => {
    try {
      return await axios.post(
        `/api/v1/technician/activateAccount/?token=${data.token}&id=${data.id}`
      );
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const logoutTechnician = createAsyncThunk(
  "logout/technician",
  async (data, { rejectWithValue }) => {
    try {
      return await axios.delete("/api/v1/technician/logout");
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const changePassword = createAsyncThunk(
  "changePassword/technician",
  async (data, { rejectWithValue }) => {
    const { params, body } = data;
    try {
      return await axios.put("/api/v1/technician/resetPassword", body, {
        params,
      });
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const sendResetPasswordLink = createAsyncThunk(
  "sendResetPasswordLink/technician",
  async (data, { rejectWithValue }) => {
    try {
      return await axios.post("/api/v1/technician/sendResetPasswordLink", data);
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);
export const resetPassword = createAsyncThunk(
  "resetPassword/technician",
  async (data, { rejectWithValue }) => {
    const { params, body } = data;
    try {
      return await axios.put("/api/v1/technician/resetPassword", body, {
        params,
      });
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateProfileTechnician = createAsyncThunk(
  "updateProfile/technician",
  async (data, { rejectWithValue }) => {
    try {
      return await axios.put("/api/v1/technician/updateProfile", data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
