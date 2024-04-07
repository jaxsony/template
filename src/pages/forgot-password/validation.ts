import * as Yup from "yup";
import { emailValidator } from "../../validations";

export const ForgotSchema = Yup.object({
    email: emailValidator,
});