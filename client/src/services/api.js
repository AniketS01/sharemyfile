import axios from "axios";

export const uploadFile = async (data) => {
  try {
    const res = await axios.post("http://localhost:8000/upload", data);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
