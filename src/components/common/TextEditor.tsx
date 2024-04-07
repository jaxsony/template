import React, { useState, FC } from "react";
import ReactQuill from "react-quill";
import Form from "react-bootstrap/Form";
import "react-quill/dist/quill.snow.css";
import "./styles.scss";

interface IInputText {
  controlId: string;
  label: string;
  placeholder: string;
  handleChange?: any;
  handleBlur?: any;
  errorsField: any;
  touched: any;
  value: any;
  disabled?: any;
  setFieldValue:any;
}

/**
 * Input Type Phone  Component
 *
 * @param {{ controlId: any; label: any; placeholder: any; handleChange: any; handleBlur: any; errorsField: any; touched: any; }} { controlId, label, placeholder, handleChange, handleBlur, errorsField, touched }
 * @returns {*}
 */
const TextEditor: FC<IInputText> = ({
  controlId,
  label,
  placeholder,
  handleChange,
  handleBlur,
  errorsField,
  touched,
  value,
  disabled,
  setFieldValue,
}) => {
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link"], // "image", "video"
      ["clean"],
    ],
  };

  const errorCss = errorsField ? 'show-error' : '';

  //   const formats = [
  //     "header",
  //     "bold",
  //     "italic",
  //     "underline",
  //     "strike",
  //     "blockquote",
  //     "list",
  //     "bullet",
  //     "link",
  //     "color",
  //     "background",
  //     "align",
  //     "size",
  //     "font",
  //     "indent",
  //     "clean"
  //   ];
  return (
    <Form.Group className="mb-3 pb-1" controlId={controlId}>
      <Form.Label className="mb-1 text-uppercase fw-bolder">{label}</Form.Label>
      <div className="position-relative">
        <ReactQuill          
          theme="snow"
          value={value}
          defaultValue={value}
          placeholder={placeholder}
        //   onBlur={handleBlur}
          onBlur={(event) => {
            console.log("event",event)
            // setFieldValue(controlId, event);
          }}
          onChange={(event) => {
            
            const value = event == '<p><br></p>' ?'':event;
            setFieldValue(controlId, value);
          }}
          readOnly={disabled}
          modules={modules}
          //   formats={formats}
        />
        <Form.Control.Feedback type="invalid" className={errorCss}>
          {errorsField}
        </Form.Control.Feedback>
      </div>
    </Form.Group>
  );
};

export default TextEditor;
