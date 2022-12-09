import React from "react";
import classes from "./modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = ({ onDismissModal }) => {
  return <div className={classes.backdrop} onClick={onDismissModal}></div>;
};
const Modaloverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};
//
const portalElement = document.getElementById("overlays");
const Modal = ({ children, onDismissModal }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onDismissModal={onDismissModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Modaloverlay>{children}</Modaloverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
