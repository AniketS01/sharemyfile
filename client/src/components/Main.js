import React, { useEffect, useState } from "react";
import files from "../constants/files.svg";
import { uploadFile } from "../services/api";
import { LuCopy } from "react-icons/lu";
import { toast } from "react-toastify";

const Main = () => {
  const [file, setFile] = useState("");
  const [imgData, setImgData] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        setImgData(data);
      }
    };
    getImage();
  }, [file]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (imgData) {
        const res = await uploadFile(imgData);
        console.log(res);
        setLink(res.path);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="text-center text-sm sm:text-xl mt-5">
        Share files upto 500mb, link expires once the file is downloaded
      </div>
      <div className="sm:grid sm:grid-cols-2 sm:gap-3">
        <div className="flex flex-col justify-center items-center mt-[90px] sm:mt-[190px]">
          <form onSubmit={handleSubmit}>
            <label for="file-input" class="sr-only">
              Choose file
            </label>
            <input
              type="file"
              name="file-input"
              id="file-input"
              onChange={(e) => setFile(e.target.files[0])}
              class="w-[300px] border-none rounded-lg bg-gray-300 text-sm focus:z-10 file:bg-purple-600 file:text-white file:mr-4 file:py-3 file:px-4"
            />
            <div className="flex justify-center mt-5">
              <button
                type="submit"
                className="bg-purple-700 text-white p-3 px-6 hover:bg-purple-900 rounded-lg"
              >
                UPLOAD
              </button>
            </div>
          </form>
          {link && (
            <div className=" flex mt-5 p-1 rounded-lg bg-gray-300">
              <div className="p-3">
                {link && (
                  <input
                    value={link}
                    className="bg-gray-300 text-ellipsis overflow-hidden ..."
                  />
                )}
              </div>
              <div className="border-l-4 border-gray-100 flex justify-center items-center">
                <button
                  className="m-3"
                  onClick={(e) => {
                    navigator.clipboard.writeText(link);
                    toast.success("copied to clipboard!");
                  }}
                >
                  <LuCopy size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center mt-[90px] sm:mt-[190px]">
          <img src={files} className="w-[550px]" />
        </div>
      </div>
    </div>
  );
};

export default Main;
