import axios from "axios";
export const uploadImage = async (file) => {
  try {
    let formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );
    formData.append("cloud_name", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    // hitting api
    const { data } = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
      formData,
      config
    );
    return data;
  } catch (error) {
    return error;
  }
};
