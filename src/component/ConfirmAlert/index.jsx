import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import ConfirmModal from "./ConfirmModal";

const confirm = (props) => {
  return new Promise((resolve) => {
    let element = document.createElement("div");

    const resolveHandler = (result) => {
      unmountComponentAtNode(element);
      element = null;
      resolve(result);
    };

    render(<ConfirmModal {...props} onClose={resolveHandler} />, element);
  });
};

export default confirm;
