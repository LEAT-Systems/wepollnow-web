import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";

const Test = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const updateTextDescription = async (state) => {
    await setEditorState(state);
    const data = convertToRaw(editorState.getCurrentContent());
  };
  return (
    <div className="w-full border flex flex-row items-center justify-center ">
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={updateTextDescription}
      />
    </div>
  );
};

export default Test;
