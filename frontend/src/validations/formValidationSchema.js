import * as yup from "yup";
export const SignUpSchema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  terms: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
});

export const SignInSchema = yup.object().shape({
  email: yup.string().email().required("Email must be submitted"),
  password: yup.string().min(8).required(),
  terms: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
});

export const ForgetPasswordSchema = yup.object().shape({
  email: yup.string().email().required("Email must be submitted"),
});

export const ResetPasswordSchema = yup.object().shape({
  password: yup.string().min(8).required(),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords doesn't match")
    .required(),
});

export const WaitlistSchema=yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().email().required(),
  phone_number: yup.string().matches(/^0\d{10}$/, 'Phone number must start with 0 and contain 11 digits').required(),
})