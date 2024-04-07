import React, { FC, useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Input from 'react-phone-number-input/input'
import 'react-phone-number-input/style.css'
import { Field } from 'formik';

interface IInputText {
    controlId: string;
    label: string;
    placeholder: string;
    handleChange: any;
    handleBlur: any;
    errorsField: any;
    touched: any
    value: any
    disabled?: any
    setFieldValue?: any
}

const PhoneInput: React.FC<IInputText> = ({ placeholder, value, controlId, errorsField, touched, handleBlur, setFieldValue }) => {
    const inputRef = useRef<HTMLInputElement | null>();

    useEffect(() => {
        inputRef.current?.addEventListener('blur', handleBlur);
    }, [inputRef, handleBlur])

    return (<Input
        ref={inputRef}
        className={!(!!errorsField && touched) ? 'form-control' : 'form-control is-invalid'}
        name={controlId}
        placeholder={placeholder}
        value={value}
        onChange={(v) => { setFieldValue(controlId, v) }} />
    );
}


/**
 * Input Type Phone  Component
 *
 * @param {{ controlId: any; label: any; placeholder: any; handleChange: any; handleBlur: any; errorsField: any; touched: any; }} { controlId, label, placeholder, handleChange, handleBlur, errorsField, touched }
 * @returns {*}
 */
const InputPhoneText: FC<IInputText> = ({
    controlId, label, placeholder, handleChange, handleBlur, errorsField, touched, value, disabled, setFieldValue
}) => {
    return (
        <Form.Group className="mb-3 pb-1">
            <Form.Label className="mb-1 text-uppercase fw-bolder">{label}</Form.Label>
            <div className="position-relative">
                <Field as={PhoneInput} controlId={controlId} value={value} placeholder={placeholder} handleBlur={handleBlur} handleChange={handleChange} touched={touched} disabled={disabled} errorsField={errorsField} setFieldValue={setFieldValue}></Field>
                {(!!errorsField && touched) ? <div className="invalid-feedback">
                    {errorsField}
                </div> : ''}
            </div>
        </Form.Group>
    );
}

export default InputPhoneText