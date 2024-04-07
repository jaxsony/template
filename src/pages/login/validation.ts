import * as Yup from "yup";
import { emailValidator } from "../../validations";
import { PASSWORD_REQUIRED } from "../../constants/messages";

export const LoginSchema = Yup.object({
    email: emailValidator,
    password: Yup.string().required(PASSWORD_REQUIRED),
});