import React, { useState, useRef } from "react";
import Header from "../../Header";
import { Link, useHistory } from "react-router-dom";
import gallery from "../../../../../images/gallery.png";
import spinner from "../../../../../images/spinner.gif";
import { FileUploader } from "react-drag-drop-files";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// Allowable file types
const fileTypes = ["JPG", "PNG", "JPEG"];

const CreateBlogContent = () => {
  const titleRef = useRef();
  const history = useHistory();
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    title: "",
    image: {},
    content: "",
    date_posted: "",
  });

  // Get current date
  const currentDate = new Date().toJSON().slice(0, 10);

  // geting the uploaded image
  const handleFileChange = (file) => {
    setFile(file);
  };

  // The text editor state
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  ///////////////// Convert content to HTML
  const [convertedContent, setConvertedContent] = useState(null);
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  ///////////////////////////////////

  const updateState = () => {
    setIsSubmitting(true);
    setFormState({
      title: titleRef.current.value,
      content: convertedContent,
      image: file,
      date_posted: currentDate,
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send to API
    let formData = new FormData();
    formData.append("title", formState.title);
    formData.append("content", formState.content);
    formData.append("image", formState.image);
    formData.append("date_posted", formState.date_posted);

    const requestOptions = {
      method: "POST",
      body: formData,
    };
    const sendData = async () => {
      const response = await fetch(
        "https://wepollnow.azurewebsites.net/blog/",
        requestOptions
      );
      if (!response.ok) {
        alert("Failed to upload...Try again...");
      } else {
        history.push("/admin/blog", { replace: true });
        setIsSubmitting(false);
      }
    };
    sendData();
  };

  return (
    <>
      <Header />
      <form className="px-4 my-4 md:px-6 lg:px-12" onSubmit={handleSubmit}>
        {isSubmitting && (
          <div className="flex flex-row items-center justify-center space-x-2">
            <img src={spinner} alt="loading_spinner" className="w-5 h-5" />
            <p>Getting ready to upload...</p>
          </div>
        )}
        <header className="flex flex-row justify-between w-full py-4">
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

          <nav className="flex h-full pl-3 my-auto text-gray-500">
            <button
              onClick={updateState}
              type="submit"
              className="p-3 rounded-md bg-[#08c127] text-white px-5 animate"
            >
              Preview Post
            </button>
          </nav>
        </header>
        <section className="w-full pt-6">
          <div className="flex flex-row items-center justify-center space-x-12">
            <div className="w-full space-y-12">
              <div className="flex flex-col space-y-1">
                <p className="font-semibold">Blog Title</p>
                <input
                  required
                  type="text"
                  name="title"
                  ref={titleRef}
                  className="w-full p-4 border rounded"
                  placeholder="Enter Blog Title"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <p className="font-semibold">Upload Featured Image</p>
                <FileUploader
                  onTypeError={(err) => setFileError(err)}
                  onDrop={(file) => setFileName(file.name)}
                  onSelect={(file) => setFileName(file.name)}
                  handleChange={handleFileChange}
                  name="file"
                  types={fileTypes}
                  maxSize={5}
                >
                  <div className="w-full p-12 border border-gray-500 border-dashed rounded hover:cursor-pointer">
                    <div className="flex flex-col items-center justify-center space-y-2">
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
                      <div className="flex flex-row items-center justify-center space-x-2">
                        <span className="p-1 px-2 bg-yellow-300 rounded">
                          Selected File:
                        </span>
                        <p>{fileName === "" ? "No File Selected" : fileName}</p>
                      </div>
                      <p className="p-1 text-red-500 rounded">
                        {fileName === "" && fileError !== "" && fileError}
                      </p>
                    </div>
                  </div>
                </FileUploader>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="font-semibold">
                  Blog Content
                  <i> (Don't paste an image in this editor)</i>
                </p>
                <Editor
                  editorStyle={{ height: "300px" }}
                  editorState={editorState}
                  editorClassName="border"
                  onEditorStateChange={handleEditorChange}
                  toolbar={{
                    options: [
                      "inline",
                      "fontSize",
                      "fontFamily",
                      "textAlign",
                      "colorPicker",
                      "link",
                      "remove",
                      "history",
                    ],
                    inline: {
                      inDropdown: false,
                      options: ["bold", "italic", "underline"],
                    },
                  }}
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
