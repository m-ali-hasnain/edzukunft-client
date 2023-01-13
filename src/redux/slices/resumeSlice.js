import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../api/axios.js";
const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    details: {
      personalDetails: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        address: "",
        socialLinks: [],
        title: "",
      },
      educationDetails: [],
      experienceDetails: [],
      skillsDetails: [
        {
          id: 1,
          title: "Programming Languages",
          placeHolder: ["C++", "Python", "Java", "C#"],
          value: [],
        },
        {
          id: 2,
          title: "Libraries / Frameworks",
          placeHolder: ["React JS", "Ruby On Rails", "Express JS"],
          value: [],
        },
        {
          id: 3,
          title: "Tools / Platforms",
          placeHolder: ["VS Code", "GitHub", "Docker"],
          value: [],
        },
        {
          id: 4,
          title: "Databases",
          placeHolder: ["Mongo", "SQL", "PostgreSQL"],
          value: [],
        },
      ],
      projectsDetails: [],
      certificationDetails: [],
      awardDetails: [],
    },
    loading: false,
    error: "",
    resumeId: "",
  },
  reducers: {
    setResumeId: (state, action) => {
      return { ...state, resumeId: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(save.pending, (state, action) => {
        return { ...state, loading: true };
      })
      .addCase(save.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          details: action.payload.data.details,
          resumeId: action.payload.data._id,
        };
      })
      .addCase(save.rejected, (state, action) => {
        return { ...state, loading: false, error: action.payload };
      })
      .addCase(getResume.pending, (state, action) => {
        return { ...state, loading: false };
      })
      .addCase(getResume.fulfilled, (state, action) => {
        return {
          ...state,
          details: action.payload.data.details,
          loading: false,
        };
      })
      .addCase(getResume.rejected, (state, action) => {
        return { ...state, loading: false, error: action.payload };
      });
  },
});

export const { setResumeId } = resumeSlice.actions;
export default resumeSlice.reducer;

export const save = createAsyncThunk(
  "resume/save",
  async (data, { rejectWithValue }) => {
    console.log("not even here");
    try {
      const { id, body } = data;
      let uri = id ? `/api/v1/resume/save?id=${id}` : "/api/v1/resume/save";
      console.log("URI: ", uri);
      console.log("Body: ", body);
      return await axios.put(uri, body);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getResume = createAsyncThunk(
  "resume/find",
  async (id, { rejectWithValue }) => {
    try {
      return await axios.get(`/api/v1/resume?id=${id}`);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
