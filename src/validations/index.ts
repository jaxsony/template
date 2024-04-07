import * as Yup from "yup";
import { isValidPhoneNumber } from "react-phone-number-input";
import { EMAIL_REQUIRED, INVALID_EMAIL, INVALID_PHONE, PHONE_REQUIRED } from "../constants/messages";

/**
 * Phone validator using Yup.
 * 
 * @constant
 * @name phoneValidator
 * @type {Yup.StringSchema<string>}
 */
export const phoneValidator = Yup.string().required(PHONE_REQUIRED).transform((value: string) => value.trim()).test('customValidation1', INVALID_PHONE, (value) => isValidPhoneNumber(value))

/**
 * Email validator using Yup.
 * 
 * @constant
 * @name emailValidator
 * @type {Yup.StringSchema<string>}
 */
export const emailValidator = Yup.string().email(INVALID_EMAIL).matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, INVALID_EMAIL).transform((value: string) => value.trim()).required(EMAIL_REQUIRED)
