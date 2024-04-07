import React, { FC, useState } from 'react';
import Form from 'react-bootstrap/Form';
import SvgIcons from './SvgIcons';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';

interface IInputPassword {
    controlId: string;
    label: string;
    placeholder: string;
    handleChange: any;
    handleBlur: any;
    errorsField: any;
    touched: any
    value: any
    isPasswordHintVisible?: boolean
}

/**
 * Input Type Password  Component
 *
 * @param {{ controlId: any; label: any; placeholder: any; handleChange: any; handleBlur: any; errorsField: any; touched: any; value: any; isPasswordHintVisible: any; }} {
    controlId, label, placeholder, handleChange, handleBlur, errorsField, touched, value, isPasswordHintVisible
}
 * @returns {*}
 */
const InputPassword: FC<IInputPassword> = ({
    controlId, label, placeholder, handleChange, handleBlur, errorsField, touched, value, isPasswordHintVisible
}) => {
    const [passwordType, setPasswordType] = useState("password");

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const renderTooltip = (props: any) => (
        <Tooltip {...props}>
            <ListGroup as="ul" className="text-start tooltipDottedList fs-12 mb-1">
                <ListGroup.Item as="li" className="mt-1 bg-transparent border-0 list-group-item p-0 position-relative ps-3 text-white">Must contain 1 Capital letter.</ListGroup.Item>
                <ListGroup.Item as="li" className="mt-1 bg-transparent border-0 list-group-item p-0 position-relative ps-3 text-white">Must contain 1 lower case letter.</ListGroup.Item>
                <ListGroup.Item as="li" className="mt-1 bg-transparent border-0 list-group-item p-0 position-relative ps-3 text-white">Must contain at least 2 numbers.</ListGroup.Item>
                <ListGroup.Item as="li" className="mt-1 bg-transparent border-0 list-group-item p-0 position-relative ps-3 text-white">Must contain at least 1 of the following special characters !$%^()_+*#</ListGroup.Item>
                <ListGroup.Item as="li" className="mt-1 bg-transparent border-0 list-group-item p-0 position-relative ps-3 text-white">Must be a minimum of 15 characters.</ListGroup.Item>
                <ListGroup.Item as="li" className="mt-1 bg-transparent border-0 list-group-item p-0 position-relative ps-3 text-white">No spaces.</ListGroup.Item>
                <ListGroup.Item as="li" className="mt-1 bg-transparent border-0 list-group-item p-0 position-relative ps-3 text-white">Must be different than previous passwords.</ListGroup.Item>
            </ListGroup>
        </Tooltip>
    );

    return (
        <Form.Group className="mb-3 pb-1" controlId={controlId}>
            <Form.Label className="mb-1 text-uppercase  fw-bolder  ">{label}
                {isPasswordHintVisible ?
                    <OverlayTrigger
                        placement="top"
                        overlay={renderTooltip}
                    >
                        <Button className="align-baseline d-inline-block infoIcon ms-1 p-0" variant="link">{SvgIcons.infoCircleIcon}</Button>
                    </OverlayTrigger> : ''}
            </Form.Label>
            <div className="position-relative form-icon-active">
                <Form.Control value={value} type={passwordType} placeholder={placeholder} onBlur={handleBlur} onChange={handleChange} isInvalid={!!errorsField && touched} />
                <Form.Control.Feedback type="invalid">
                    {touched ? errorsField : ''}
                </Form.Control.Feedback>
                <div onClick={togglePassword} className="align-items-center cursor-pointer d-flex end-0 h-40 justify-content-center position-absolute text-center toggleEyeIcons top-0 w-40">
                    {passwordType === "password" ? <span className="eyeOff">{SvgIcons.eyeOffIcon}</span> : <span className="eyeOn">{SvgIcons.eyeIcon}</span>}
                </div>
            </div>
        </Form.Group>
    );
}

export default InputPassword