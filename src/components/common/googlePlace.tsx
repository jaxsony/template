

import React, { FC, useEffect, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Field } from 'formik';

declare global {
    interface Window {
        initMap: any;
        google: any;
    }
}


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

const InputPlaces: React.FC<IInputText> = ({ placeholder, value, controlId, errorsField, touched, handleBlur, setFieldValue }) => {

    const SCRIPT_ID = 'google-place-script';
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const html = useRef<HTMLInputElement>(null);

    /**
     * Hook on mount and unmount app.
     */
    useEffect(() => {
        setIsMounted(true);
        loadScript();
        return () => {
            if (isMounted) {
                removeScript();
            }
        };
    }, [isMounted]);

    useEffect(() => {

    }, [html])

    /**
     * Remove script when component is unmounted
     */
    const removeScript = () => {
        const script = document.getElementById(SCRIPT_ID);
        if (script) {
            script.remove();
        }
    }

    /**
    * Load facebook login script.
    */
    const loadScript = () => {
        const scriptAdded = document.getElementById(SCRIPT_ID);
        if (scriptAdded || !isMounted) {
            return;
        }
        window.initMap = () => {
            onLoad();
        }
        const script = document.createElement('script')
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_API_KEY}&libraries=places&callback=initMap`
        script.id = SCRIPT_ID;
        script.async = true;
        document.body.appendChild(script);
    }

    /**
     * on Load facebook initialism the facebook instance.
     */
    const onLoad = () => {
        const iip: HTMLInputElement = html.current as HTMLInputElement;
        const autocomplete = new window.google.maps.places.Autocomplete(iip, {});
        autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            if (place) {
                setFieldValue(controlId, place.formatted_address);
            }
        })
    }

    const onkeydownHandle = (e: KeyboardEvent) => {
        const { key } = e;
        if (key === "Enter") {
            e.preventDefault();
        }
    }

    return (<input ref={html}
        className={!(!!errorsField && touched) ? 'form-control' : 'form-control is-invalid'}
        name={controlId}
        value={value}
        placeholder={placeholder}
        onKeyDownCapture={(event: any) => onkeydownHandle(event)}
        onBlur={handleBlur}
        onChange={(e: any) => setFieldValue(controlId, e.target?.value)} />);
}


/**
 * Input Type Phone  Component
 *
 * @param {{ controlId: any; label: any; placeholder: any; handleChange: any; handleBlur: any; errorsField: any; touched: any; setFieldValue: any; }} { controlId, label, placeholder, handleChange, handleBlur, errorsField, touched, setFieldValue }
 * @returns {*}
 */
const GooglePlaceText: FC<IInputText> = ({
    controlId, label, placeholder, handleChange, handleBlur, errorsField, touched, value, disabled, setFieldValue
}) => {
    return (
        <Form.Group className="mb-3 pb-1">
            <Form.Label className="mb-1 text-uppercase fw-bolder">{label}</Form.Label>
            <div className="position-relative">
                <Field as={InputPlaces} controlId={controlId} value={value} placeholder={placeholder} handleBlur={handleBlur} handleChange={handleChange} touched={touched} disabled={disabled} errorsField={errorsField} setFieldValue={setFieldValue}></Field>
                {(!!errorsField && touched) ? <div className="invalid-feedback">
                    {errorsField}
                </div> : ''}
            </div>
        </Form.Group>
    );
}

export default GooglePlaceText