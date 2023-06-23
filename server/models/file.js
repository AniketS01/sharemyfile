import mongoose from "mongoose";

const fileScheme = mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const file = mongoose.model("file", fileScheme);

export default file;
