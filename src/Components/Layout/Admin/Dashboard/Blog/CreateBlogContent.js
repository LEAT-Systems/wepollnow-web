import React, { useState } from "react";
import Header from "../../Header";
import { Link } from "react-router-dom";
import gallery from "../../../../../images/gallery.png";
import { Editor } from "react-draft-wysiwyg";
import { FileUploader } from "react-drag-drop-files";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
/* Not used by Vincent */

const fileTypes = ["JPG", "PNG", "JPEG"];
const CreateBlogContent = () => {
  const [file, setFile] = useState(null);
  const handleFileChange = (file) => {
    setFile(file);
  };
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const handleChange = (state) => {
    setEditorState(state);
  };

  console.log(editorState);

  return (
    <>
      <Header />
      <form className="px-4 md:px-6 lg:px-12 my-4">
        <header className="flex flex-row justify-between py-4 w-full">
          <div className="flex flex-col space-y-2">
            <h2 className="font-extrabold text-2xl text-[#082a0f] capitalize">
              Manage Blog
            </h2>
            <div className="flex flex-row space-x-2">
              <Link to={"/admin/blog"} className="font-light text-gray-500">
                Manage Blog
              </Link>
              <p>{">"}</p>
              <Link to="" className="font-bold">
                Create New Blog
              </Link>
            </div>
          </div>

          <nav className="pl-3 h-full my-auto flex text-gray-500">
            <Link to="/admin/blog">
              <button className="p-3 rounded-md bg-[#08c127] text-white px-5 animate">
                Preview Post
              </button>
            </Link>
          </nav>
        </header>
        <section className="w-full pt-6">
          <div className="flex flex-row justify-center items-center space-x-12">
            <div className="w-full space-y-12">
              <div className="flex flex-col space-y-1">
                <p>Blog Title</p>
                <input
                  className="w-full p-4 border rounded"
                  placeholder="Enter Blog Title"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <p>Upload Featured Image</p>
                <FileUploader
                  handleChange={handleFileChange}
                  name="file"
                  types={fileTypes}
                  maxSize={5}
                >
                  <div className="w-full p-12 rounded border border-dashed border-gray-500 hover:cursor-pointer">
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex flex-row items-center justify-center space-x-3">
                        <img src={gallery} alt="blankImg" />
                        <p>
                          Drag and drop image or{" "}
                          <button>
                            <span className="text-[#08c127] underline decoration-2 px-1">
                              Browse
                            </span>{" "}
                          </button>
                          to upload
                        </p>
                      </div>

                      <p className="text-sm font-light text-gray-500">
                        Max size 5MB (png, jpg, jpeg){" "}
                      </p>
                    </div>
                  </div>
                </FileUploader>
              </div>
              <div className="flex flex-col space-y-1">
                <p>Blog Content</p>
                <Editor
                  editorStyle={{ height: "300px" }}
                  editorState={editorState}
                  wrapperClassName=""
                  editorClassName="border"
                  toolbarClassName="toolbar-class"
                  onEditorStateChange={handleChange}
                />
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default CreateBlogContent;
