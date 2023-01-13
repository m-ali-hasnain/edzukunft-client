import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";
const companySlice = createSlice({
  name: "company",
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
      .addCase(logoutCompany.pending, (state, action) => {
        return { ...state, loading: true };
      })
      .addCase(logoutCompany.fulfilled, (state, action) => {
        return { ...state, loading: false, details: {}, error: {}, status: "" };
      })
      .addCase(logoutCompany.rejected, (state, action) => {
        return { ...state, error: action.payload };
      })
      .addCase(updateProfileCompany.pending, (state, action) => {
        return { ...state, loading: true };
      })
      .addCase(updateProfileCompany.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          details: action.payload.data,
          status: "",
          error: {},
        };
      })
      .addCase(updateProfileCompany.rejected, (state, action) => {
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

// Exporting reducer from companySlice
export default companySlice.reducer;

// Registering Thunks here
export const register = createAsyncThunk(
  "register/company",
  async (data, { rejectWithValue }) => {
    try {
      return await axios.post("/api/v1/company/register", data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const login = createAsyncThunk(
  "login/company",
  async (data, { rejectWithValue }) => {
    try {
      return await axios.post("/api/v1/company/login", data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const activateAccount = createAsyncThunk(
  "activateAccount/company",
  async (data, { rejectWithValue }) => {
    try {
      return await axios.post(
        `/api/v1/company/activateAccount/?token=${data.token}&id=${data.id}`
      );
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const logoutCompany = createAsyncThunk(
  "logout/company",
  async (data, { rejectWithValue }) => {
    try {
      return await axios.delete("/api/v1/company/logout");
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const changePassword = createAsyncThunk(
  "changePassword/company",
  async (data, { rejectWithValue }) => {
    const { params, body } = data;
    try {
      return axios.put("/api/v1/company/changePassword", body, { params });
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const sendResetPasswordLink = createAsyncThunk(
  "sendResetPasswordLink/company",
  async (data, { rejectWithValue }) => {
    try {
      return await axios.post("/api/v1/company/sendResetPasswordLink", data);
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);
export const resetPassword = createAsyncThunk(
  "resetPassword/company",
  async (data, { rejectWithValue }) => {
    const { params, body } = data;
    try {
      return await axios.put("/api/v1/company/resetPassword", body, {
        params,
      });
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateProfileCompany = createAsyncThunk(
  "updateProfile/company",
  async (data, { rejectWithValue }) => {
    try {
      return await axios.put("/api/v1/company/updateProfile", data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
