import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../../logo.svg';
import { Formik } from 'formik';
import InputText from '../../components/common/InputText';
import { forgotPassword } from '../../services/auth.service';
import { ForgotSchema } from './validation';
import storage from '../../helpers/storage';
import { toast } from 'react-toastify';
import GoogleCaptcha from '../../components/common/googleCaptcha';
import { useSelector } from 'react-redux';
import { getCaptchaToken } from '../../helpers/utils';
import { GOOGLE_CAPTCHA_RESPONSE_KEY } from '../../constants';

/**
 * Form values type definition.
 */
type FormValues = {
    email: string;
}

export default function ForgotPassword() {
    const AppName = process.env.REACT_APP_NAME;
    const { ENABLE_RECAPTCHA, RECAPTCHA_SITE_KEY } = useSelector((state: any) => state.settings.settings)

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    /**
     * Initial Form Values
     */
    const initialValues: FormValues = {
        email: "",
    };

    /**
     * Hook to check if user is already login 
     */
    useEffect(() => {
        if (storage.getToken() != null) {
            return navigate('/home')
        }
    }, [navigate])

    /**
     * Submit Method to call when user clicks on forgot button
     * @async
     * @param {FormValues} values
     * @param {any} actions
     * @returns {void}
     */
    const submitForm = async (values: FormValues, { setSubmitting, resetForm }: any) => {
        setLoading(true);
        setSubmitting(true);
        const formData: any = {
            email: values.email
        };

        /**
         * set captcha if captcha is enabled. 
         */
        if (ENABLE_RECAPTCHA) {
            await getAndSetCaptchaToken(formData);
        }

        forgotPassword(formData).then((response: any) => {
            setLoading(false);
            setSubmitting(false);
            toast(response.msg, { type: toast.TYPE.SUCCESS });
            resetForm(initialValues);
            navigate('/login')
        }).catch((error: any) => {
            setLoading(false);
            setSubmitting(false);
            toast(error.data.msg, { type: toast.TYPE.ERROR });
        })
    }

    /**
     * Retrieves and sets the captcha token in the provided form data.
     * @param {Object} formData - The form data object.
     * @returns {Promise<void>}
     */
    const getAndSetCaptchaToken = async (formData: any) => {
        const captchaToken: string = await getCaptchaToken(RECAPTCHA_SITE_KEY);
        if (captchaToken) {
            formData[GOOGLE_CAPTCHA_RESPONSE_KEY] = captchaToken;
        }
    }

    return (
        <React.Fragment>
            <Row className="g-0 vh-100 position-relative">
                <Col sm className="h-100">
                    <div className="h-100 overflow-auto p-4 p-md-5 text-center w-100">
                        <Row className="justify-content-center g-0">
                            <Col lg={6} xl={5} sm={8} md={6} xxl={4}>
                                <div>
                                    <Link to="/" className="d-inline-block">
                                        {/* <Image className="img-fluid" src={Logo} alt="Logo" width={174} height={107} /> */}
                                    </Link>
                                </div>
                                <div className="bg-body border border-light-subtle d-inline-block mt-3 p-3 p-sm-4 rounded-4 shadow text-start w-100">
                                    <h1 className="d-inline-block fw-bolder h4 mb-1 mt-1 pt-2 w-100 text-center">{AppName}</h1>
                                    <h4 className="fs-18 fw-normal text-center">Forgot Password</h4>
                                    <Formik
                                        validationSchema={ForgotSchema}
                                        initialValues={initialValues}
                                        onSubmit={(values: FormValues, actions) => {
                                            submitForm(values, actions)
                                        }}
                                    >
                                        {({
                                            handleSubmit,
                                            handleChange,
                                            handleBlur,
                                            values,
                                            errors,
                                            touched,
                                            isSubmitting
                                        }) => (
                                            <Form className="text-start pt-4" noValidate onSubmit={handleSubmit}>

                                                <InputText controlId="email" label='email' placeholder="email" touched={touched.email} handleBlur={handleBlur} handleChange={handleChange} errorsField={errors.email} value={values.email} />

                                                <Button className="fw-bolder w-100" variant="primary" type="submit" disabled={isSubmitting}>
                                                    {loading ? 'Sending Request...' : 'Forgot'}
                                                </Button>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                                <Form.Group className="mt-3">
                                    <Row xs="auto" className="justify-content-between gx-0">
                                        <Col>
                                        </Col>
                                        <Col>
                                            back to <Link className="fw-bolder text-decoration-none" to="/login">Login</Link>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                            <GoogleCaptcha />
                        </Row>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}