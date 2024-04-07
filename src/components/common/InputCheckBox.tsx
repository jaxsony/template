import React, { FC } from "react";
import Form from "react-bootstrap/Form";

interface IInputCheckBox {
  controlId: string;
  label: string;
  placeholder?: string;
  handleChange: any;
  handleBlur: any;
  errorsField: any;
  touched: any;
  value?: any;
  disabled?: any;
}

/**
 * Input Type Text  Component
 *
 * @param {{ controlId: any; label: any; placeholder: any; handleChange: any; handleBlur: any; errorsField: any; touched: any; }} {
    controlId, label, placeholder, handleChange, handleBlur, errorsField, touched
}
 * @returns {*}
 */
const InputCheckBox: FC<IInputCheckBox> = ({
  controlId,
  label,
  placeholder,
  handleChange,
  handleBlur,
  errorsField,
  touched,
  value,
  disabled,
}) => {
  return (
    <Form.Group className="mb-3 pb-1" controlId={controlId}>
      {/* <Form.Label className="mb-1 text-uppercase fw-bolder">{label}</Form.Label> */}
      <div className="position-relative">
        {/* <Form.Control
          value={value}
          type="text"
          placeholder={placeholder}
          onBlur={handleBlur}
          onChange={handleChange}
          isInvalid={!!errorsField && touched}
          disabled={disabled}
        /> */}
        <Form.Check // prettier-ignore
          name={controlId}
          disabled={disabled}
          type="switch"
          label={label}
          id={`switch-${controlId}`}
          onBlur={handleBlur}
          onChange={handleChange}
          isInvalid={!!errorsField && touched}
          checked={value}
        />
        <Form.Control.Feedback type="invalid">
          {errorsField}
        </Form.Control.Feedback>
      </div>
    </Form.Group>
  );
};

export default InputCheckBox;
