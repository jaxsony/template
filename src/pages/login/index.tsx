import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, createSearchParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../../logo.svg';
import { Formik } from 'formik';
import storage from '../../helpers/storage';
import { LoginSchema } from './validation';
import InputText from '../../components/common/InputText';
import InputPassword from '../../components/common/InputPassword';
import { loginEmailPassword } from '../../services/auth.service';
import { toast } from 'react-toastify';
import sessionStorage from '../../helpers/sessionStorage';
import { useSelector } from 'react-redux';
import { getCaptchaToken } from '../../helpers/utils';
import { GOOGLE_CAPTCHA_RESPONSE_KEY } from '../../constants';
import GoogleCaptcha from '../../components/common/googleCaptcha';

/**
 * Form values type definition.
 */
type FormValues = {
    email: string;
    password: string;
}

export default function Login() {
    const AppName = process.env.REACT_APP_NAME;

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [isChecked, setIsChecked] = useState(true);

    const { ENABLE_RECAPTCHA, RECAPTCHA_SITE_KEY } = useSelector((state: any) => state.settings.settings)

    const rememberMe: any = storage.getData('remember-me');

    /**
     * Initial Form Values
     */
    const initialValues: FormValues = {
        email: rememberMe ? rememberMe.email : '',
        password: rememberMe ? rememberMe.password : '',
    }

    useEffect(() => {
        if (storage.getToken() != null) {
            return navigate('/home')
        } else {
            localStorage.removeItem('user-info');
            storage.clearToken();
        }
    }, [navigate])

    /**
     * Handles the change event of a checkbox input.
     * @param {ChangeEvent<HTMLInputElement>} event - The change event object.
     * @returns {void}
     */
    const onChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked)
    };

    /**
     * Submit Method to call when user clicks on login button
     * @async
     * @param {FormValues} values
     * @param {any} actions
     * @returns {*}
     */
    const submitForm = async (values: FormValues, { setSubmitting }: any) => {
        setLoading(true);
        setSubmitting(true);
        const formData: any = {
            email: values.email, password: values.password
        };

        /**
         * set captcha if captcha is enabled. 
         */
        if (ENABLE_RECAPTCHA) {
            await getAndSetCaptchaToken(formData);
        }

        loginEmailPassword(formData).then((response: any) => {
            setSubmitting(false);
            if (isChecked) {
                storage.setData('remember-me', { email: values.email, password: values.password, isChecked });
            } else {
                localStorage.removeItem('remember-me');
            }
            const {ENABLE_2FA_MAIL, ENABLE_2FA_MAIL_ADMIN, ENABLE_2FA_MAIL_SUB_ADMIN} = response.data;
            if (ENABLE_2FA_MAIL || ENABLE_2FA_MAIL_ADMIN || ENABLE_2FA_MAIL_SUB_ADMIN) {
                toast(response.msg, { type: toast.TYPE.INFO });
                sessionStorage.setData("2fa", values.email);
                navigate({
                    pathname: '/two-factor-authentication',
                    search: `?${createSearchParams({ email: values.email })}`
                });
            } else {
                handleLoginResponse(response);
            }
        }).catch((error: any) => {
            console.log(error)
            setLoading(false);
            toast(error.data.msg, { type: toast.TYPE.ERROR });
            setSubmitting(false);
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

    /**
     * Handles the response after a successful login.
     * @param {Object} responseData - The response data from the login API.
     * @returns {void}
     */
    const handleLoginResponse = (responseData: any) => {
        toast(responseData.msg, { type: toast.TYPE.SUCCESS });
        setLoading(false);
        storage.setToken(responseData.data.token.access.token);
        storage.setRefreshToken(responseData.data.token.refresh.token);
        navigate('/home');
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
                                        <Image className="img-fluid" src={Logo} alt="Logo" width={174} height={107} />
                                    </Link>
                                </div>
                                <div className="bg-body border border-light-subtle d-inline-block mt-3 p-3 p-sm-4 rounded-4 shadow text-start w-100">
                                    <h1 className="d-inline-block fw-bolder h4 mb-1 mt-1 pt-2 w-100 text-center">{AppName}</h1>
                                    <h4 className="fs-18 fw-normal text-center">Login</h4>
                                    <Formik
                                        validationSchema={LoginSchema}
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

                                                <InputPassword controlId="password" label='Password' placeholder="Password" touched={touched.password} handleBlur={handleBlur} handleChange={handleChange} errorsField={errors.password} value={values.password} />

                                                <Form.Group className="mb-3 pb-1">
                                                    <Row xs="auto" className="justify-content-between gx-0">
                                                        <Col>
                                                            <Form.Check id="rememberCheck" checked={isChecked} onChange={onChangeCheckbox} className="fs-15" type="checkbox" label="Remember Me" />
                                                        </Col>
                                                        <Col>
                                                            <Link className="fw-bolder text-decoration-none" to="/forgot-password">Forgot Password?</Link>
                                                        </Col>
                                                    </Row>
                                                </Form.Group>
                                                <Button className="fw-bolder w-100" variant="primary" type="submit" disabled={isSubmitting || loading}>
                                                    {loading ? 'Login Processing...' : 'Login'}
                                                </Button>
                                            </Form>
                                        )}
                                    </Formik>
                                    <GoogleCaptcha />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}
