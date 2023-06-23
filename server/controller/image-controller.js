import file from "../models/file.js";

export const uploadImage = async (req, res) => {
  const fileObj = {
    path: req.file.path,
    name: req.file.originalname,
  };
  try {
    const resp = await file.create(fileObj);
    res.status(200).json({ path: `http://localhost:8000/file/${resp._id}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const downloadImage = async (req, res) => {
  try {
    const data = await file.findById(req.params.fileId);
    res.download(data.path, data.name);
    const d = await file.findByIdAndDelete(req.params.fileId);
    console.log(d);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
